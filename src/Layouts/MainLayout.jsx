import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
   return (
     <div>
       <Navbar />
       <div className="min-h-[calc(100vh-300px)] py-12 container mx-auto px-12">
        <Outlet/>
        </div>
       <Footer />
     </div>
   );
};

export default MainLayout;






