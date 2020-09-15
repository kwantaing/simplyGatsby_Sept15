import React from 'react';
import Layout from "../components/Layout/layout";
import CoffeeCard from '../components/Coffees/Coffee/CoffeeCard';

const AllCoffeePage = (props) => {
    const allCoffees = props.pageContext.allCoffees;
    return(
        <Layout>
            {allCoffees.map(coffee => {
                return (
                    <CoffeeCard coffee={coffee}></CoffeeCard>
                )
            })}
        </Layout>
    )
}

export default AllCoffeePage;