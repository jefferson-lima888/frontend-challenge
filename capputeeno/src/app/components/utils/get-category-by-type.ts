import { FilterType } from "@/app/types/filter-types";

export const getCategoryByType = (type: FilterType) => {
    if(type === FilterType.MUG) return "mugs";
    if(type === FilterType.TSHIRTS) return "t-shirts";
    return "";
}