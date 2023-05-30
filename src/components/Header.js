import Nav from "./Nav"

const Header = () => {
    return(
        <>
            <img src={require("../assets/logo.png")} alt="Logo"/>
            <Nav/>
        </>
    )
}

export default Header