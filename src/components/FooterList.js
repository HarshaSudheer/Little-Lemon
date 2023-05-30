

const FooterList = (props) => {
    return(
        <ul>
            {props.list.map((item) => {
                return(
                    <li><a href="#link">{item}</a></li>
                )
            })}
        </ul>
    )
}

export default FooterList