import React from "react"
import Layout from "../components/Layout/layout"
import CoffeeCard from "../components/Coffees/Coffee/CoffeeCard"

const CoffeeTypes = (props) => {
  const allCoffeeTypes = props.pageContext.allCoffeeTypes;
  const style = {textAlign: `center`}
  return (
    <Layout>
      {allCoffeeTypes.map(coffeetype => {
        return (
          <div key={coffeetype.id} style={style}>
            <h2>{coffeetype.coffeeType}</h2>
            <img src={coffeetype.coffeeTypeImg.fluid.src}></img><br />
            {coffeetype.coffeeTypeOfferings.map(coffee=>{
              return (
                <CoffeeCard id={coffee.id} coffeeType = {coffeetype.slug} coffee={coffee}></CoffeeCard>
              )
            })}
          </div>
        )
      })}
    </Layout>
  )
}

export default CoffeeTypes
