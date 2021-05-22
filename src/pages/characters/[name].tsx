import { useQuery } from '@apollo/client'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useRouter } from 'next/router'

import Item from 'components/Item'
import Details from 'components/Details'
import Loading from 'components/Loading'
import * as S from 'styles/Card'
import NotFoundItem from 'components/NotFoundItem'

import GET_CHARACTERES from 'lib/queries/getCharacteres'
import { initializeApollo } from 'lib/apollo'

export default function List({ page, name }) {
  const [isOpen, setIsOpen] = useState(false)
  const [character, setCharacter] = useState({})
  const router = useRouter()

  const { data, loading, error } = useQuery(GET_CHARACTERES, {
    variables: { page: parseInt(page), name }
  })

  if (loading) return <Loading />

  if (error || !data) return <NotFoundItem />
  if (data.characters.results.length === 0) return <NotFoundItem />

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const pagginationHandler = (page) => {
    const currentPath = router.pathname
    const currentQuery = router.query
    currentQuery.page = page.selected + 1

    router.push({
      pathname: currentPath,
      query: currentQuery
    })
  }
  return (
    <>
      <S.Card>
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
      <S.ReactPaginateContainer>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          activeClassName={'active'}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          initialPage={data.characters.info.pages - 1}
          pageCount={data.characters.info.count}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={pagginationHandler}
        />
      </S.ReactPaginateContainer>
    </>
  )
}

export const getServerSideProps = async ({ query }) => {
  const { name, page } = await query

  const apolloClient = initializeApollo()
  await apolloClient.query({
    query: GET_CHARACTERES,
    variables: { page: parseInt(page), name }
  })

  console.log(page, name)

  return {
    props: { page, name }
  }
}
