import styled from 'styled-components'

export const Card = styled.div`
  width: 80%;
  display: grid;
  grid-gap: 20px;
  grid-row-end: inherit;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin: 3rem auto;
`
