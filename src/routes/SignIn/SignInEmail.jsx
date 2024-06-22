import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const SignInEmail = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const {signIn} = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await signIn(email, password, error)
            navigate('/account')
        } catch(e) {
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
                    <h1 className='text-center py-4 text-3xl md:text-4xl'>Sign In to <span className='text-[var(--dark-purple)]'>Your</span> account</h1>
                    <p className='text-center py-2 text-xl md:text-2xl'>
                        Don't you have an account yet? <Link to='/signupemail' className='border-b-2 border-b-[var(--primary-gold)]'>Sign Up!</Link>
                    </p>
                </div>
                <form onSubmit={handleSubmit} className='py-4'>
                    <div className='flex flex-col py-2'>
                        <label className='py-2 font-medium'>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} className='border border-[var(--primary-gold)] bg-[var(--dark-purple)] rounded-3xl shadow-lg p-3 w-full my-4 focus:outline-none text-[var(--primary-gold)] placeholder-purple' type="email" />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='py-2 font-medium'>Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} className='border border-[var(--primary-gold)] bg-[var(--dark-purple)] rounded-3xl shadow-lg p-3 w-full my-4 focus:outline-none text-[var(--primary-gold)] placeholder-purple' type="password" />
                    </div>
                    {
                        error &&
                        <p className='text-center py-2 text-xl md:text-2xl'>The Email or the Password is not valid. Please try again.</p> 
                    }
                    <button className='py-3 px-7 w-full my-4'>Sign In</button>
                </form>
                </div>
            </div>
        <Footer />
    </>
  )
}

export default SignInEmail