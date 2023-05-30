

const Special = (props) => {
    return(
        <article>
            <img src={require(`../assets/${props.image_name}.png`)} alt="Food"/>
            <h5>{props.name}</h5>
            <p>{props.description}</p>
            <p>Out for delivery</p>
            <p>{props.price}</p>
        </article>
    )
}

export default Special