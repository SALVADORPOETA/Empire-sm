import React from 'react'
import GoogleButton from 'react-google-button'

const Login = () => {
  return (
    <div>
        <h1 className='text-center text-3xl font-bold py-8'>
            Login
        </h1>
        <div className='max-w-[240px] m-auto py-4'>
            <GoogleButton />
        </div>
    </div>
  )
}

export default Login