import React from "react"
import { Container, Column } from "../../containers"
import { SectionBtn } from "../../components"
import { heroImage } from "../../assets"
import "./style.css"

const Hero: React.FC = () => {
  return (
    <section className="Hero" id="hero">
        <Container classes="HeroContainer">
            <Column classes="HeroColumnOne">
              <h1 className="HeroHeading">
                Find The Best Fashion Style For You
              </h1>
              <p className="HeroDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. 
              </p>
              <SectionBtn content="SHOP NOW" />
            </Column>
            <Column classes="HeroColumnTwo">
              <div className="HeroImage">
                <img src={heroImage} alt="Hero Image" />
              </div>
            </Column>
        </Container>
    </section>
  )
}
export default Hero