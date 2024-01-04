function Specials () {

    const specials = [
        {
            "name": "Greek Salad",
            "price": "$13.99",
            "pic": "assets/greek salad.jpg",
            "description": "Greek Salad lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, lacus vitae blandit iaculis, turpis ante mollis leo, dapibus rutrum risus justo sed velit."
        },
        {
            "name": "Bruchetta",
            "price": "$13.99",
            "pic": "assets/bruchetta.svg",
            "description": "Bruchetta lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, lacus vitae blandit iaculis, turpis ante mollis leo, dapibus rutrum risus justo sed velit."
        },
        {
            "name": "Lemon Desert",
            "price": "$13.99",
            "pic": "assets/lemon dessert.jpg",
            "description": "Lemon Desert lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, lacus vitae blandit iaculis, turpis ante mollis leo, dapibus rutrum risus justo sed velit."
        }
    ];

    return (
        <div id="specials">
            <div class="specials-title">
                <div><h2>Specials</h2></div>
                <div><button>Order Online</button></div>
            </div>
            <div className="wrapper">
                <section className="specials-card">
                    <img src={specials[0].pic} alt={specials[0].name} />
                    <h2>{specials[0].name}</h2>
                    <p>{specials[0].description}</p>
                    <a href="">Order a delivery</a>
                </section>
                <section className="specials-card">
                <img src={specials[1].pic} alt={specials[1].name} />
                    <h2>{specials[1].name}</h2>
                    <p>{specials[1].description}</p>
                    <a href="">Order a delivery</a>
                </section>
                <section className="specials-card">
                <img src={specials[2].pic} alt={specials[2].name} />
                    <h2>{specials[2].name}</h2>
                    <p>{specials[2].description}</p>
                    <a href="">Order a delivery</a>
                </section>
            </div>
        </div>
    );
}

export default Specials;