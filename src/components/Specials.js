import Special from "./Special"

const Specials = () => {
    const data = [
        {
            id: 1,
            image_name: "greek-salad",
            name: "Greek Salad",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            price: "$12.98"
        },
        {
            id: 2,
            image_name: "bruchetta",
            name: "Bruchetta",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            price: "$6.98"
        },
        {
            id: 3,
            image_name: "lemon-dessert",
            name: "Lemon Dessert",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            price: "$10.99"
        }
    ]
    return(
        <article>
            <h2>Specials</h2>
            {
                data.map((item) => {
                    return(
                        <Special key={item.id} image_name={item.image_name} name={item.name} description={item.description} price={item.price}/>
                    )
                })
            }
        </article>
    )
}

export default Specials