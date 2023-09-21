import React from 'react'
import { AssemblyHeaderWrapperStyled, AssemblyTitleStyled, WrapperStyled } from './AssemblyPage.style'

export default function AssemblyPage() {
  return (
    <WrapperStyled>
      <AssemblyHeaderWrapperStyled>
        <AssemblyTitleStyled>Instruktážní video</AssemblyTitleStyled>
        </AssemblyHeaderWrapperStyled>
      <video controls>
        <source src='assembly.webm' type='video/webm' />
        Váš prohlížeč nepodporuje video přehrávač.
      </video>
    </WrapperStyled>
  )
}
