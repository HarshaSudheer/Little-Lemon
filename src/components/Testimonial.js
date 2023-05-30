

const Testimonial = (props) => {
    return(
        <article>
            <h5>Rating</h5>
            <img src={require(`../assets/${props.image_name}.png`)} alt="Testimonial"/>
            <p>{props.name}</p>
        </article>
    )
}

export default Testimonial