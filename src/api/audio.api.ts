import { Mode } from "@/types/types"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/isha`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

type TAudio = {
  file_path: string
}

const getAudio = async (number: number, mode: Mode) => {
  const response = await api.get(`/sutras/${number}/audio?mode=${mode}`)
  return response.data
}

export const useGetAudioQuery = (number: number, mode: Mode) => {
  return useQuery<TAudio>({
    queryKey: ["audio", number, mode],
    queryFn: () => getAudio(number, mode),
  })
}
