import PropTypes from "prop-types";
const Category = ({ category }) => {
  const { strCategory, strCategoryThumb } = category;
  console.log(category);
  return (
    <div className="p-5 shadow-xl rounded-lg space-y-3 text-center ">
      <img className="mx-auto" src={strCategoryThumb}></img>
      <h1 className="font-bold">{strCategory}</h1>
    </div>
  );
};
Category.propTypes = {
  category: PropTypes.object.isRequired,
};
export default Category;
