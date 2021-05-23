import styled from 'styled-components'

export const Title = styled.h2`
  color: ${({ theme }) => theme.color || '#cbd736'};
  margin-bottom: ${({ theme }) => theme.margin || '1rem'};
  letter-spacing: ${({ theme }) => theme.letter || '1rem'};
`

export const Text = styled.span`
  color: white;
`
