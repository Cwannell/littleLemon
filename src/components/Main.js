import React, {  useReducer, useEffect, useState } from "react";
import { Navigate, useNavigate, Route, Routes } from "react-router-dom";
import BookingPage from "./bookingPage";
import BookingComplete from "./bookingComplete";
import Header from "./Header";



const Main = () => {


    const [availableTimes, setAvailableTimes] = useState(["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"])

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return(s=s * a % m ) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i<=23; i++) {
            if(random()< 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    }

    const submitAPI = function(formData) {
        return true;
    };

     function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))}
    }

    const initialiseTimes = {availableTimes: fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialiseTimes);


    
    const navigate = useNavigate();

    function submitForm(formData) {
    if (submitAPI(formData)) {
        navigate("/Complete")
    } 
}

    

    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/bookingPage" element={<BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
                <Route path="/complete" element={<BookingComplete />} />
            </Routes>
        </main>
    )

}


export default Main;