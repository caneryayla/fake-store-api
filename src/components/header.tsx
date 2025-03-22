"use client";
import { FaShoppingCart } from "react-icons/fa";
import React, { Fragment, useState } from "react";
import ShoppingCardModal from "./modal/ShoppingCardModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <Fragment>
      <div className="sticky top-0 z-10 flex items-center justify-between bg-gray-800 px-6 py-4">
        <h1 className="text-white text-xl font-bold text-center">
          fake-store-api
        </h1>

        <div className="flex items-center cursor-pointer" onClick={toggleModal}>
          <FaShoppingCart size={20} className="text-white" />
        </div>
      </div>

      <ShoppingCardModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </Fragment>
  );
};

export default Header;
