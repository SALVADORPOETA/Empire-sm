import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import { UserAuth } from '../../context/AuthContext'

const SignUpEmail = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {createUser} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await createUser(email, password, error)
            navigate('/account')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    } 

  return (
    <>
        <Navbar />
            <div className='mt-[90px] h-screen bg-[var(--primary-red)] text-[var(--primary-gold)]'>
                <div className=' max-w-[700px] mx-auto my-16 p-4'>
                <div>
                    <h1 className='text-center py-4 text-3xl md:text-4xl'>Sign Up for a <span className='text-[var(--dark-purple)]'>FREE</span> account</h1>
                    <p className='text-center py-2 text-xl md:text-2xl'>
                        Already have an account yet? <Link to='/signinemail' className='border-b-2 border-b-[var(--primary-gold)]'>Sign In!</Link>
                    </p>
                </div>
                <form onSubmit={handleSubmit} className='py-4'>
                    <div className='flex flex-col py-2'>
                        <label className='py-2 font-medium'>Email Address</label>
                        <input onChange={(e) => setEmail(e.target.value)} className='border border-[var(--primary-gold)] bg-[var(--dark-purple)] rounded-3xl shadow-lg p-3 w-full my-4 focus:outline-none text-[var(--primary-gold)] placeholder-purple' type="email" placeholder='Email' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='py-2 font-medium'>Password</label>
                        <p>(At least 6 characters)</p>
                        <input onChange={(e) => setPassword(e.target.value)} className='border border-[var(--primary-gold)] bg-[var(--dark-purple)] rounded-3xl shadow-lg p-3 w-full my-4 focus:outline-none text-[var(--primary-gold)] placeholder-purple' type="password" placeholder='Password' />
                    </div>
                    {
                        error &&
                        <p className='text-center py-2 text-xl md:text-2xl'>The Email or the Password is not valid. Please try again.</p> 
                    }
                    <button className='py-3 px-7 w-full my-4'>Sign Up</button>
                </form>
                </div>
            </div>
        <Footer />
    </>
  )
}

export default SignUpEmail