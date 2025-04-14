import React from "react";
import { Container, Column } from "../../containers";
import { Heading, Description, SectionBtn } from "../../components";
import { bestFashionImage } from "../../assets";
import "./style.css";

const BestFashion: React.FC = () => {
  return (
    <section className="best-fashion" id="best-fashion">
        <Container classes="best-fashion__container">
            {/* Column one */}
            <Column classes="best-fashion__column-one">
                <img 
                    className="best-fashion__img" 
                    src={bestFashionImage} 
                    alt="Best Fashion Image" 
                />
            </Column>
            {/* Column two */}
            <Column classes="best-fashion__column-two">
                <Heading 
                    classes="best-fashion__heading"
                    content="Best Fashion Since 2010"
                />
                <Description 
                    classes="best-fashion__description"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra."
                />
                <div className="best-fashion__btn-container">
                    <SectionBtn content="SEE MORE" />
                </div>
            </Column>
        </Container>
    </section>
  )
}
export default BestFashion