import styled from 'styled-components'

export const Card = styled.div`
  width: 80%;
  display: grid;
  grid-gap: 20px;
  grid-row-end: inherit;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin: 3rem auto;

  @media (max-width: 800px) {
    img {
      height: 100% !important;
      width: 100% !important;
    }
  }
`

export const ReactPaginateContainer = styled.div`
  ul {
    color: #fdfdfd;
    display: flex;
    gap: 3rem;
    list-style-type: none;
    justify-content: center;
    margin: 3rem;
  }
`
