import React from "react";
import "./style.css";

interface Props {
    content: string,
    href: string
}

const Link: React.FC<Props> = (props) => {
    const { content, href } = props;
        
    return (
        <a 
            className="footer__link"
            href={href}
        >
            {content}
        </a>
    )
}
export default Link