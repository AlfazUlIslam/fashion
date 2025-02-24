import React from "react";
import "./style.css"

interface Props {
    image: string,
    altText: string,
    content: string
}

const CollectionCard: React.FC<Props> = (props) => {
    const { image, altText, content } = props
        
    return (
        <div className="collection__card">
            <img src={image} alt={altText} />
            <button className="collection__card-btn" style={{background:"#700"}}>
                {content}
            </button>
        </div>
    )
}
export default CollectionCard