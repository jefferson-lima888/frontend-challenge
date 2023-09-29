import { formatPrice } from "../utils/format-price";
import { Card } from "./styles";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
}) => {
  // função removida para o utils
  //   const formatPrice = (valueInCents: number) => {
  //     const valueReal = valueInCents / 100;
  //     return valueReal.toLocaleString("pt-br", {
  //       style: "currency",
  //       currency: "BRL",
  //     });
  //   };

  const priceFormatted = formatPrice(price);

  return (
    <Card>
      <img src={image} />
      <div>
        <h3>{title}</h3>
        <div></div>
        <p>{priceFormatted}</p>
      </div>
    </Card>
  );
};
