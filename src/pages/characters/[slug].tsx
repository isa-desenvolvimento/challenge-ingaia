import { GetStaticPaths, GetStaticProps } from 'next'
import * as S from 'styles/Card'
import Item from 'components/Item'
import client from 'pages/api/apollo-client'
import { gql } from '@apollo/client'
import NotFoundItem from 'components/NotFoundItem'
import { CharactersProps } from 'types/components'
import { useState } from 'react'
import Details from 'components/Details'

export default function List({ characters }: CharactersProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [character, setCharacter] = useState({})

  if (!characters.length) return <NotFoundItem />
  // if (loading) return <div>Loading</div>

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <S.Card>
      {characters.map((_character, index) => (
        <Item
          {..._character}
          onclick={() => {
            setCharacter(_character)
            toggleModal()
          }}
          key={index}
        />
      ))}

      <Details
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        item={character}
      />
    </S.Card>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking'
})

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = await ctx.params

  const { data } = await client.query({
    query: gql`
      query {
        characters(filter: { name: "${slug}" }) {
          results {
            id
            name
            status
            species
            gender
            image
          }
        }
      }
    `
  })

  return {
    props: {
      characters: data.characters.results
    },
    revalidate: 60 // 1800,
  }
}
