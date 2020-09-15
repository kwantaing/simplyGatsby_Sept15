import React from 'react';
import Layout from "../components/Layout/layout";
import CoffeeCard from "../components/Coffees/Coffee/CoffeeCard";

const DetailPage = props => {
    console.log(props.pageContext.coffeeType);
    console.log(props.pageContext.coffee);
    //if category  

    //if coffee 
    return(
        <Layout></Layout>
    )
}

export default DetailPage;