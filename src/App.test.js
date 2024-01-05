import { render, screen } from '@testing-library/react';
import App from './App';
import TableBooking from './components/tableBooking';

test('Renders the BookingForm heading', () => {
  render(<TableBooking />);
  const headingElement = screen.getByText("Book a Table at Little Lemon!");
  expect(headingElement).toBeInTheDocument();
})
