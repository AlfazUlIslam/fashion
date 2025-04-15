import React from "react";
import "./style.css";

interface Props {
    image: string,
    altText: string,
    title: string,
    regularPrice: number,
    discountedPrice: number
}

const Card: React.FC<Props> = (props) => {
    const { image, altText, title, regularPrice, discountedPrice } = props;

    return (
        <div className="best-seller__card">
            <div className="best-seller__card-img-container">
                <img src={image} alt={altText} />
            </div>
            <div className="best-seller__card-body">
                <div className="best-seller__card-rating">
                    <div className="best-seller__card-star"></div>
                    <div className="best-seller__card-star"></div>
                    <div className="best-seller__card-star"></div>
                    <div className="best-seller__card-star"></div>
                    <div className="best-seller__card-star"></div>
                </div>
                <h4 className="best-seller__card-title">
                    {title}
                </h4>
                <div className="best-seller__card-prices">
                    <span className="best-seller__card-price-regular">
                        ${regularPrice}
                    </span>
                    <span className="best-seller__card-price-discounted">
                        ${discountedPrice}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Card