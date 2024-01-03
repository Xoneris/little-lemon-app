import Navigation from "./navigation";

function Header (props){
    return (
        <header>
            <img src="assets/Logo.svg" alt="Little Lemon Logo" />
            <Navigation />
        </header>
    );
}

export default Header