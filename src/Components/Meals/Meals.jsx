import { useLoaderData, Link } from "react-router-dom";
import Meal from "../Meal/Meal";
const Meals = () => {
  const { meals } = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 container mx-auto my-10">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="text-white font-bold bg-red-600 hover:bg-red-800 px-5 py-2 rounded-md">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Meals;
