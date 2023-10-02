/* eslint-disable react/prop-types */


const RenderSubCategory = ({subCate}) => {
    console.log(subCate);
    return (
        <div>
            <p1>{subCate.name}</p1>
        </div>
    );
};

export default RenderSubCategory;