import Link from 'components/Link'
import { GetStaticPaths, GetStaticProps } from 'next'
import * as S from 'styles/Card'
import Item from 'components/Item'
import client from 'pages/api/apollo-client'
import { gql } from '@apollo/client'
import NotFoundItem from 'components/NotFoundItem'

type ItemsProps = {
  name: string
  image: string
  species: string
  status: string
}

type CharactersProps = {
  characters: Array<ItemsProps>
}

export default function List({ characters }: CharactersProps) {
  if (!characters.length) return <NotFoundItem />
  // if (loading) return <div>Loading</div>

  return (
    <S.Card>
      {characters.map((character, index) => (
        <Link href={`/api/character/${index}`} key={index}>
          <Item {...character} />
        </Link>
      ))}
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
            name
            species
            image
            status
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
