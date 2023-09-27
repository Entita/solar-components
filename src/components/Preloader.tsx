'use client'
import React from 'react'
import Header from './Header/Header'
import CopyrightSection from './LandingPage/CopyrightSection'
import ContactForm from './ContactForm/ContactForm'
import ReactGA from 'react-ga';

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '')
    ReactGA.pageview(window.location.pathname + window.location.search)
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
