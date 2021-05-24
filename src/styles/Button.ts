import styled from 'styled-components'

export const Button = styled.button`
  margin-left: 15px;
  width: 5em;
  color: white;
  border-color: rgba(255, 255, 255, 0.664);
  background-color: transparent;
  border-radius: 5px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  padding: 1rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-self: flex-start;

  @media (max-width: 800px) {
    display: ${({ theme }) => theme};
  }
`
