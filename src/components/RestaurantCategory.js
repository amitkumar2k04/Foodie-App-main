import { FaAngleDown } from "react-icons/fa";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  setShowIndex(!showItems);
  // console.log(data);
  // const [showItem, setShowItem] = useState(false);
  // const handleClick = () => {
  //   setShowItem(!showItem);
  // };
  return (
    <div className="">
      {/* Creating Accordion Header */}
      <div className=" mx-auto my-5 items-center md:w-9/12 bg-gray-50 shadow-lg md:p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-semibold md:font-bold p-2">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <FaAngleDown />
          </span>
        </div>
        {/* For Accordian Body we created another component i.e. ItemList*/}
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
