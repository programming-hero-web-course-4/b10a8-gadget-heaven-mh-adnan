/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div
      role="tablist"
      className="tabs tabs-boxed flex flex-col p-4 h-full"
      style={{ width: "200px" }}
    >
      {categories.map((category) => (
        <NavLink
          key={category.id}
          to={`/category/${category.category}`}
          role="tab"
          className={({ isActive }) =>
            `tab tab-vertical ${isActive ? "tab-active" : ""}`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
