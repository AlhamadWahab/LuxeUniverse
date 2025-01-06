import MensPic from "../assets/img/Images/mens.jpg";
import KidsPic from "../assets/img/Images/Kids.jpg";
import WomensPic from "../assets/img/Images/Womens.jpg";
const categories = [
  {
    title: "Mens",
    imageUrl: MensPic,
  },
  {
    title: "Kids",
    imageUrl: KidsPic,
  },
  {
    title: "Womens",
    imageUrl: WomensPic,
  },
];
const Categories = () => {
  return (
    <>
      <div className=" container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative h-64 hover:scale-105 transform transition-transform duration-300 cursor-pointer"
          >
            <img
              className="rounded-xl shadow-xl w-full h-full object-cover"
              src={category.imageUrl}
              alt="pic"
            />
            <div className="absolute top-20 left-12 text-white">
              <h1 className="text-3xl font-bold">{category.title}</h1>
              <p className="bg-stone-500 bg-opacity-70 px-3 py-1 rounded-2xl">
                View All
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
