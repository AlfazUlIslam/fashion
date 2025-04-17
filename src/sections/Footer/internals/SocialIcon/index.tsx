import React from "react";
import "./style.css";

interface Props {
    image: string,
    altText: string
}

const SocialIcon: React.FC<Props> = (props) => {
    const { image, altText } = props;
        
    return (
        <div className="footer__social-icon-container">
            <img src={image} alt={altText} />
        </div>
    )
}
export default SocialIcon