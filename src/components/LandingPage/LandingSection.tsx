import React from 'react'
import { LandingBackgroundStyled, LandingButtonStyled, LandingButtonWrapperStyled, LandingDescStyled, LandingPlaceholderStyled, LandingTextStyled, OrangeTextStyled, WrapperStyled } from './LandingSection.style'

export default function LandingSection() {
  return (
    <WrapperStyled>
      <LandingTextStyled>Váš klíč k <OrangeTextStyled>solárnímu</OrangeTextStyled><br />úspěchu !</LandingTextStyled>
      <LandingDescStyled>Dodáváme spolehlivé komponenty pro<br />zelenou energetiku.</LandingDescStyled>
      <LandingButtonWrapperStyled>
        <LandingButtonStyled onClick={() => window.document.getElementById('choose-us')?.scrollIntoView({ behavior: 'smooth' })}>O NÁS</LandingButtonStyled>
        <LandingPlaceholderStyled>ZJISTI VÍC !</LandingPlaceholderStyled>
      </LandingButtonWrapperStyled>
      <LandingBackgroundStyled />
    </WrapperStyled>
  )
}
