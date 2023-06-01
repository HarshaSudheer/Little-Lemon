import Testimonial from "./Testimonial"

const Testimonials = () => {
    const data = [
        {
            id: 1,
            image_name: "testimonial1",
            name: "Name"
        },
        {
            id: 2,
            image_name: "testimonial2",
            name: "Name"
        },
        {
            id: 3,
            image_name: "testimonial3",
            name: "Name"
        }
    ]
    return(
        <article className="testimonials-container">
            <h2>Testimonials</h2>
            {data.map((item) => {
                return(
                    <Testimonial key={item.id} image_name={item.image_name} name={item.name}/>
                )
            })}
        </article>
    )
}

export default Testimonials