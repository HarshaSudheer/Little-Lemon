import FooterList from "./FooterList";

const Footer = () => {
    const data = [
        {
            id: 1,
            name: "Doormat navigation",
            list: ["Home", "About", "Menu", "Reservations", "Order online", "Login"]
        },
        {
            id: 2,
            name: "Contact",
            list: ["Address", "Phone number", "Email"]
        },
        {
            id: 3,
            name: "Social media links",
            list: ["Instagram", "Twitter", "Whatsapp"]
        }
    ]
    return(
        <footer className="footer">
            <img src={require("../assets/chefs.png")} alt="Chefs"/>
            {data.map((item) => {
                return(
                    <FooterList key={item.id} name={item.name} list={item.list}/>
                )
            })}
        </footer>
    );
}

export default Footer