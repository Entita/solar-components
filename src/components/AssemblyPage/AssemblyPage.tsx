import React from 'react'
import { AssemblyDescStyled, AssemblyHeaderWrapperStyled, AssemblyTitleStyled, WrapperStyled } from './AssemblyPage.style'

export default function AssemblyPage() {
  return (
    <WrapperStyled>
      <AssemblyHeaderWrapperStyled>
        <AssemblyTitleStyled>Instruktážní video</AssemblyTitleStyled>
        <AssemblyDescStyled>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore totam ipsa quis? Cumque assumenda consequuntur sint ipsam veritatis impedit, quasi totam facere aperiam autem deleniti in suscipit repellendus saepe?</AssemblyDescStyled>
      </AssemblyHeaderWrapperStyled>
      <video controls>
        <source src='assembly.webm' type='video/webm' />
        Váš prohlížeč nepodporuje video přehrávač.
      </video>
    </WrapperStyled>
  )
}
