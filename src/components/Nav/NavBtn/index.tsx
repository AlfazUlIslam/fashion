import React from "react";
import "./style.css"

interface Props {
    content: string
}

const NavBtn: React.FC<Props> = (props) => {
    const { content } = props
        
    return (
        <button className="nav__btn">
            {content}
        </button>
    )
}
export default NavBtn