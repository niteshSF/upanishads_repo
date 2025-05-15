import { Language, Philosophy } from "@/types/types"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/isha`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

type TInterpretation = {
  id: number
  text: string
  language: Language
  philosophy: Philosophy
}

const getInterpretation = async (
  number: number,
  lang: Language,
  philosophy: Philosophy,
) => {
  const response = await api.get(
    `/sutras/${number}/interpretation?lang=${lang}&phil=${philosophy}`,
  )
  console.log(
    `/sutras/${number}/interpretation?lang=${lang}&phil=${philosophy}`,
  )
  console.log(response.data)
  return response.data
}

export const useGetInterpretationQuery = (
  number: number,
  lang: Language,
  philosophy: Philosophy,
) => {
  return useQuery<TInterpretation>({
    queryKey: ["interpretations", number, lang, philosophy],
    queryFn: () => getInterpretation(number, lang, philosophy),
  })
}
