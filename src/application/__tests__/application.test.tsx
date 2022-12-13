import { render, screen } from '@testing-library/react';
import { Application } from '@application/application';

test('renders greetings', () => {
  render(<Application />);
  const element = screen.getByText(/salut joujou/i);
  expect(element).toBeInTheDocument();
});
