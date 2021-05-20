import axios from 'axios'

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
})

export const searchCharacter = async (search) => {
  const { data } = await api.get(`/character?name${search}`)

  return data
}

export const searchItemID = async (id: string) => {
  const { data } = await api.get(`/items/${id}`)
  return data
}

export const searchItemDescriptions = async (id: string) => {
  const { data } = await api.get(`/items/${id}/description`)
  return { description: data.plain_text }
}
