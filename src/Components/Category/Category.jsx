import PropTypes from "prop-types";
const Category = ({ category }) => {
  const { strCategoryThumb, strCategory } = category;
  console.log(category);
  return (
    <div className="p-5 shadow-xl rounded-lg space-y-2">
      <img className="mx-auto" src={strCategoryThumb}></img>
      <h1 className="text-xl font-bold text-center">{strCategory}</h1>
    </div>
  );
};
Category.propTypes = {
  category: PropTypes.object.isRequired,
};
export default Category;
