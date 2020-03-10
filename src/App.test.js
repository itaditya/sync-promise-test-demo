import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { SynchronousPromise } from 'synchronous-promise';

import App from './App';

global.Promise = SynchronousPromise;

afterEach(cleanup);

it('should load username', () => {
  const { getByRole } = render(<App />);
  const btnNode = getByRole('button');
  expect(getByRole('heading')).toHaveTextContent('anonymous');
  fireEvent.click(btnNode);
  expect(getByRole('heading')).toHaveTextContent('aditya');
});
