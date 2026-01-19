import BookingForm from "./bookingForm";
import React from "react";





const BookingPage = (props) => {

    <h1>Book a Table</h1>

    return(

       
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
        
    )
}

export default BookingPage;