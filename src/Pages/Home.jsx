import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";
import ItemsCard from "../components/ItemsCard";
import Card from "../components/Card";


const Home = () => {
    const categories = useLoaderData()
    return (
     <div className="">

        <Banner/>   
        <Heading title ={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} subtitle ={`Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!`}/>

       <Categories categories={categories}></Categories>
       <Outlet/>
      

     </div>
      
    );
};

export default Home;











