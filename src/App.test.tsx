import { render, screen } from '@testing-library/react';
import App from '@src/App';

test('renders Button component with the correct label', () => {
  render(<App />);
  const element = screen.getByText(/Home/i);
  expect(element).toBeInTheDocument();
});
