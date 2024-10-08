import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();
  
  const handleAddItem = (item) => {
    // Dispatch an Action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid= "foodItems"
          key={item.card.info.id}
          className="p-2 m-2 bg-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-2 align-middle">
            <div className="absolute ">
              <button
                className="p-2 rounded-lg mx-12 bg-black text-white shadow-lg"
                onClick={()=>handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-40"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
