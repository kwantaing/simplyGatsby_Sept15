import React from "react"

const CoffeeDetail = props => {
  const coffee = props.coffee;
  const style = { textAlign: `center` }
  return (
    <div style={style}>
      <h3>{coffee.coffeeName}</h3>
      <img src={coffee.coffeeImage.fluid.src} alt=""></img>
      <p>Type of Coffee: {coffee.coffeeType.coffeeType}</p>
      <p>{coffee.coffeeDescription}</p>
      <p>Rating: {coffee.coffeeRating}</p>
    </div>
  )
}

export default CoffeeDetail
