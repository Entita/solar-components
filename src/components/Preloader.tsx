'use client'
import React from 'react'
import Header from './Header/Header'
import CopyrightSection from './LandingPage/CopyrightSection'
import ContactForm from './ContactForm/ContactForm'

export default function Preloader({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <CopyrightSection />
      <ContactForm />
    </>
  )
}
