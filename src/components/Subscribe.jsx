import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Subscribe = () => {

  const scrollToTop = () => {
    window.scrollTo({ top:0, behavior: 'smooth' })
  }

  const {user, logOut} = UserAuth()

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full px-4 py-16 bg-[var(--primary-red)] text-[var(--primary-gold)] text-center'>
        {user?.displayName ?
          <h1>Welcome to our Empire's Community!</h1> 
          : <h1>Join our Empire's Community</h1>
        }
        <div className='py-8'>
          {user?.displayName ?
            <button onClick={handleSignOut} className='w-[200px] py-3 px-7'>Log Out</button>
            : 
            <> 
              <Link to='/signin'><button className='w-[200px] py-3 px-7'>Sign In</button></Link>
              <div className='flex items-center justify-center py-2'>
                <input className='mr-2' type="checkbox" />
                <p>Yes, I agree to receive email communications from EMPIRE.</p>
              </div>
            </>
          }
        </div>
        <div className='flex justify-center py-12'>
          <div className='rounded-full shadow-xl cursor-pointer hover:scale-110 ease-in duration-300' onClick={scrollToTop}>
            <BsFillArrowUpCircleFill className='text-6xl md:text-7xl' />
          </div>
        </div>
    </div>
  )
}

export default Subscribe