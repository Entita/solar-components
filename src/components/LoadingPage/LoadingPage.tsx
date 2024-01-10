import React from 'react'
import { LoaderStyled, WrapperStyled } from './LoadingPage.style'

export default function LoadingPage({ color = 'white' }: { color?: string }) {
  return (
    <WrapperStyled>
      <LoaderStyled color={color}>Loading</LoaderStyled>
    </WrapperStyled>
  )
}
