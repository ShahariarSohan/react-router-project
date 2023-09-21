import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Meal = ({ meal }) => {
  const { idMeal, strMeal, strMealThumb } = meal;
  return (
    <div className="p-5 shadow-xl rounded-lg space-y-3 text-center ">
      <img className="mx-auto w-56 h-56 rounded-full" src={strMealThumb}></img>
      <h1 className="font-bold">{strMeal}</h1>
      <Link to={`/meals/${idMeal}`}>
        <button className="text-white font-bold bg-red-600 hover:bg-red-800 px-5 py-2 rounded-md">
          Details
        </button>
      </Link>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default Meal;
