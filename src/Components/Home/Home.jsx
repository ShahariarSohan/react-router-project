import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";

const Home = () => {
  const { categories } = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 container mx-auto my-10">
        {categories.map((category) => (
          <Category key={category.idCategory} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Home;
