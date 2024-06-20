import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ContactForm from './ContactForm'
import Subscribe from '../../components/Subscribe'

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <ContactForm />
      <Subscribe />
      <Footer />  
    </>
  )
}

export default ContactPage