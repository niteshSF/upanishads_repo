import { Philosophy } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/isha`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

type TBhashyam = {
  id: string;
  text: string;
  philosophy: Philosophy;
};

const getBhashyam = async (number: number, philosophy: Philosophy) => {
  const language = "sa"; // Sanskrit language
  const response = await api.get(
    `/sutras/${number}/bhashyam?lang=${language}&philosophy=${philosophy}`
  );
  console.log("API Request URL:", `/sutra/${number}/bhashyam?lang=${language}&philosophy=${philosophy}`);
  console.log("API Response:", response.data);
  return response.data;
};

export const useGetBhashyamQuery = (number: number, philosophy: Philosophy) => {
  return useQuery<TBhashyam>({
    queryKey: ["bhashyams", number, philosophy],
    queryFn: () => getBhashyam(number, philosophy),
  });
};





// import { Philosophy } from "@/types/types";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const api = axios.create({
//   baseURL: `${import.meta.env.VITE_API_URL}/isha`,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// });

// type TBhashyam = {
//   id: string;
//   text: string;
//   philosophy: Philosophy;
// };

// const getBhashyam = async (number: number, philosophy: Philosophy) => {
//   const language = "sa"; // sa = sanskrit
//   const response = await api.get(
//     `/${number}/bhashyam?lang=${language}&phil=${philosophy}`
//   );
//   console.log(`/${number}/bhashyam?lang=${language}&phil=${philosophy}`);
//   return response.data;
// };

// export const useGetBhashyamQuery = (number: number, philosophy: Philosophy) => {
//   return useQuery<TBhashyam>({
//     queryKey: ["bhashyams", number, philosophy],
//     queryFn: () => getBhashyam(number, philosophy),
//   });
// };
