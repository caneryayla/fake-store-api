import { GetProductDTO } from "@/store/types/Products.type";
import React from "react";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

type ProductCardProps = {
  product: GetProductDTO[0];
  onPress: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  const fullStars = Math.floor(product.rating.rate);
  const emptyStars = 5 - fullStars;

  return (
    <div className="flex flex-col justify-between gap-5 border border-gray-300 p-4 rounded-lg shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        className="w-full h-64 object-contain"
      />

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-black">{product.title}</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-400">
              ({product.rating.rate})
            </span>
            <div className="flex">
              {[...Array(fullStars)].map((_, index) => (
                <RiStarSFill
                  key={`full-${index}`}
                  className="text-yellow-500"
                  size={20}
                />
              ))}

              {[...Array(emptyStars)].map((_, index) => (
                <RiStarSLine
                  key={`empty-${index}`}
                  className="text-gray-400"
                  size={20}
                />
              ))}
            </div>
          </div>
          <span className="text-sm text-gray-400">
            ({product.rating.count})
          </span>
        </div>

        <div className="flex items-center">
          <span className="text-xl text-black font-bold">
            {product.price} TL
          </span>
        </div>
      </div>

      <button
        onClick={onPress}
        className="bg-white border-2 border-gray-800 text-gray-800 py-1 rounded-lg hover:bg-gray-800 hover:text-white hover:cursor-pointer hover:border-gray-800"
      >
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductCard;
