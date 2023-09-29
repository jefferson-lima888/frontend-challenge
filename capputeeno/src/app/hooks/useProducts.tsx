import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductsFetchResponse } from "../types/products-response";
import { FilterType } from "../types/filter-types";
import { getCategoryByType } from "../components/utils/get-category-by-type";
import { useFilter } from "./useFilter";

const fetchProducts = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(process.env.NEXT_PUBLIC_API_URL?.toString() || "", {
    // query: `
    //        query {
    //             allProducts {
    //                 id
    //                 name
    //                 price_in_cents
    //                 image_url
    //             }
    //         }
    //         `,

    query,
  });
};

const mountQuery = (type: FilterType) => {
  if (type === FilterType.ALL)
    return `
            query {
                allProducts {
                    id
                    name
                    price_in_cents
                    image_url
                }
            }
            `;

  return `query {
            allProducts(filter: { category: "${getCategoryByType(type)}"}) {
              id
              name
              price_in_cents
              image_url
              category
            }
          }`;
};

export const useProducts = () => {
  const { type } = useFilter();
  const query = mountQuery(type);
  const { data } = useQuery({
    // queryFn: fetchProducts,
    queryFn: () => fetchProducts(query),
    queryKey: ["products", type],
  });

  console.log(query);
  console.log(data);

  return {
    data: data?.data?.data?.allProducts,
  };
};
