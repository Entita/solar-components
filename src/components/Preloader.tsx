'use client'
import React from 'react'
import Header from './Header/Header'
import CopyrightSection from './LandingPage/CopyrightSection'
import ContactForm from './ContactForm/ContactForm'
import ReactGA from 'react-ga4';

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = React.useState<boolean>(true)

  ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY || '')
  ReactGA.send({
    hitType: 'pageview',
    page: typeof window !== 'undefined' ? window.location.pathname : '',
  })
  console.log('sending to analytics: ', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY, {
    hitType: 'pageview',
    page: typeof window !== 'undefined' ? window.location.pathname : '',
  })

  React.useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <>
          <Header />
          {children}
          <CopyrightSection />
          <ContactForm />
        </>
      )}
    </>
  )
}
