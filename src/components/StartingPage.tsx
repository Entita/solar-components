import React from 'react'
import { WrapperStyled } from './StartingPage.style'
import useStore from '../store/store'
import LandingSection from './LandingPage/LandingSection'
import ChooseUsSection from './LandingPage/ChooseUsSection'
import FAQSection from './LandingPage/FAQSection'

export const StartingPage = () => {
  const counter = useStore((state: { counter: any }) => state.counter)
  const increment = useStore((state: { increment: any }) => state.increment)
  const decrement = useStore((state: { decrement: any }) => state.decrement)

  return (
    <WrapperStyled>
      <LandingSection />
      <ChooseUsSection />
      <FAQSection />
    </WrapperStyled>
  )
}
