

const Testimonial = (props) => {
    return(
        <article className="testimonial-container">
            <h5>Rating</h5>
            <img src={require(`../assets/${props.image_name}.png`)} alt="Testimonial"/>
            <p className="para">{props.name}</p>
        </article>
    )
}

export default Testimonial