// // src/Pages/Dashboard.jsx

import { useLoaderData, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/Card"; // Ensure path is correct for Card component

const Dashboard = () => {
  const data = useLoaderData(); 
  const { category } = useParams(); 
  const [filteredItems, setFilteredItems] = useState(data); 

  useEffect(() => {
    if (category === "All Products") {
      setFilteredItems(data);
    } else if (category) {
      const filteredByCategory = data.filter((item) => item.category === category);
      setFilteredItems(filteredByCategory);
    } else {
      setFilteredItems(data);
    }
  }, [category, data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredItems.length > 0 ? (
        filteredItems.map((coffee) => <Card key={coffee.id} coffee={coffee} />) // Passing as 'coffee'
      ) : (
        <p className="col-span-3 text-center">No items found for this category.</p>
      )}
    </div>
  );
};

export default Dashboard;
