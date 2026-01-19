import React from "react";
import { useState } from "react";

const BookingForm = (props) => {

    const[occasion, setOccasion] = useState("");
    const[times, setTimes] = useState("");
    const[date,SetDate] = useState("");
    const[guests, setGuests] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    const handleChange = (e) => {
        SetDate(e);
        props.dispatch(e);
    }

    return(
        <header>
            <section>
                <h1 className="reservation-title">Book a Table</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset className="ReservationForm">
                        <div>
                            <label for="date">Date</label>
                            <input id="date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                        </div>
                        <div>
                            <label for="time">Time</label>
                            <select id="time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                            <option value="">Select a Time</option>
                            {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                            </select>
                        </div>
                        <div>
                            <label for="guests">Guests</label>
                            <input id="guests" min="1" value={guests} onChange={(e) =>{setGuests(e.target.value)}}  type={"number"} max={10} placeholder={0} required></input>
                        </div>
                        <div>
                            <label for="occasion">Occasion</label>
                            <select id="occasion" value={occasion} onChange={(e) => {setOccasion(e.target.value)}} required>
                            <option >Select an Option</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Graduation</option>
                            <option>Work Event</option>
                            </select>
                        </div>
                        <div className="reserveBtn">
                            <button id='btn1' aria-label="onClick" type="submit" target={"confirm Booking"}>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;