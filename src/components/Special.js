

const Special = (props) => {
    return(
        <article className="special-container">
            <img src={require(`../assets/${props.image_name}.png`)} alt="Food"/>
            <h5>{props.name}</h5>
            <p>{props.price}</p>
            <p className="para">{props.description}</p>
            <p className="description" style={{color: "black"}}>Order for delivery</p>
        </article>
    )
}

export default Special