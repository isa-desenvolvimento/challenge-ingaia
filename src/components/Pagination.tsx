import * as S from '../styles/Card'
import ReactPaginate from 'react-paginate'
import { useRouter } from 'next/router'

export default function Button({ pageCount }) {
  const router = useRouter()

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
    <S.ReactPaginateContainer role="pagination">
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        activeClassName={'active'}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        initialPage={1}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={25}
        onPageChange={pagginationHandler}
      />
    </S.ReactPaginateContainer>
  )
}
