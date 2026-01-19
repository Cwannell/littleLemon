import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the welcome message', () => {
  render(<App/>);
  //Use screen.getByText to find an element with the text "Welcome" (case-insensitive)
  expect(screen.getByText(/little lemon/i)).toBeInTheDocument();
});

