import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation and components', () => {
  render(<App />);
  const consultationButton = screen.getByText(/get free consultation/i);
  expect(consultationButton).toBeInTheDocument();
});

test('renders FAQ component', () => {
  render(<App />);
  const faqQuestion = screen.getByText(/what is webflow/i);
  expect(faqQuestion).toBeInTheDocument();
});

test('renders footer', () => {
  render(<App />);
  const footerText = screen.getByText(/our technologies/i);
  expect(footerText).toBeInTheDocument();
});
