import React from 'react';
import { render, screen } from '@testing-library/react';
import Education from '../Education';

test('renders learn react link', () => {
  render(<Education />);
  const linkElement = screen.getByText(/Education/i);
  expect(linkElement).toBeInTheDocument();
});
