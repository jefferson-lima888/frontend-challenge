export const formatPrice = (valueInCents: number) => {
    const valueReal = valueInCents / 100;
    return valueReal.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };