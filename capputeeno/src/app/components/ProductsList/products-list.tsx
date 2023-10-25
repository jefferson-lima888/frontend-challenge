"use client";
import { useProducts } from "@/app/hooks/useProducts";
import { ProductCard } from "../ProductCard/product-card";
import { ListContainer } from "./styles";

interface ProductsListProps {}

export const ProductsList: React.FC<ProductsListProps> = ({}) => {
  const { data } = useProducts();
  // console.log(data);
  return (
    <ListContainer>
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          image={product.image_url}
          price={product.price_in_cents}
        />
      ))}
    </ListContainer>
  );
};
