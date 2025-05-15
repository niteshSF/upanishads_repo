import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/isha`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

type TSutra = {
  id: number
  number: number
  text: string
}
type TSutraList = {
  id: number
  number: number
}

const getSutra = async (number: number) => {
  const response = await api.get(`/sutras/${number}`)
  return response.data
}

export const useGetSutraQuery = (number: number) => {
  return useQuery<TSutra>({
    queryKey: ["sutras", number],
    queryFn: () => getSutra(number),
  })
}

const getSutraList = async () => {
  const response = await api.get(`/sutras/`)
  return response.data
}

export const useGetSutraListQuery = () => {
  return useQuery<TSutraList[]>({
    queryKey: ["sutras"],
    queryFn: getSutraList,
  })
}
