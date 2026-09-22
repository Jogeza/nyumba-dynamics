const handler = require('../api/enquiry');

const createResponse = () => {
  const response = {
    statusCode: 200,
    payload: undefined,
    headers: {},
    setHeader: jest.fn((key, value) => { response.headers[key] = value; }),
    status: jest.fn((code) => { response.statusCode = code; return response; }),
    json: jest.fn((payload) => { response.payload = payload; return response; }),
  };
  return response;
};

const validBody = {
  name: 'Test Customer',
  email: 'customer@example.com',
  phone: '+256700000000',
  location: 'Kampala',
  requestType: 'Service request',
  serviceNeeded: 'Electrical Services',
  message: 'Please arrange an assessment.',
};

afterEach(() => {
  delete process.env.RESEND_API_KEY;
  jest.restoreAllMocks();
});

test('enquiry endpoint rejects incomplete requests', async () => {
  const response = createResponse();
  await handler({ method: 'POST', body: {} }, response);
  expect(response.statusCode).toBe(400);
});

test('enquiry endpoint reports missing email configuration honestly', async () => {
  const response = createResponse();
  jest.spyOn(console, 'error').mockImplementation(() => undefined);
  await handler({ method: 'POST', body: validBody }, response);
  expect(response.statusCode).toBe(503);
  expect(response.payload.error).toMatch(/temporarily unavailable/i);
});

test('enquiry endpoint delivers a validated request through Resend', async () => {
  process.env.RESEND_API_KEY = 'test-key';
  global.fetch = jest.fn().mockResolvedValue({ ok: true });
  const response = createResponse();
  await handler({ method: 'POST', body: validBody }, response);
  expect(response.statusCode).toBe(200);
  expect(global.fetch).toHaveBeenCalledWith(
    'https://api.resend.com/emails',
    expect.objectContaining({ method: 'POST' })
  );
  const request = JSON.parse(global.fetch.mock.calls[0][1].body);
  expect(request.to).toEqual(['info@nyumbadynamics.com']);
  expect(request.reply_to).toBe(validBody.email);
});
