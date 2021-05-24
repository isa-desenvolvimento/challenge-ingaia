import { mocks, renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import List, { getServerSideProps } from '../pages/characters/[name]'

// jest.mock('initializeApollo', () => () => {
//   return {
//     query: jest.fn()
//   }
// })

describe('<List />', () => {
  beforeEach(() =>
    renderWithProvider(
      <MockedProvider mocks={mocks} addTypename={false}>
        <List page={3} name="teste" />
      </MockedProvider>
    )
  )
  // beforeEach(() => {
  //   // if you have an existing `beforeEach` just add the following line to it
  //   fetchMock.doMock()
  // })

  // it('should render the List', async () => {
  //   const ctx = { query: { page: 2, name: 'rick' } }

  //   const response = getServerSideProps(ctx)

  //   await new Promise((resolve) => setTimeout(resolve, 0))
  //   expect(screen.getByRole(/list_container/i)).toContain('rick')
  // })

  it('should render the styled-components List', () => {
    expect(screen.getByRole(/list_container/i)).toHaveStyle({
      width: '80%',
      display: 'grid',
      'grid-gap': '20px',
      'grid-row-end': 'inherit',
      'grid-template-columns': 'repeat(auto-fill, minmax(200px, 1fr))',
      margin: '3rem auto'
    })
  })
})
