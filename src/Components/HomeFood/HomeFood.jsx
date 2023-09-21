import PropTypes from "prop-types";
const HomeFood = ({ meal }) => {
  const { strMeal, strMealThumb } = meal;
  console.log(meal);
  return (
    <div className="p-5 shadow-xl rounded-lg space-y-3 text-center ">
      <img className="mx-auto w-56 h-56 rounded-full" src={strMealThumb}></img>
      <h1 className="font-bold">{strMeal}</h1>
    </div>
  );
};

HomeFood.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default HomeFood;
