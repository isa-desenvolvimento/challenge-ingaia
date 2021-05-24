import * as S from '../styles/Nav'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslationContext } from '../locales/translationContext'
import Button from '../components/Button'

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

    if (search) router.push(`/characters/${search}?page=1`)
  }

  return (
    <S.Container role="nav_container">
      <Image
        src="/assets/image-logo.png"
        width="502"
        height="214"
        alt={translation.ALT_LOGO}
        loading="lazy"
        role="logo"
      />

      <form onSubmit={handleSubmit}>
        <S.InputContainer>
          <S.Input
            placeholder={translation.PLACEHOLDER}
            value={search}
            onChange={(e) => searchEvt(e)}
            arial-label={translation.ARIAL_LABEL_INPUT}
            role="input"
            data-cy="nav-input"
          />
          <Button
            disabled={search === ''}
            type="submit"
            text={translation.SEARCH}
            arialLabel={translation.ARIAL_LABEL_BTN_SEARCH}
            data-cy="nav-button"
          />
        </S.InputContainer>
      </form>
    </S.Container>
  )
}

export default Nav
