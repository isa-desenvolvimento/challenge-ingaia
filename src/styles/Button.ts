import styled from 'styled-components'

export const Button = styled.button`
  margin: 15px;
  width: 5em;
  color: white;
  border-color: rgba(255, 255, 255, 0.664);
  background-color: transparent;
  border-radius: 5px;
  transition-duration: 0.4s;
  padding: 1rem;

  @media (max-width: 800px) {
    display: ${({ isMobile = false }) => (isMobile ? 'none' : 'block')};
  }
`
