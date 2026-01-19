import {render, screen, fireEvent} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import BookingForm from './components/bookingForm';

test('renders bookingForm component', () => {
    render(
       <Routes>
            <Route path='./bookingForm' element={<BookingForm />}/>
       </Routes> 
    );
    const h1Element = screen.getByText(Submit);
    expect(h1Element).toBeInDocument();
});

