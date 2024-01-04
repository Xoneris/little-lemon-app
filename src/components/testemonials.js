function Testemonials () {

    const testemonials = [
        {
            "headline": "Awesome!",
            "text": "Review Text lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, lacus vitae blandit iaculis, turpis ante mollis leo, dapibus rutrum risus justo sed velit.",
            "author": "John Doe"
        },
        {
            "headline": "So delicious!",
            "text": "Another cool Review lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, lacus vitae blandit iaculis, turpis ante mollis leo, dapibus rutrum risus justo sed velit.",
            "author": "Marry Sue"
        },
        {
            "headline": "Best restaurant in Chichago!",
            "text": "Review Text lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, lacus vitae blandit iaculis, turpis ante mollis leo, dapibus rutrum risus justo sed velit.",
            "author": "Mark Smith"
        },
        {
            "headline": "Their Lemon Cake is from another world!",
            "text": "Another cool Review lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, lacus vitae blandit iaculis, turpis ante mollis leo, dapibus rutrum risus justo sed velit.",
            "author": "Patrick Brown"
        }
    ];

    return (
        <div id="Testemonials">
            <h2>Testemonials</h2>
            <div className="wrapper">
                <section>
                    <h2>{testemonials[0].headline}</h2>
                    <p>"{testemonials[0].text}"</p>
                    <h5>- {testemonials[0].author}</h5>
                </section>
                <section>
                    <h2>{testemonials[1].headline}</h2>
                    <p>"{testemonials[1].text}"</p>
                    <h5>- {testemonials[1].author}</h5>
                </section>
                <section>
                <h2>{testemonials[2].headline}</h2>
                    <p>"{testemonials[2].text}"</p>
                    <h5>- {testemonials[2].author}</h5>
                </section>
                <section>
                <h2>{testemonials[3].headline}</h2>
                    <p>"{testemonials[3].text}"</p>
                    <h5>- {testemonials[3].author}</h5>
                </section>
            </div>
        </div>
    );
}

export default Testemonials;