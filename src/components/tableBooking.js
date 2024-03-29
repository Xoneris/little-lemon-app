import { useState } from "react";

const availableOccasions = [
    "No Occasion",
    "Birthday",
    "Anniversary"
];

function TableBooking (props) {

    /* Setting a bunch of State */
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("No Occasion");
    const [errorMessage, setErrorMessage] = useState("");

    /* Getting today's date in a variable called formattedToday in a yyyy-mm-dd format.
    It's used in the input type date so that you can only select dates from today onwards */
    const currentDate = new Date();
    const yyyy = currentDate.getFullYear();
    let mm = currentDate.getMonth() + 1;
    let dd = currentDate.getDate();
    if (mm < 10) {
        mm = "0"+mm;
    }
    if (dd < 10) {
        dd = "0"+dd;
    }
    const formattedToday = yyyy +"-"+ mm +"-"+ dd;
    
    /* Resetting the Form */
    const clearForm = () => {
        setDate("");
        setTime("17:00");
        setGuests("");
        setOccasion("No Occasion");
    }

    /* */
    const handleSubmit = (e) => { 
        e.preventDefault();

        /* If any of the input's is empty an Error will display, otherwise the form will be submitted */
        if (date !== "" && time !== "" && guests !== "" && occasion !== ""){

            props.setAvailableTimes(props.availableTimes.filter(
                (availableTime) => availableTime.time !== time
            ));
            clearForm();
            setErrorMessage(<p className="successMessage">Your reservation has been sent!</p>);
        }
        else {
            setErrorMessage(<p className="errorMessage">Please fill in all the fields!</p>);
        }
      }; 

    return (
       <div id="bookingForm">
            <div className="wrapper">
                <h2>Book a Table at Little Lemon!</h2>
                <hr/>
                <p>Currently available times:</p>
                <ul>
                    {props.availableTimes?.map((times) => {
                        return(<li>{times.time}</li>)
                    })}
                </ul>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <label for="res-date">Choose date</label>
                    <input type="date" id="res-date" min={formattedToday}
                        value={date}
                        onChange={(e) => { 
                            setDate(e.target.value); 
                            }} />
                    <hr/>
                    <label for="res-time">Choose time</label>
                    <select id="res-time" 
                        value={time}
                        onChange={e => setTime(e.target.value)}>

                       {props.availableTimes.map((times) => {
                            return(<option value={times.time}>{times.time}</option>)
                        })}
                        
                    </select>
                    <hr/>
                    <label for="guests">Number of guests</label>
                    <input type="number" placeholder="1-10" min="1" max="10" id="guests"
                        value={guests}
                        onChange={(e) => {
                            setGuests(e.target.value);
                        }} />
                    <hr/>
                    <label for="occasion">Occasion</label>
                    <select id="occasion"
                        value={occasion}
                        onChange={e => setOccasion(e.target.value)}>
                        
                        {availableOccasions.map((item) => (
                            <option value={item}>{item}</option>
                        ))}
                    </select>
                    <hr/>
                    <p>{errorMessage}</p>
                    <button type="submit">Make Your reservation</button>
                </form>
            </div>
        </div>
    );
}

export default TableBooking;