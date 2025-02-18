import React from "react";
import "./style.css"

interface Props {
    classes: String,
    children: React.ReactNode
}

const Column: React.FC<Props> = (props) => {
    const { classes, children } = props
        
    return (
        <div className={`${classes}`}>
            {children}
        </div>
    )
}
export default Column