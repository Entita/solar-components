import React from 'react'
import { WrapperStyled, CopyrightBottomBackgroundStyled, CopyrightBackgroundStyled, ContactUsMailStyled, ContactUsNumberStyled, ContactUsTitleStyled, ContactUsWrapperStyled, CopyrightStyled, LeftTextStyled, RightTextStyled, ContactCINStyled } from './CopyrightSection.style'
import { usePathname } from 'next/navigation'

export default function CopyrightSection() {
  const currRoute = usePathname().split('/')[1]

  return (
    <WrapperStyled orange={currRoute === ''}>
      <LeftTextStyled>sídlo firmy / ičo</LeftTextStyled>
      <ContactUsWrapperStyled>
        <ContactUsTitleStyled>OZVĚTE SE NÁM</ContactUsTitleStyled>
        <ContactCINStyled>IČO: 194 13 190</ContactCINStyled>
        <ContactUsMailStyled>info@solar-components.cz</ContactUsMailStyled>
        <ContactUsNumberStyled>+420 734 462 877</ContactUsNumberStyled>
        <CopyrightStyled>{`copyright rights ©${new Date().getFullYear()}`}</CopyrightStyled>
      </ContactUsWrapperStyled>
      <RightTextStyled>KONTAKT</RightTextStyled>
      <CopyrightBottomBackgroundStyled />
      <CopyrightBackgroundStyled />
    </WrapperStyled>
  )
}
