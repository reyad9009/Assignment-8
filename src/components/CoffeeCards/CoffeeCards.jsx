import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Gadget from '../Gadget/Gadget';
import GadgetCategory from '../GadgetCategory/GadgetCategory';

const CoffeeCards = () => {
    const data = useLoaderData();
    const {category} = useParams();
    const [coffees, setCoffees] = useState([]);
    useEffect(()=>{
        if(category){
            const filteredByCategory = [...data].filter(
                coffee => coffee.category === category
            )
            setCoffees(filteredByCategory)
        }
        else{
            setCoffees(data);
        }
    },[category, data])
    
   console.log(data);
    return (
        <div>
            <h1>CoffeeCards {category}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    coffees.map(coffee=>(<Gadget key={coffee.product_id} gadget={coffee}></Gadget>))
                }
            </div>
        </div>
    );
};

export default CoffeeCards;