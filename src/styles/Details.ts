import styled from 'styled-components'
import Modal from 'styled-react-modal'

export const ModalContent = Modal.styled`
  background: #00000080;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

export const Container = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  margin: 5% auto;
  box-shadow: inset 0 0 1em #00000080, 0 0 1em #00000080;
  border-radius: 8px;

  @media (max-width: 800px) {
    margin-top: 30%;
    display: list-item;

    img {
      width: 100% !important;
    }
  }
`
export const Image = styled.div`
  margin-left: -15%;
  border-radius: inherit;
  margin-right: 10%;

  @media (max-width: 800px) {
    margin: auto;
    width: 150px;
    height: 150px;
    text-align: center;
    position: relative;
    top: -8rem !important;
  }
`
export const Left = styled.div`
  backdrop-filter: blur(2rem);
  width: 35%;
  height: 100%;
  background-color: #bdbcbc2e;
  border-bottom-left-radius: inherit;
  border-top-left-radius: inherit;

  @media (max-width: 800px) {
    width: 100%;
    height: 15%;
    justify-content: center;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    border-bottom-left-radius: 0;
  }
`
export const Right = styled.div`
  background: #00000090;
  width: 65%;
  height: 100%;
  border-bottom-right-radius: inherit;
  border-top-right-radius: inherit;

  @media (max-width: 800px) {
    width: 100%;
    height: 80%;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    border-top-right-radius: 0;
  }
`

export const TextContainer = styled.div`
  font-family: 'Nunito';
  padding: 5rem;

  @media (max-width: 800px) {
    padding: 3rem;
  }
`

export const H1 = styled.h1`
  color: white;
`

export const ButtonMobile = styled.button`
  display: none;

  @media (max-width: 800px) {
    display: block;
    background: none;
    font-size: 3rem;
    color: white;
    border: none;
    display: block;
    position: absolute;
    top: 3rem;
    left: 3rem;
  }
`
export const Margin = styled.div`
  margin: 15px;
`
