import React from 'react'
import '../styles/styles.css'
import { useState } from 'react';

function BookingForm (props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
        };

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
        }

    return (
        <form className='booking-form round2' onSubmit={handleSubmit}> 
            <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={(e) => handleChange(e.target.value)} required/>

            <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={time} onChange={(e) => setTime(e.target.value)} required>
                    {props.availableTimes.availableTimes?.map(availableTimes => {
                            return <option key={availableTimes}>{availableTimes}</option>
                        })
                    }
                </select>

            <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required/>

            <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

            <input type="submit" value="Make Your reservation" id='submit-button'/>
        </form>
    );
}
export default BookingForm;
