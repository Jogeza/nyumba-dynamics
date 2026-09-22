// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// react-router-dom v7 requires TextEncoder/TextDecoder, which jsdom's test
// environment does not provide globally (they exist in Node's `util` module).
import { TextEncoder, TextDecoder } from 'util';

// GSAP ships ScrollTrigger as ESM. Jest in react-scripts runs CommonJS, so
// mock only the animation boundary; production animation imports stay intact.
jest.mock('gsap', () => ({
  gsap: {
    registerPlugin: () => undefined,
    to: () => ({
      kill: jest.fn(),
      scrollTrigger: { kill: jest.fn() },
    }),
    from: () => ({ kill: jest.fn() }),
    set: jest.fn(),
    killTweensOf: jest.fn(),
    utils: { toArray: (selector) => Array.from(global.document.querySelectorAll(selector)) },
    matchMedia: () => ({ add: (_query, callback) => callback(), revert: jest.fn() }),
    context: (callback) => {
      callback();
      return { revert: jest.fn() };
    },
  },
}));
jest.mock('gsap/ScrollTrigger', () => ({ ScrollTrigger: {
  create: jest.fn(), refresh: jest.fn(), kill: jest.fn(), getAll: () => [],
} }));

Object.defineProperty(window, 'scrollTo', {
  configurable: true,
  value: jest.fn(),
});

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}
