const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value, max = 500) => String(value || '').trim().slice(0, max);

module.exports = async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const body = typeof request.body === 'string' ? JSON.parse(request.body || '{}') : (request.body || {});

  // Bots commonly fill hidden fields. Return success without sending so the
  // endpoint does not reveal the spam check.
  if (clean(body.website, 100)) return response.status(200).json({ ok: true });

  const enquiry = {
    name: clean(body.name, 120),
    email: clean(body.email, 180),
    phone: clean(body.phone, 80),
    location: clean(body.location, 180),
    requestType: clean(body.requestType, 80),
    serviceNeeded: clean(body.serviceNeeded, 160),
    message: clean(body.message, 3000),
  };

  if (!enquiry.name || !EMAIL_PATTERN.test(enquiry.email) || !enquiry.phone || !enquiry.message) {
    return response.status(400).json({ error: 'Please complete all required fields.' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured.');
    return response.status(503).json({ error: 'Email delivery is temporarily unavailable.' });
  }

  const lines = [
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone}`,
    `Location: ${enquiry.location || 'Not provided'}`,
    `Request type: ${enquiry.requestType || 'Service request'}`,
    `Service: ${enquiry.serviceNeeded || 'Not specified'}`,
    '',
    enquiry.message,
  ];

  const delivery = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM_EMAIL || 'Nyumba Dynamics Website <website@nyumbadynamics.com>',
      to: [process.env.ENQUIRY_TO_EMAIL || 'info@nyumbadynamics.com'],
      reply_to: enquiry.email,
      subject: `${enquiry.requestType || 'Website enquiry'}: ${enquiry.serviceNeeded || 'General request'}`,
      text: lines.join('\n'),
    }),
  });

  if (!delivery.ok) {
    const details = await delivery.text();
    console.error('Resend delivery failed:', delivery.status, details.slice(0, 500));
    return response.status(502).json({ error: 'We could not deliver your request. Please try WhatsApp or call us.' });
  }

  return response.status(200).json({ ok: true });
};
