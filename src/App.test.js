import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/bookingForm';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './components/Header';

// test('renders the bookingForm heading', () => { 
//   render(<browserRouer><BookingForm /></browserRouer>);
//   const headingElement = screen.getByText("Book a Table");
// const button = screen.getByTestId('renders the h1 heading')
//   fireEvent.click(button);
//   expect(headingElement).toBeInTheDocument();
// })

test('Initialize/Update Times', () =>{
  render(<BrowserRouter><App/></BrowserRouter>);
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);
})





// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   const button = screen.
//   fireEvent.(button)
//   expect(linkElement).toBeInTheDocument();

// });