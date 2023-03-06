import { render, screen } from '@testing-library/react';
import Career from '../Career';

test('renders learn react link', () => {
  render(<Career />);
  const linkElement = screen.getByText(/Career/i);
  expect(linkElement).toBeInTheDocument();
});
