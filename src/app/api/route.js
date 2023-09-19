import { NextResponse } from 'next/server'
const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `info@solar-components.cz`,
      pass: process.env.NODEMAILER_PW,
    },
})
  

const sendMail = async(toEmail, subject, message, htmlMessage) => {
  const mailOptions = {
    from: `info@solar-components.cz`,
    to: toEmail,
    subject: subject,
    text: message,
    html: htmlMessage,
  }

  return (await transporter.sendMail(mailOptions))?.rejected.length  === 0
}

export async function POST(req) {
    const { message, email, name } = await req.json()
    const formattedMessage = `
      <span>Jméno: ${name}</span> <br />
      <span>Email: ${email}</span> <br />
      <hr />
      <p>${message}</p>
    `
 
    const success = await sendMail(
      "info@solar-components.cz",
      "Poptávka z webu",
      message,
      formattedMessage,
    )

    return NextResponse.json({ success })
}