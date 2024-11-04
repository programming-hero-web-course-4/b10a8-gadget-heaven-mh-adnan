





import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";
// import ItemsCard from "../components/ItemsCard";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      <Banner />
      <Heading 
        title="Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      />

      <div className="flex mt-10">
     
        <div className="w-1/4 text-center mr-9 h-80">
          <Categories categories={categories} />
        </div>
        
        
        <div className="w-4/4">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Home;



