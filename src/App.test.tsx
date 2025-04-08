import { render, screen } from '@testing-library/react';
import App from '@src/App';

test('renders Button component with the correct label', () => {
  render(<App/> );
  const element = screen.getByText(/Sample App/i);
  expect(element).toBeInTheDocument();
});
