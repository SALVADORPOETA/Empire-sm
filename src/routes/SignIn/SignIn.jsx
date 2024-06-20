import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import {UserAuth} from '../../context/AuthContext'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

  const {googleSignIn, user} = UserAuth()
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user != null) {
      navigate('/account')
    }
  },[user, navigate])

  return (
    <div className='bg-[var(--primary-red)]'>
        <Navbar />
        <div className='h-screen mt-[90px]'>
          <h1 className='text-center text-3xl font-bold py-8 text-[var(--primary-gold)]'>
              Sign In
          </h1>
          <div className='max-w-[240px] m-auto py-4'>
              <GoogleButton onClick={handleGoogleSignIn} />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default SignIn