

const FooterList = (props) => {
    return(
        <ul>
            <h5>{props.name}</h5>
            {props.list.map((item, index) => {
                return(
                    <li key={index}><a className="footer-link" href="#link">{item}</a></li>
                )
            })}
        </ul>
    )
}

export default FooterList