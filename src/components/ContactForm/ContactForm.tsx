import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { ContactUsButtonStyled, ContentWrapperStyled, DescFormStyled, EmailFormStyled, LoadingWrapperStyled, NameFormStyled, SendButtonFormStyled, TitleFormStyled, TitleFormWrapperStyled, TitleTextStyled, WrapperStyled } from './ContactForm.style'
import axios from 'axios';
import { LoaderStyled } from '../LoadingPage/LoadingPage.style';

export default function ContactForm() {
  const [loading, setLoading] = React.useState<Boolean>(false)
  const [opened, setOpened] = React.useState<Boolean>(false)
  const nameRef = React.useRef<HTMLInputElement | null>(null)
  const emailRef = React.useRef<HTMLInputElement | null>(null)
  const titleRef = React.useRef<HTMLInputElement | null>(null)
  const messageRef = React.useRef<HTMLTextAreaElement | null>(null)

  const sendEmail = async () => {
    if (!nameRef.current || !emailRef.current || !titleRef.current || !messageRef.current) return

    setLoading(true)
    await axios.post(`/api`, {
        subject: titleRef.current.value,
        message: messageRef.current.value,
        email: emailRef.current.value,
        name: nameRef.current.value,
    }).then(({ data }) => data.success ? alert(`Poptávka byla úspěšně odeslána.`) : alert(`Nastala chyba při odesílání poptávky!"`))
    setLoading(false)
  }

  return (
      <WrapperStyled>
        {opened ? (
            <ContentWrapperStyled disabled={loading}>
                <TitleFormWrapperStyled>
                    <TitleTextStyled>Poptávka</TitleTextStyled>
                    <CloseIcon onClick={() => setOpened(false)} />
                </TitleFormWrapperStyled>
                <NameFormStyled ref={nameRef} placeholder='Vaše jméno' />
                <EmailFormStyled ref={emailRef} placeholder='Váš email' />
                <TitleFormStyled ref={titleRef} placeholder='Předmět' />
                <DescFormStyled ref={messageRef} placeholder='Zpráva'  />
                <SendButtonFormStyled onClick={() => sendEmail()}>Odeslat email</SendButtonFormStyled>
                {loading && (
                  <LoadingWrapperStyled>
                    <LoaderStyled />
                  </LoadingWrapperStyled>
                )}
            </ContentWrapperStyled>
        ) : (
            <ContactUsButtonStyled onClick={() => setOpened(true)}>contact us</ContactUsButtonStyled>
        )}
    </WrapperStyled>
  )
}
