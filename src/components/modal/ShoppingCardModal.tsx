"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "@/store/slice/shoppingCartSlice";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
import ShoppingCard from "../card/ShoppingCard";
import { FaShoppingCart } from "react-icons/fa";

interface ShoppingCardModalProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

const ShoppingCardModal = ({
  isModalOpen,
  toggleModal,
}: ShoppingCardModalProps) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state: RootState) => state.shoppingCart.cartItems
  );

  const handleDecreaseQuantity = (item: {
    product: { id: number };
    quantity: number;
  }) => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item.product.id));
    } else {
      const confirmRemove = window.confirm(
        "Bu ürünü sepetinizden kaldırmak istediğinizden emin misiniz?"
      );
      if (confirmRemove) {
        dispatch(removeFromCart(item.product.id));
        toast.success("Ürün sepetinizden kaldırıldı.");
      }
    }
  };

  const handleIncreaseQuantity = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleClearCart = () => {
    const confirmRemove = window.confirm(
      "Sepetinizi temizlemek istediğinizden emin misiniz?"
    );
    if (confirmRemove) {
      dispatch(clearCart());
      toast.success("Sepetiniz başarıyla temizlendi.");
    }
  };

  const handleBuyProduct = () => {
    const confirmBuy = window.confirm(
      "Sepetinizdeki ürünleri satın almak istediğinizden emin misiniz?"
    );
    if (confirmBuy) {
      dispatch(clearCart());
      toast.success("Ürünleriniz başarıyla satın alındı.");
    }
  };

  return (
    <div
      className={`w-full sm:w-1/2 md:w-2/4 lg:w-1/3 xl:w-1/3 2xl:w-1/4  fixed top-0 z-10 right-0 h-full bg-gray-800 text-white shadow-lg transform ${
        isModalOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center py-4 px-5 border-b border-gray-600">
        <h2 className="text-lg font-semibold">
          Sepetim <span className="text-gray-400">({cartItems.length})</span>
        </h2>

        <button
          className="flex items-center justify-center hover:cursor-pointer"
          onClick={toggleModal}
        >
          <IoMdCloseCircleOutline size={23} color="white" />
        </button>
      </div>

      {cartItems.length > 0 && (
        <div className="flex flex-col items-start px-5">
          <button
            onClick={handleClearCart}
            className="text-white font-semibold hover:cursor-pointer py-3 "
          >
            Sepeti Boşalt
          </button>

          <div className=" pb-4 overflow-y-auto w-full max-h-[80vh] flex flex-col gap-3">
            {cartItems.map((item, key) => (
              <ShoppingCard
                key={key}
                item={item}
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleIncreaseQuantity={handleIncreaseQuantity}
              />
            ))}
          </div>
        </div>
      )}

      {cartItems.length === 0 && (
        <div className="flex flex-col justify-center items-center h-full gap-5">
          <FaShoppingCart size={70} color="#fff" />
          <p>Sepetinizde ürün bulunmamaktadır.</p>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="flex max-h-full items-center justify-center px-4 py-3  border-t border-gray-600">
          <button
            onClick={handleBuyProduct}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold"
          >
            Satın Al
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCardModal;
