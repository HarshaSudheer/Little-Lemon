

const FooterList = (props) => {
    return(
        <ul>
            <h5>{props.name}</h5>
            {props.list.map((item) => {
                return(
                    <li><a className="footer-link" href="#link">{item}</a></li>
                )
            })}
        </ul>
    )
}

export default FooterList