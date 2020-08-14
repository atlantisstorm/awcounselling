import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders banner link', () => {
  const { getAllByText } = render(<App />);
  const linkElements = getAllByText(/Aine Wilson Counselling/i);
  expect(linkElements[0]).toBeInTheDocument();
});
