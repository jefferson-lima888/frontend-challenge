import { useState } from "react";

// type Props = {
//     item: string,
// }

export const useLocalStorage = (item: string) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(item) ?? "")
  );

  const updateLocalStorage = (newValue: any) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };
  return {
    value,
    updateLocalStorage,
  };
};

// export const useLocalStorage = (item: string) => {
//     const [value, setValue] = useState(
//       JSON.parse(localStorage.getItem(item) ?? "")
//     );

//     useEffect(() => {
//       localStorage.setItem(item, JSON.stringify(value));
//     }, [item, value]);

//     return {
//       value,
//       setValue,
//     };
//   };

// export function useLocalStorage2<T>(item: string){
//     const [value, setValue] = useState(JSON.parse(localStorage.getItem(item) ?? ''))

//     const updateLocalStorage = (newValue: T) => {
//         setValue(newValue);
//         localStorage.setItem(item,JSON.stringify(newValue));
//     }

//     return {
//         value,
//         updateLocalStorage
//     }
// }
