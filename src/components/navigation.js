import { Link } from "react-router-dom";

function Navigation (){
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link> </li>
                
                <li>About</li>
                <li>Menu</li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li>Order</li>
                <li>Login</li>
                <li><img src="./assets/icon_hamburger_menu.svg" /></li>
            </ul>    
        </nav>
        
    );
}

export default Navigation
