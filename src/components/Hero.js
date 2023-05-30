

const Hero = () => {
    return(
        <>
            <section>
                <h1>Little Lemon</h1>
                <h4>Chicago</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button>Reserve a table</button>
                <img src={require("../assets/hero.png")} alt="Food"/>
            </section>
        </>
    )
}

export default Hero