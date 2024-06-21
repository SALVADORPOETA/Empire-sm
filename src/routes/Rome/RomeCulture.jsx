import React from 'react'
import ImageSlider from './ImageSlider'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const RomeCulture = () => {

  const {user, logOut} = UserAuth()

  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      await logOut()
      navigate('/')
      console.log('You are logged out')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='mt-[90px] relative bg-[var(--primary-red)] text-[var(--primary-gold)] h-screen flex items-center justify-center'>
      <div className='absolute inset-0 z-0'>
        <ImageSlider />
      </div>
      {/* Layer */}
      <div className='relative max-w-[60%] w-full h-[60%] rounded-xl text-center flex flex-col justify-center z-10 bg-black/50' style={{ transform: 'translateY(-10%)' }}>
        <p className='font-bold p-2'>ROMAN EMPIRE</p>
        <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold md:py-6'>Culture of Ancient Rome</h1>
        <div>
          <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>Life in ancient Rome revolved around the city of Rome.</p>
        </div>
        <p>
          The city had a vast number of monumental structures like the Colosseum, 
          the Trajan's Forum and the Pantheon. 
        </p>
        <div className='mt-4'>
          {user ?
            <button onClick={handleSignOut} className='m-2 py-3 px-7'>Log Out</button> :
            <Link to='/signin'><button className='m-2 py-3 px-7'>Sign In</button></Link>
          }
        </div>
      </div>
    </div>
  )
}

export default RomeCulture