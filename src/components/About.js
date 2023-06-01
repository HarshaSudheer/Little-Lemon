

const About = () => {
    return (
        <section className="about-container">
            <div>
                <h1 style={{ color: "#FDDABB" }}>Little Lemon</h1>
                <h4 style={{ color: "#FDDABB" }}>Chicago</h4>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="about-image">
                <img id="about-image-one" src={require("../assets/restaurant.png")} alt="Restaurant" />
                <img id="about-image-two" src={require("../assets/food.png")} alt="Food" />
            </div>
        </section>
    )
}

export default About