function Footer (){
    return (
        <footer>
            <div className="wrapper">
                <section>
                    <img src="./assets/restauranfood.jpg" alt="Footer Image" />
                </section>
                <section>
                    <h2>Doormat Navigation</h2>
                    <hr/>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </section>
                <section>
                    <h2>Contact</h2>
                    <hr/>
                    Adress
                    <br/>Phone
                    <br/>Email
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
            <p>Copyright Little Lemon Restaurant. 2023 All rights reserved.</p>
        </footer>
    );
}

export default Footer