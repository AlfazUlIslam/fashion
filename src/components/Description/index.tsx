import React from "react";
import "./style.css"

interface Props {
    classes: string,
    content: string
}

const Description: React.FC<Props> = (props) => {
    const { classes, content } = props
        
    return (
        <p className={`${classes} description`}>
            {content}
        </p>
    )
}
export default Description