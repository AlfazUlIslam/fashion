import React from "react"
import "./style.css"

interface Props {
    href: string
    content: string
}

const NavLink: React.FC<Props> = (props) => {
    const { href, content } = props
        
    return (
        <a 
            className="nav__link"
            href={href}
        >
            {content}
        </a>
    )
}
export default NavLink