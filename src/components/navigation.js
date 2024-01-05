import { Link } from "react-router-dom";
import { useState } from "react";



function Navigation (){

    const [mobileNavBar, setMobileBar] = useState(false);

    return (
        <nav>
            <div id={mobileNavBar === true ? "desktop-view-active" : "desktop-view-inactive"} >
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li>About</li>
                    <li>Menu</li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li>Order</li>
                    <li>Login</li>
                    <li>{mobileNavBar == false ? "False" : "True"}</li>
                </ul>  
            </div>
            <div id="mobile-view">
                <i onClick={() => {setMobileBar(!mobileNavBar)}}>
                    <img src="./assets/icon_hamburger_menu.svg" />
                </i>
            </div>  
        </nav>
    );
}

export default Navigation
