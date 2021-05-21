import * as S from 'styles/Nav'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslationContext } from 'locales/translationContext'
import Button from 'components/Button'

const Nav = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()
  const translation = useTranslationContext()

  const searchEvt = (e) => {
    if (e.target.value == '') {
      setSearch('')
    } else {
      setSearch(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (e.target[0].form[0].value)
      router.push(`/characters/${e.target[0].form[0].value}`)
  }

  return (
    <S.Container>
      <Image src="/assets/image-logo.png" width="502" height="214" />

      <form onSubmit={handleSubmit}>
        <S.InputContainer>
          <S.Input
            placeholder="Search characters"
            value={search}
            onChange={(e) => searchEvt(e)}
          />
          <Button
            disabled={search === ''}
            type="submit"
            text={translation.SEARCH}
          />
        </S.InputContainer>
      </form>
    </S.Container>
  )
}

export default Nav
