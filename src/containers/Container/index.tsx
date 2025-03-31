import React from "react"
import "./style.css"

interface Props {
    children: React.ReactNode,
    classes: string
}

const index: React.FC<Props> = (props) => {
    const { children, classes } = props
        
    return (
        <div className={`${classes} container`}>
            {children}
        </div>
    )
}
export default index