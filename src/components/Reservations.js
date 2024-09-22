import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { useReducer } from "react";
import ConfirmedBooking from './ConfirmedBooking'
import { Route, Routes } from "react-router-dom";

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

export const submitAPI = function(formData) {
    return true;
};

function Reservations ({ closeReservation })  {
    
    const initializeTimes = {availableTimes:  fetchAPI(new Date())}
    const [times, dispatch] = useReducer(updateTimes, initializeTimes);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))}
    }

    const navigate = useNavigate();
    function submitForm (formData) {
        if (submitAPI(formData)) {
            navigate('./ConfirmedBooking');
        }
    }
    return (
        <>
        <div className="modalBack">
            <div className="modalContainer">
                <div className="modal">
                    <div className="modal-title flex">
                    <h2>Reserve a table</h2>
                    <button onClick={closeReservation}>X</button>

                    </div>
                    <BookingForm availableTimes={times} dispatch={dispatch} submitForm={submitForm} />
                </div>
            </div>
        </div>
        <Routes>
            <Route path="/confirmedbooking" element={<ConfirmedBooking closeModal={closeReservation}/>} />
        </Routes>
        </>
    );
};

export default Reservations;