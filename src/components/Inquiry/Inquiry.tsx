import React from 'react'
import { WrapperStyled } from './Inquiry.style'

export default function Inquiry() {
  const sendEmail = () => {
    console.log('email sent')
  }

  return (
    <WrapperStyled>
      <h4>Inquiry</h4>
      <div>
        <label htmlFor="fname">Subject:</label>
        <input type="text" id="fname" name="fname" />
        <label htmlFor="lname">Message:</label>
        <input type="text" id="lname" name="lname" />
      </div>
    </WrapperStyled>
  )
}
