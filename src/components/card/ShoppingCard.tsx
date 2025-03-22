"use client";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { HiOutlineMinus } from "react-icons/hi";

interface ShoppingCardProps {
  item: {
    product: {
      id: number;
      title: string;
      price: number;
      image: string;
    };
    quantity: number;
  };
  handleDecreaseQuantity: (item: any) => void;
  handleIncreaseQuantity: (id: number) => void;
}

const ShoppingCard = ({
  item,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
}: ShoppingCardProps) => {
  return (
    <div className="w-full flex items-center justify-between bg-gray-700 p-3 rounded-lg">
      <div className="flex-1 flex items-center gap-3">
        <img
          src={item.product.image}
          alt={item.product.title}
          className="min-w-16 min-h-16 max-w-16 max-h-16 object-contain bg-white py-1"
        />

        <div className="flex flex-col gap-2">
          <p className="text-md font-medium ">{item.product.title}</p>
          <p className="text-lg font-semibold text-white">
            {item.product.price * item.quantity} TL
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center border border-gray-100 rounded-full overflow-hidden">
        <button
          className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-900 text-white text-lg font-bold hover:cursor-pointer"
          onClick={() => handleDecreaseQuantity(item)}
        >
          <HiOutlineMinus size={15} />
        </button>
        <span className="text-white text-md font-bold mx-2">
          {item.quantity}
        </span>
        <button
          className="w-7 h-7 flex items-center rounded-full justify-center hover:bg-gray-900 text-white text-lg font-bold hover:cursor-pointer"
          onClick={() => handleIncreaseQuantity(item.product.id)}
        >
          <FiPlus size={18} />
        </button>
      </div>
    </div>
  );
};

export default ShoppingCard;
