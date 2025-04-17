import React from "react";
import "./style.css";

interface Props {
    content: string
}

const Title: React.FC<Props> = (props) => {
    const { content } = props;
        
    return (
        <h4 className="footer__title">
            {content}
        </h4>
    )
}
export default Title