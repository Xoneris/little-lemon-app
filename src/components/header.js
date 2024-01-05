import Navigation from "./navigation";
import { Link } from "react-router-dom";

function Header (){
    return (
        <header>
            <Link to="/" className="logo" ><img src="assets/Logo.svg" alt="Little Lemon Logo" /></Link>
            <Navigation />
        </header>
    );
}

export default Header