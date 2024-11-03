
import {  NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {

    return (
        <div role="tablist" className="tabs tabs-boxed">
            {
                categories.map(category => (
                    <NavLink 
    key={category.id} 
    to={`/category/${category.category}`}  
    role="tab" 
    className={({ isActive }) => `tab ${isActive ? "tab-active" : ""}`}
>
    {category.category}
</NavLink>

                ))
            }
        </div>
    );
};

export default Categories;












// import { Link } from 'react-router-dom';

// const Categories = ({ categories }) => {
//     return (
//         <div role="tablist" className="tabs tabs-boxed">
//             {
//                 categories.map(category => (
//                     <Link 
//                         key={category.id} 
//                         to='/cards' 
//                         role="tab" 
//                         className="tab"
//                     >
//                         {category.name}
//                     </Link>
//                 ))
//             }
//         </div>
//     );
// };

// export default Categories;
