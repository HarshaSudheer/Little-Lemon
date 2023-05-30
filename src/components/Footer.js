import FooterList from "./FooterList";

const Footer = () => {
    const data = [
        {
            id: 1,
            list: ["Home", "About", "Menu", "Reservations", "Order online", "Login"]
        },
        {
            id: 2,
            list: ["Address", "Phone number", "Email"]
        },
        {
            id: 3,
            list: ["Instagram", "Twitter", "Whatsapp"]
        }
    ]
    return(
        <footer>
            <img src={require("../assets/chefs.png")} alt="Chefs"/>
            {data.map((item) => {
                return(
                    <FooterList key={item.id} list={item.list}/>
                )
            })}
        </footer>
    );
}

export default Footer