import React from "react";
import "./style.css"

interface Props {
    content: String
}

const SectionBtn: React.FC<Props> = (props) => {
    const { content } = props

    return (
        <button className="SectionBtn">
            {content}        
        </button>
    )
}
export default SectionBtn