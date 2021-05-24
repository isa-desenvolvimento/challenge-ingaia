import { useQuery } from '@apollo/client'
import { useState } from 'react'

import Item from '../../components/Item'
import Details from '../../components/Details'
import Loading from '../../components/Loading'
import Pagination from '../../components/Pagination'
import NotFoundItem from '../../components/NotFoundItem'
import * as S from '../../styles/Card'

import GET_CHARACTERES from '../../lib/queries/getCharacteres'
import { initializeApollo } from '../../lib/apollo'

export default function List({ page, name }) {
  const [isOpen, setIsOpen] = useState(false)
  const [character, setCharacter] = useState({})

  const { data, loading, error } = useQuery(GET_CHARACTERES, {
    variables: { page, name }
  })

  if (loading) return <Loading />

  if (error || !data) return <NotFoundItem />
  if (data.characters.results.length === 0) return <NotFoundItem />

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <S.Card role="list_container">
        {data.characters.results.map((_character, index) => (
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
      <Pagination pageCount={data.characters.info.pages} />
    </>
  )
}

export const getServerSideProps = async ({ query }) => {
  const { name, page } = await query

  const apolloClient = initializeApollo()
  await apolloClient.query({
    query: GET_CHARACTERES,
    variables: { name, page: parseInt(page) }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      page: parseInt(page),
      name
    }
  }
}
