import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Container = styled(motion.li)`
  position: relative;
  border-radius: 8px;
  max-width: 340px;

  img {
    border-radius: 8px;
    max-width: 500px !important;
    max-height: 500px !important;

    @media (max-width: 800px) {
      height: 150px !important;
      width: 150px !important;
    }
  }

  @media (max-width: 800px) {
    position: relative;
    border-radius: 8px;
    margin: auto;
  }
`
export const ImageContainer = styled(Image)`
  width: 100%;
  height: 100%;
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
  max-width: 339px;
  overflow: hidden;

  h2 {
    text-overflow: ellipsis;
  }

  span {
    text-overflow: ellipsis;
  }
`
