import React from 'react'
import { UserAuth } from '../../context/AuthContext'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const Account = () => {

  const {logOut, user} = UserAuth()

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full m-auto bg-[var(--primary-red)]'>
      <Navbar />
        <div className='h-screen mt-[90px]'>
          <h1 className='text-center text-2xl font-bold pt-12 text-[var(--primary-gold)]'>
            Account
          </h1>
          {user ?
          <div className='text-center text-[var(--primary-gold)] text-3xl py-4'>
            <p>Welcome, {user.displayName}</p>
            <div className='flex items-center justify-center p-12'>
              <img src={user.photoURL} alt='User Profile' className='h-[200px] rounded-full' />
            </div>
          </div> :
          <div className='text-center text-[var(--primary-gold)] text-3xl py-4'>
            <p>Please, Login</p>
          </div>
          }
          {user?.displayName ? 
            <button onClick={handleSignOut} className='py-3 px-7 mt-10 mx-auto block'>Log Out</button>
            : <Link to='/signin'><button className='py-3 px-7 mt-10 mx-auto block'>Log In</button></Link>        
          }
        </div>
      <Footer />
    </div>
  )
}

export default Account