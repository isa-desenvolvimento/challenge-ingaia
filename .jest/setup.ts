import '@testing-library/jest-dom'
import 'jest-styled-components'

import * as nextRouter from 'next/router'



nextRouter.useRouter = jest.fn()
nextRouter.useRouter.mockImplementation(() => ({ route: '/', locale: 'pt-BR' }))

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    images: {
      domains: ['cdn.example.com']
    }
  }
}))

