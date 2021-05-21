import { ReactNode } from 'react'

export type ChildrenProps = {
  children: ReactNode
}

export type localeContextProps = any

export type ButtonProps = {
  text: string
  onclick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export type LinkProps = {
  href: string
  children: ReactNode
}

export type ItemsProps = {
  name: string
  image: string
  species: string
  status: string
}

export type CharactersProps = {
  characters: Array<ItemsProps>
}
