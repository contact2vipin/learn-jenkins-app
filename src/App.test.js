import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Say Hello to VIPIN KUMAR link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Say Hello to VIPIN KUMAR/i);
  expect(linkElement).toBeInTheDocument();
});
