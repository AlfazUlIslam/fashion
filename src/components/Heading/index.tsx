import React from "react"
import "./style.css"

interface Props {
    classes: string,
    content: string
}

const Heading: React.FC<Props> = (props) => {
    const { classes, content } = props

    return (
        <h2 className={`${classes} heading`}>
            {content}
        </h2>
    )
}
export default Heading