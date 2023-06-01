import Nav from "./Nav"

const Header = () => {
    return(
        <div className="header">
            <img src={require("../assets/logo.png")} alt="Logo"/>
            <Nav/>
        </div>
    )
}

export default Header