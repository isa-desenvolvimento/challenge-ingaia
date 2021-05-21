import styled from 'styled-components'

export const Container = styled.div`
  background: #00000080;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
`
export const ImageContainer = styled.div`
  position: relative;
  display: grid;
  grid-gap: 2rem;
  text-align: center;

  img {
    border-radius: 8px;
  }
`
export const Text = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 2rem;
`
