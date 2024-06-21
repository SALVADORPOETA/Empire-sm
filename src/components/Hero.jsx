import React from 'react'
import heroVid from '../assets/roman_dark.mp4'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Hero = () => {

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
    <div className='w-full h-[90vh] top-[90px] mt-[90px]'>
        <video className='object-cover h-full w-full absolute z-[-1]' src={heroVid} autoPlay loop muted />
        <div className='w-full h-[90%] flex flex-col justify-center items-center text-[var(--primary-gold)] px-4 text-center'>
            <h1><span className='red'>Roman</span> Empire</h1>
            <h1 className='py-2'>Senatus PopulusQue <span className='red'>Romanus</span></h1>
            <p className='text-xl py-4'>Ave Caesar, morituri te salutant</p>
            <div>
                {user ?
                    <button onClick={handleSignOut} className='m-2 py-3 px-7'>Log Out</button>
                    : <Link to='/signin'><button className='m-2 py-3 px-7'>Sign In</button></Link>
                }
            </div>
        </div>
        <div>
            <p className='text-center text-[var(--primary-gold)] text-2xl font-bold'>Those who changed the world</p>
        </div>
    </div>
  )
}

export default Hero