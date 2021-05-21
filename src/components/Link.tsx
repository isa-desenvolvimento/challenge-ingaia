import NextLink from 'next/link'
import { LinkProps } from 'types/components'

export default function Link({ href, children }: LinkProps) {
  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  )
}
