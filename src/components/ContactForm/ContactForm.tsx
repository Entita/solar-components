import React from 'react'
import axios from 'axios';
import { BlurWrapperStyled, ContactUsButtonStyled, ContactUsWrapperStyled, ContentWrapperStyled, DescFormStyled, EmailFormStyled, LoadingWrapperStyled, NameFormStyled, SendButtonFormStyled, TitleTextStyled, WantPriceListLabelStyled, WantPriceListStyled, WantPriceListWrapperStyled, WrapperStyled } from './ContactForm.style'
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import { LoaderStyled } from '../LoadingPage/LoadingPage.style';
import { Colors } from '@/utils/Colors';
import ReactGA from 'react-ga4'

export default function ContactForm() {
  const [loading, setLoading] = React.useState<Boolean>(false)
  const [error, setError] = React.useState<{ name: Boolean; email: Boolean; message: Boolean }>({
    name: false,
    email: false,
    message: false,
  })
  const [opened, setOpened] = React.useState<Boolean>(false)
  const nameRef = React.useRef<HTMLInputElement | null>(null)
  const emailRef = React.useRef<HTMLInputElement | null>(null)
  const messageRef = React.useRef<HTMLTextAreaElement | null>(null)
  const wantPriceListRef = React.useRef<HTMLInputElement | null>(null)

  const nameValidity = (name: string) => name.length < 4
  const emailValidity = (email: string) => !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)
  const messageValidity = (message: string) => message.length < 10

  const sendEmail = async () => {
    if (!nameRef.current || !emailRef.current || !messageRef.current || !wantPriceListRef.current) return
    const isNameValid = nameValidity(nameRef.current.value)
    const isEmailValid = emailValidity(emailRef.current.value)
    const isMessageValid = messageValidity(messageRef.current.value)
    setError({ name: isNameValid, email: isEmailValid, message: isMessageValid })
    if (isNameValid || isEmailValid || isMessageValid) return

    setLoading(true)
    await axios.post(`/api`, {
        message: messageRef.current.value,
        email: emailRef.current.value,
        name: nameRef.current.value,
        wantPriceList: wantPriceListRef.current.checked,
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
              <DescFormStyled error={error.message} ref={messageRef} placeholder='Zpráva'  />
              <WantPriceListWrapperStyled>
                <WantPriceListLabelStyled htmlFor='price_list'>Chcete zaslat ceník ?</WantPriceListLabelStyled>
                <WantPriceListStyled ref={wantPriceListRef} type='checkbox' id='price_list' />
              </WantPriceListWrapperStyled>
              <SendButtonFormStyled onClick={() => sendEmail()}>Odeslat email</SendButtonFormStyled>
              {loading && (
                <LoadingWrapperStyled>
                  <LoaderStyled color={Colors.main.orange} newDesign />
                </LoadingWrapperStyled>
              )}
            </BlurWrapperStyled>
          </ContentWrapperStyled>
        ) : (
          <ContactUsWrapperStyled onClick={() => {
            ReactGA.event({ action: 'contact-us', category: 'actions' })
            setOpened(true)
          }}>
            <EmailIcon />
            <ContactUsButtonStyled>napište nám</ContactUsButtonStyled>
          </ContactUsWrapperStyled>
        )}
    </WrapperStyled>
  )
}
