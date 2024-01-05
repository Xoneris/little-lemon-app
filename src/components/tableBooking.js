import { useState } from "react";

const availableOccasions = [
    "No Occasion",
    "Birthday",
    "Anniversary"
];

function TableBooking (props) {

    const [date, setDate] = useState();
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState();
    const [occasion, setOccasion] = useState("No Occasion");

    const [errorMessage, setErrorMessage] = useState("");

    /*
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
    const formattaedToday = yyyy +"-"+ mm +"-"+ dd;
    */

    const clearForm = () => {
        setDate("");
        setTime("17:00");
        setGuests("");
        setOccasion("No Occasion");
    }

    const handleSubmit = (e) => { 
        e.preventDefault();

        if (date !== "" && time !== "" && guests !== "" && occasion !== ""){
            setErrorMessage("Your reservation has been sent!");
            
            props.setAvailableTimes(props.availableTimes.filter(
                (availableTime) => availableTime.time !== time
            ));

            clearForm();
        }
        else {
            setErrorMessage("Please fill in all the fields!");
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
                    <input type="date" id="res-date" 
                        value={date}
                        onChange={(e) => { 
                            setDate(e.target.value); 
                            }} />
                    <hr/>
                    <label for="res-time">Choose time</label>
                    <select id="res-time" 
                        value={time}
                        onChange={e => setTime(e.target.value)}>

                        {/*initialAvailableTimes.map((item) => (
                            <option value={item}>{item}</option>
                        ))*/}
                       {props.availableTimes.map((times) => {
                            return(<option value={times.time}>{times.time}</option>)
                        })}
                        
                    </select>
                    <hr/>
                    <label for="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests"
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
                        <p>Choosen date: {date}</p>
                        <p>Choosen time: {time}</p>
                        <p>Choosen guests: {guests}</p>
                        <p>Choosen Occasion: {occasion}</p>
                    <hr/>
                    <p>{errorMessage}</p>
                    <button type="submit">Make Your reservation</button>
                </form>
            </div>
        </div>
        
    );
}

export default TableBooking;