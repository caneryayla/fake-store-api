"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { fetchProducts } from "@/store/slice/productSlice";

import ProductCard from "@/components/card/ProductCard";
import { GetProductDTO } from "@/store/types/Products.type";
import { addToCart } from "@/store/slice/shoppingCartSlice";
import { toast } from "react-toastify";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { fetchProductsData, fetchProductsIsLoading } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product: GetProductDTO[0]) => {
    dispatch(addToCart(product));

    toast.success("Ürün sepete eklendi.");
  };

  return (
    <div className="bg-white px-5 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
        {fetchProductsData?.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onPress={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}
