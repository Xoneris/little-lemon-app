import { render, screen } from '@testing-library/react';
import App from './App';
import TableBooking from './components/tableBooking';

test('Renders the BookingForm heading', () => {

  const availableTimes = [
        {time: "17:00"},
        {time: "18:00"},
        {time: "19:00"},
        {time: "20:00"},
        {time: "21:00"},
        {time: "22:00"}
  ];

  render(<TableBooking availableTimes={availableTimes}/>);
  const headingElement = screen.getByText("Book a Table at Little Lemon!");
  expect(headingElement).toBeInTheDocument();
})
