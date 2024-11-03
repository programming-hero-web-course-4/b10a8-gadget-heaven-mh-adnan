
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const ItemsCard = () => {
    const data = useLoaderData(); 
    const { category } = useParams();
    const [filteredCoffee, setFilteredCoffee] = useState([]);

    useEffect(() => {
      if(category)
      {
        const filteredByCategory = data.filter(item => item.category === category);
        setFilteredCoffee(filteredByCategory);
      }
      else{
        setFilteredCoffee(data)
      }
    }, [category, data]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                filteredCoffee.length > 0 ? (
                    filteredCoffee.map(coffee => (
                        <Card key={coffee.id} coffee={coffee} />
                    ))
                ) : (
                    <p className="col-span-3 text-center">No items found for this category.</p>
                )
            }
        </div>
    );
};

export default ItemsCard;