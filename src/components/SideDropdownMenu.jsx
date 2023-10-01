/* eslint-disable react/prop-types */
import  { useState } from 'react';
import RenderSubCategory from './renderSubCategory';

const SideDropdownMenu = ({categories}) => {
    console.log(categories);
    // const [expandedCategories, setExpandedCategories] = useState([]);
    const [openCategory,setOpenCategory] = useState(null);


  const toggleCategory = (categoryId) => {
    if(openCategory === categoryId){
    // if (expandedCategories.includes(categoryId)) {
    //   setExpandedCategories(expandedCategories.filter((id) => id !== categoryId));
    // } else {
    //   setExpandedCategories([...expandedCategories, categoryId]);
    // }
    setOpenCategory(null);
  }else {
    setOpenCategory(categoryId)
  }
}

  const renderCategory = (category) => {
    // const isExpanded = expandedCategories.includes(category.id);
    const isExpanded = openCategory === category.id;
    console.log(isExpanded);
    // console.log(category);

    return (
      <div key={category.id}>
        {/* cart design */}
        <div
          className={`category-header cursor-pointer ${isExpanded ? 'active' : ''} flex items-center border-b-2 border-yellow-500 my-1`}
          
        onClick={() => toggleCategory(category.id)}
        >
       <div className="w-10 mx-3">
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
              <li onClick={()=>console.log(subcategory.name)} key={subcategory.id} className="ml-10 border-l-2 border-yellow-300 pl-3">
                {subcategory.name}
                {
                    subcategory.childes.map((subCate)=><RenderSubCategory key={subCate.id} subCate={subCate}/>)
                }
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
};


export default SideDropdownMenu;