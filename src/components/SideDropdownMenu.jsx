/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
// import RenderSubCategory from "./renderSubCategory";

const SideDropdownMenu = ({ categories }) => {
  console.log(categories);
  const getDiv = useRef();

  const handleClick = () => {
    // Change the background color of the div
    console.log(getDiv.current);
  };
  // console.log(getDiv.current.style.backgroundColor = 'yellow');
  // const [expandedCategories, setExpandedCategories] = useState([]);
  const [openCategories, setOpenCategories] = useState([]);
  // const [openCategory, setOpenCategory] = useState(null);
 

  const toggleCategory = (categoryId) => {
    
    if (openCategories.includes(categoryId)) {
      setOpenCategories(openCategories.filter((id) => id !== categoryId));
    } else {
      setOpenCategories([...openCategories, categoryId]);
    }
  };
    
  const renderCategory = (category) => {
    const isExpanded = openCategories.includes(category.id);
 
    console.log(isExpanded);
    // console.log(category);
    return (
      <div key={category.id}>
        {/* cart design */}
        <div
          className={`category-header cursor-pointer ${
            isExpanded ? "active" : ""
          } flex items-center border-b-2 border-yellow-500 my-1`}
          onClick={() => toggleCategory(category.id)}
        >
          <div ref={getDiv} onClick={handleClick} className="w-10 mx-3">
            <img
              src={`https://backend.bppshop.com.bd/storage/category/${category.icon}`}
              alt=""
            />
          </div>
          <div className="">{category.name}</div>
        </div>

        {/* dropdown functionality */}
        {isExpanded && category.childes && category.childes.length > 0 && (
          <ul className="subcategory-list">
            {category.childes.map((subcategory) => (
              <li
         key={subcategory.id}
                className="ml-10 border-l-2 border-yellow-300 pl-3"
              >
                {/* {subcategory.name} */}
                {/* {subcategory.childes.map((subCate) =>
                  console.log(subCate)
                )} */}
                {renderCategory(subcategory)}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="side-dropdown-menu">
      {categories.map((category) => renderCategory(category))}
    </div>
  );
  }


export default SideDropdownMenu;
