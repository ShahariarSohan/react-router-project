import { useLoaderData, useNavigate } from "react-router-dom";

const FoodDetails = () => {
  const details = useLoaderData();
  const navigate = useNavigate();
  const handleReturnButton = () => {
    navigate(-1);
  };
  const {
    strMealThumb,
    strTags,
    strArea,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
  } = details.meals[0];
  return (
    <div className="p-5 shadow-xl rounded-lg space-y-3 text-center bg-blue-400 container mx-auto my-10">
      <img className="mx-auto w-[600px] h-96" src={strMealThumb}></img>
      <h1 className="text-2xl font-bold">{strTags}</h1>
      <h1 className="text-xl font-bold">{strArea}</h1>
      <p className="font-semibold">
        <span className="text-xl ">Ingredients:</span>
        {strIngredient1}, {strIngredient2}, {strIngredient3},{strIngredient4},
        {strIngredient5}, {strIngredient6} ,{strIngredient7}, {strIngredient8},
        {strIngredient9},{strIngredient10}
      </p>
      <button
        onClick={handleReturnButton}
        className="text-white font-bold bg-red-600 hover:bg-red-800 px-5 py-2 rounded-md"
      >
        Return
      </button>
    </div>
  );
};

export default FoodDetails;
<h1></h1>;
