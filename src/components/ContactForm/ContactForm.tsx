import React from 'react'
import axios from 'axios';
import { BlurWrapperStyled, ContactUsButtonStyled, ContactUsWrapperStyled, ContentWrapperStyled, DescFormStyled, EmailFormStyled, LoadingWrapperStyled, NameFormStyled, SendButtonFormStyled, TitleFormStyled, TitleTextStyled, WrapperStyled } from './ContactForm.style'
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import { LoaderStyled } from '../LoadingPage/LoadingPage.style';
import { Colors } from '@/utils/Colors';

export default function ContactForm() {
  const [loading, setLoading] = React.useState<Boolean>(false)
  const [error, setError] = React.useState<{ name: Boolean; email: Boolean; subject: Boolean; message: Boolean }>({
    name: false,
    email: false,
    subject: false,
    message: false,
  })
  const [opened, setOpened] = React.useState<Boolean>(false)
  const nameRef = React.useRef<HTMLInputElement | null>(null)
  const emailRef = React.useRef<HTMLInputElement | null>(null)
  const titleRef = React.useRef<HTMLInputElement | null>(null)
  const messageRef = React.useRef<HTMLTextAreaElement | null>(null)

  const nameValidity = (name: string) => name.length < 4
  const emailValidity = (email: string) => !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)
  const subjectValidity = (subject: string) => subject.length < 4
  const messageValidity = (message: string) => message.length < 10

  const sendEmail = async () => {
    if (!nameRef.current || !emailRef.current || !titleRef.current || !messageRef.current) return
    const isNameValid = nameValidity(nameRef.current.value)
    const isEmailValid = emailValidity(emailRef.current.value)
    const isSubjectValid = subjectValidity(titleRef.current.value)
    const isMessageValid = messageValidity(messageRef.current.value)
    setError({ name: isNameValid, email: isEmailValid, subject: isSubjectValid, message: isMessageValid })
    if (isNameValid || isEmailValid || isSubjectValid || isMessageValid) return

    setLoading(true)
    await axios.post(`/api`, {
        subject: titleRef.current.value,
        message: messageRef.current.value,
        email: emailRef.current.value,
        name: nameRef.current.value,
    }).then(({ data }) => data.success ? alert(`Poptávka byla úspěšně odeslána.`) : alert(`Nastala chyba při odesílání poptávky!"`))
    .finally(() => setLoading(false))
  }

  return (
      <WrapperStyled>
        {opened ? (
          <ContentWrapperStyled>
            <CloseIcon onClick={() => setOpened(false)} />
            <BlurWrapperStyled disabled={loading}>
              <TitleTextStyled>Poptávka</TitleTextStyled>
              <NameFormStyled error={error.name} ref={nameRef} placeholder='Vaše jméno' />
              <EmailFormStyled error={error.email} ref={emailRef} placeholder='Váš email' />
              <TitleFormStyled error={error.subject} ref={titleRef} placeholder='Předmět' />
              <DescFormStyled error={error.message} ref={messageRef} placeholder='Zpráva'  />
              <SendButtonFormStyled onClick={() => sendEmail()}>Odeslat email</SendButtonFormStyled>
              {loading && (
                <LoadingWrapperStyled>
                  <LoaderStyled color={Colors.main.orange} newDesign />
                </LoadingWrapperStyled>
              )}
            </BlurWrapperStyled>
          </ContentWrapperStyled>
        ) : (
          <ContactUsWrapperStyled onClick={() => setOpened(true)}>
            <EmailIcon />
            <ContactUsButtonStyled>napište nám</ContactUsButtonStyled>
          </ContactUsWrapperStyled>
        )}
    </WrapperStyled>
  )
}
