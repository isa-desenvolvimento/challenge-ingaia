import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  height: 223px;
  width: 223px;
  position: relative;
  border-radius: 8px;

  &:hover {
    border: 2px solid rgba(251, 255, 5, 0.794);
  }

  img {
    border-radius: 8px;
  }
`
export const ImageContainer = styled(Image)`
  max-width: 100%;
  max-height: 100%;
  border-radius: inherit;
  filter: ${({ title }) => (title === 'Dead' ? 'grayscale(1)' : 'none')};
`
export const Description = styled.div`
  backdrop-filter: blur(0.1rem);
  background: rgba(49, 49, 49, 0.9);
  position: absolute;
  width: 100%;
  bottom: 0;
  color: white;
  padding: 1rem;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
`
