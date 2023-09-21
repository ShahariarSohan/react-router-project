import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const Category = ({ category }) => {
  const { strCategory, strCategoryThumb } = category;
  return (
    <div className="p-5 shadow-xl rounded-lg space-y-3 text-center ">
      <img className="mx-auto" src={strCategoryThumb}></img>
      <h1 className="font-bold">{strCategory}</h1>
      <div>
        <NavLink to={`/foods/${strCategory}`}>
          <button className="text-white font-bold bg-red-600 hover:bg-red-800 px-5 py-2 rounded-md">
            Items
          </button>
        </NavLink>
      </div>
    </div>
  );
};
Category.propTypes = {
  category: PropTypes.object.isRequired,
};
export default Category;
