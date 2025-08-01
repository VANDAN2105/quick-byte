import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import Loader from "../Loader/Loader";

const FoodDisplay = ({ category }) => {
  const { food_list, loader } = useContext(StoreContext);
  if (!loader) {
    return (
      <div className="food-display" id="food-display">
        <h2>Top Dishes Near You</h2>
        <div className="food-display-list">
          {food_list.map((item, index) => {
            if (category === "All" || category === item.category)
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.img}
                />
              );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Loader />
      </div>
    );
  }
};

export default FoodDisplay;
