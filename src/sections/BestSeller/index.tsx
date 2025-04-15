import React from "react";
import { Container, Column } from "../../containers";
import { Heading, Description, SectionBtn } from "../../components";
import Card from "./Card";
import { bestSellerImageOne, bestSellerImageTwo } from "../../assets";
import "./style.css";

const BestSeller: React.FC = () => {
  return (
    <section className="best-seller" id="best-seller">
        <Container classes="best-seller__container">
            {/* Column one */}
            <Column classes="best-seller__column-one">
                <Heading 
                    classes="best-seller__heading" 
                    content="Best Seller Product"    
                />
                <Description 
                    classes="best-seller__description"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."
                />
                <div className="best-seller__btn-container">
                    <SectionBtn content="SEE MORE" />
                </div>
            </Column>
            {/* Column two */}
            <Column classes="best-seller__column-two">
                <Card 
                    image={bestSellerImageOne}
                    altText="Image One"
                    title="Sweater Shirt"
                    regularPrice={45.99}
                    discountedPrice={35.99}
                />
                <Card 
                    image={bestSellerImageTwo}
                    altText="Image Two"
                    title="Pants Fashion"
                    regularPrice={55}
                    discountedPrice={45.99}
                />
            </Column>
        </Container>
    </section>
  )
}
export default BestSeller