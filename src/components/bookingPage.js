import React from "react";
import BookingForm from "./bookingForm";
import { useState} from "react";




const BookingPage = (props) => {

    <h1>Book a Table</h1>

    return(

       
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    )
}

export default BookingPage;