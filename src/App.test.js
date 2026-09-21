import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// Carousel/animation libraries aren't relevant to a routing/render smoke test
// and pull in browser-only APIs the jsdom test environment doesn't provide.
jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div data-testid="swiper-mock">{children}</div>,
  SwiperSlide: ({ children }) => <div data-testid="swiper-slide-mock">{children}</div>,
}), { virtual: true });
jest.mock('swiper/modules', () => ({
  Autoplay: {},
  EffectFade: {},
  Navigation: {},
  Pagination: {},
  Thumbs: {},
  FreeMode: {},
}), { virtual: true });
jest.mock('swiper/css', () => ({}), { virtual: true });
jest.mock('swiper/css/effect-fade', () => ({}), { virtual: true });
jest.mock('swiper/css/navigation', () => ({}), { virtual: true });
jest.mock('swiper/css/pagination', () => ({}), { virtual: true });
jest.mock('swiper/css/thumbs', () => ({}), { virtual: true });
jest.mock('swiper/css/free-mode', () => ({}), { virtual: true });

const renderAt = (path = '/') => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

const newServiceRoutes = [
  ['baby-proofing', 'Baby Proofing'],
  ['locksmith', 'Locksmith Services'],
  ['appliance-repair', 'Appliance Repair'],
  ['preventive-maintenance', 'Preventive Maintenance'],
  ['safety-proofing', 'Safety Proofing'],
  ['swimming-pool-maintenance', 'Swimming Pool Maintenance'],
  ['roof-tile-cleaning', 'Roof-Tile Cleaning'],
];

test('renders the Nyumba Dynamics homepage', () => {
  renderAt();
  expect(screen.getByRole('heading', { name: /What do you need done on your property/i })).toBeInTheDocument();
});

test('renders an accessible service search', () => {
  renderAt();
  expect(screen.getByRole('textbox', { name: /Search property engineering/i })).toBeInTheDocument();
});

test('popular service chips open a pre-filled consultation', () => {
  renderAt();
  fireEvent.click(screen.getByRole('button', { name: 'Electrical' }));
  expect(window.location.pathname).toBe('/consultation');
  expect(window.location.search).toBe('?service=electrical-services');
  expect(screen.getAllByText('Electrical Services').length).toBeGreaterThan(0);
});

test('renders all four service categories', () => {
  renderAt();
  ['Construction & Repair', 'Safety & Maintenance', 'Smart Home Solutions', 'Lifestyle Enhancements']
    .forEach((name) => expect(screen.getByRole('heading', { name })).toBeInTheDocument());
});

test.each(newServiceRoutes)('renders the /services/%s route', (slug, heading) => {
  renderAt(`/services/${slug}`);
  expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Request This Service/i })).toHaveAttribute('href', '/consultation');
  expect(screen.getAllByRole('link', { name: /Chat On WhatsApp/i })
    .some((link) => link.href.startsWith('https://wa.me/'))).toBe(true);
});

test('uses truthful Service Showcase wording', () => {
  renderAt('/properties');
  expect(screen.getByRole('heading', { level: 1, name: 'Service Showcase' })).toBeInTheDocument();
  expect(screen.getByText(/Authentic Nyumba Dynamics field imagery/i)).toBeInTheDocument();
});

test('renders the four-step service process without placeholder testimonials', () => {
  renderAt();
  ['Tell Us What You Need', 'Review The Scope', 'Get A Clear Quote', 'Final Quality Check']
    .forEach((name) => expect(screen.getByRole('heading', { name })).toBeInTheDocument());
  expect(screen.queryByText(/Evangeline Lee/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Trusted By Thousands?/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Trusted By Thousand Of People/i)).not.toBeInTheDocument();
});

test('homepage includes consultation and WhatsApp calls to action', () => {
  renderAt();
  expect(screen.getByRole('link', { name: /Request a Free Quote/i })).toHaveAttribute('href', '/consultation');
  expect(screen.getAllByRole('link', { name: /WhatsApp/i }).some((link) => link.href.startsWith('https://wa.me/'))).toBe(true);
});

test('every rendered homepage image has an alt attribute', () => {
  const { container } = renderAt();
  const images = Array.from(container.querySelectorAll('img'));
  expect(images.length).toBeGreaterThan(0);
  images.forEach((image) => expect(image).toHaveAttribute('alt'));
});
