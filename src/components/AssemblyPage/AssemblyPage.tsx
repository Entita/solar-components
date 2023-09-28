import React from 'react'
import { AssemblyHeaderWrapperStyled, AssemblyTitleStyled, WrapperStyled } from './AssemblyPage.style'
import ReactGA from 'react-ga4'

export default function AssemblyPage() {
  return (
    <WrapperStyled>
      <AssemblyHeaderWrapperStyled>
        <AssemblyTitleStyled>Instruktážní video</AssemblyTitleStyled>
        </AssemblyHeaderWrapperStyled>
      <video controls onPlay={() => ReactGA.event({ action: 'video', category: 'actions' })}>
        <source src='assembly.webm' type='video/webm' />
        Váš prohlížeč nepodporuje video přehrávač.
      </video>
    </WrapperStyled>
  )
}
