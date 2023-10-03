import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductsFetchResponse } from "../types/products-response";
import { FilterType } from "../types/filter-types";
import { useFilter } from "./useFilter";
import { PriorityType } from "../types/priority-types";
import {
  getCategoryByType,
  getFieldByPriority,
  mountQuery,
} from "../components/utils/graphql-Filters";
import { useDeferredValue } from "react";

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

// const mountQuery = (type: FilterType, priority: PriorityType) => {
//   if (type === FilterType.ALL && priority === PriorityType.POPULARITY)
//     return `
//             query {
//                 allProducts(sortField: "sales", sortOrder: "DSC") {
//                     id
//                     name
//                     price_in_cents
//                     image_url
//                 }
//             }
//             `;

//   const sortSettings = getFieldByPriority(priority);
//   const categoryFilter = getCategoryByType(type);
//   return `query {
//             allProducts(sortField: "${sortSettings.field}", sortOrder: "${
//     sortSettings.order
//   }", ${categoryFilter ? `filter: { category: "${categoryFilter}"}` : ""}) {
//               id
//               name
//               price_in_cents
//               image_url
//               category
//             }
//           }`;
// };

export const useProducts = () => {
  const { type, priority, search } = useFilter();
  //esse hook useDeferredValue é usado para só retornar quando o estado estiver terminado de ser alterado
  const searchDeferred = useDeferredValue(search);
  const query = mountQuery(type, priority);
  const { data } = useQuery({
    // queryFn: fetchProducts,
    queryFn: () => fetchProducts(query),
    queryKey: ["products", type, priority],
  });

  console.log(query);
  console.log(data);

  const products = data?.data?.data?.allProducts;
  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchDeferred.toLocaleLowerCase())
  );

  return {
    // data: data?.data?.data?.allProducts,
    data: filteredProducts,
  };
};
