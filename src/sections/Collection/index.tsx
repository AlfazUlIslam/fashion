import React from "react"
import { Container } from "../../containers"
import { Heading, Description, CollectionCard } from "../../components"
import { newCollectionImageOne, newCollectionImageTwo, newCollectionImageThree } from "../../assets"
import "./style.css"

const Collection: React.FC = () => {
  return (
    <section className="collection"  id="collection">
        <Container classes="collection__container">
            <Heading 
                classes="collection__heading"
                content="New Collection"
            />
            <Description
                classes="collection__description"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <div className="collection__cards">
                <CollectionCard 
                    image={newCollectionImageOne}
                    altText="Sweater"
                    content="Sweater"
                />
                <CollectionCard 
                    image={newCollectionImageTwo}
                    altText="Jeans"
                    content="Jeans"
                />
                <CollectionCard 
                    image={newCollectionImageThree}
                    altText="Baskets"
                    content="Baskets"
                />
            </div>
        </Container>
    </section>
  )
}
export default Collection