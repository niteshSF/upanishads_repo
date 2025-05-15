import { Language } from "@/types/types"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/isha`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

type TTransliteration = {
  id: number
  text: string
  language: Language
}

const getTransliteration = async (number: number, lang: Language) => {
  const response = await api.get(
    `/sutras/${number}/transliteration?lang=${lang}`,
  )
  return response.data
}

export const useGetTransliterationQuery = (number: number, lang: Language) => {
  return useQuery<TTransliteration>({
    queryKey: ["transliterations", number, lang],
    queryFn: () => getTransliteration(number, lang),
  })
}
