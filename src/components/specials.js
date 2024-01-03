function Specials () {

    return (
        <div id="specials">
            <div class="specials-title">
                <div><h2>Specials</h2></div>
                <div><button>Order Online</button></div>
            </div>
            <div className="wrapper">
                <section className="specials-card">
                    <img src="assets/greek salad.jpg" alt="Greek Salad" />
                    <h2>Greek Salad</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, lacus vitae blandit iaculis, turpis ante mollis leo, dapibus rutrum risus justo sed velit.</p>
                    <a href="">Order a delivery</a>
                </section>
                <section className="specials-card">
                    <img src="assets/bruchetta.svg" alt="Bruchetta" />
                    <h2>Bruchetta</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, lacus vitae blandit iaculis, turpis ante mollis leo, dapibus rutrum risus justo sed velit.</p>
                    <a href="">Order a delivery</a>
                </section>
                <section className="specials-card">
                    <img src="assets/lemon dessert.jpg" alt="Lemon Dessert" />
                    <h2>Lemon Desert</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, lacus vitae blandit iaculis, turpis ante mollis leo, dapibus rutrum risus justo sed velit.</p>
                    <a href="">Order a delivery</a>
                </section>
            </div>
        </div>
    );
}

export default Specials;