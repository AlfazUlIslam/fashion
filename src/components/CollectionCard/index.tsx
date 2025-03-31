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
            <div className="collection__card-img-container">
                <img src={image} alt={altText} />
            </div>
            <button className="collection__card-btn">
                {content}
            </button>
        </div>
    )
}
export default CollectionCard