import styled from 'styled-components'

export const Card = styled.div`
  width: 80%;
  display: grid;
  grid-gap: 20px;
  grid-row-end: inherit;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin: 3rem auto;
`

export const Modal = styled.div`
  background: #00000080;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
`

export const Container = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin: 5% auto;
  /* width: 1031px; */
  box-shadow: inset 0 0 1em #00000080, 0 0 1em #00000080;
  border-radius: 8px;
  /* height: 1050px; */
`
export const Image = styled.div`
  margin-left: -15%;
  margin-top: 15%;
  border-radius: inherit;
`
export const Left = styled.div`
  backdrop-filter: blur(2rem);
  width: 35%;
  /* margin-left: 15%; */
  height: 100%;
  background-color: #bdbcbc2e;
  border-bottom-left-radius: inherit;
  border-top-left-radius: inherit;
`
export const Right = styled.div`
  background: #000000cf;
  width: 65%;
  height: 100%;
  border-bottom-right-radius: inherit;
  border-top-right-radius: inherit;
`

export const Button = styled.button`
  margin-left: 15px;
  margin-top: 15px;
  width: 5em;
  color: white;
  border-color: rgba(255, 255, 255, 0.664);
  background-color: transparent;
  border-radius: 5px;
  transition-duration: 0.4s;
`

export const TextContainer = styled.div`
  font-family: 'Nunito';
  padding: 5rem;
`

export const Title = styled.h2`
  color: #cbd736;
  margin-bottom: 1rem;
`

export const H1 = styled.h1`
  color: white;
`

export const Text = styled.span`
  color: white;
`
