import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <ShimmerUi />;

  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    totalRatingsString,
    avgRatingString,
  } = resInfo?.cards?.[0]?.card?.card?.info || {};
  // console.log(resInfo);

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card || {};
  // console.log(restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // return (
  //   <>
  //     <div className="p-1 md:py-10 md:m-auto flex justify-between md:w-8/12 border-b">
  //       <div className="flex items-center">
  //         <img
  //           className="rounded w-28 md:w-52 md:object-cover "
  //           src={IMG_CDN_URL + cloudinaryImageId}
  //           alt={name}
  //         />
  //       </div>

  //       <div className="py-2 pl-1 md:flex md:w-9/12 md:justify-between md:pt-4">
  //         <div>
  //           <p className=" font-semibold text-l leading-5 md:font-bold md:text-2xl">
  //             {name}
  //           </p>
  //           <p className="text-gray-400">{cuisines?.join(", ")}</p>
  //           <p className="text-gray-400">{costForTwoMessage}</p>
  //         </div>

  //         <div className=" flex md:flex-col md:h-20 gap-1 md:border rounded-xl md:px-3 md:items-center md:pt-3">
  //           <div
  //             className={`flex items-center md:gap-2 font-bold text-sm px-1 rounded w-fit
  //       ${
  //         avgRatingString >= 4
  //           ? " bg-slate-200 text-green-600"
  //           : " bg-orange-200 text-red-600"
  //       }`}
  //           >
  //             <FaStar />
  //             <p>{avgRatingString}</p>
  //           </div>
  //           <div>
  //             <p className=" md:pt-1 ">{totalRatingsString}</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="w-11/12 m-auto">
  //       {categories?.map((category) => (
  //         <RestaurantCategory
  //           key={category?.card?.card?.title}
  //           data={category?.card?.card}
  //         />
  //       ))}
  //     </div>
  //   </>
  // );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}{" "}
      </p>
      {/* <h3>{costForTwoMessage}</h3> */}
      {/* <h2>Menu</h2> */}
      {/* Categories accordins */}
      {categories?.map((category, index) => (
        // Controlled Component
        <RestaurantCategory
          key={categories?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
