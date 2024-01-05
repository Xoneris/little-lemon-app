import { Link } from "react-router-dom";

function Footer (){
    return (
        <footer>
            <div className="wrapper">
                <section>
                    <div className="center-image">
                        <img src="./assets/restauranfood.jpg" alt="Footer Image" />
                    </div>
                </section>
                <section>
                    <h2>Doormat Navigation</h2>
                    <hr/>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>About</li>
                        <li>Menu</li>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </section>
                <section>
                    <h2>Contact</h2>
                    <hr/>
                    <p>Little Lemon Restaurant</p>
                    <p>SomeCoolStreet 42</p>
                    <p>770 Chichago</p>
                    <p>+1 (312) 509-6995.</p>
                    <p>hello@littlelemon.com</p>
                </section>
                <section>
                    <h2>Social Media Links</h2>
                    <hr/>
                    <ul>
                        <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
                        <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
                        <li><a href="https://www.tiktok.com" target="_blank">TikTok</a> </li>
                        <li><a href="https://www.youtube.com" target="_blank">YouTube</a> </li>
                    </ul>
                </section>
            </div>
            <p className="copyright">Copyright Little Lemon Restaurant. 2023 All rights reserved.</p>
        </footer>
    );
}

export default Footer