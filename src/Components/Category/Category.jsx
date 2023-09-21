const Category = ({ category }) => {
  const { idCategory, strCategoryThumb, strCategory, strCategoryDescription } =
    category;
  console.log(category);
  return (
    <div className="p-5 shadow-xl rounded-lg space-y-2">
      <img className="mx-auto" src={strCategoryThumb}></img>
      <h1 className="text-xl font-bold text-center">{strCategory}</h1>
    </div>
  );
};

export default Category;
