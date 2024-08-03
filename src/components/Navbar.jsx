import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  const handleNavClick = () => {
    setNav(false)
  }

  const [shadow, setShadow] = useState(false)

  // Use effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Use effect to handle shadow of the navbar
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  const { user, logOut } = UserAuth()

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

  const handleClick = () => {
    handleSignOut()
    handleNavClick()
  }

  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <div
      className={
        shadow
          ? 'shadow-xl w-full h-[90px] bg-[var(--primary-red-transparent)] fixed top-0 left-0 z-50'
          : 'w-full h-[90px] bg-[var(--primary-red)] fixed top-0 left-0 z-50'
      }
    >
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <h1 className="text-[var(--primary-gold)]">
          <Link to="/" onClick={handleNavClick}>
            EMPIRE
          </Link>
        </h1>
        <div className="hidden md:flex">
          <ul className="flex text-[var(--primary-gold)] items-center">
            {user ? (
              <li>
                <Link
                  to="/account"
                  className={`hover:border-b-2 hover:border-[var(--primary-gold)] ${
                    isActive('/account')
                      ? 'border-b-2 border-[var(--primary-gold)]'
                      : ''
                  }`}
                >
                  Account
                </Link>
              </li>
            ) : null}
            <li>
              <Link
                to="/"
                className={`hover:border-b-2 hover:border-[var(--primary-gold)] ${
                  isActive('/') ? 'border-b-2 border-[var(--primary-gold)]' : ''
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/culture"
                className={`hover:border-b-2 hover:border-[var(--primary-gold)] ${
                  isActive('/culture')
                    ? 'border-b-2 border-[var(--primary-gold)]'
                    : ''
                }`}
              >
                Culture
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`hover:border-b-2 hover:border-[var(--primary-gold)] ${
                  isActive('/products')
                    ? 'border-b-2 border-[var(--primary-gold)]'
                    : ''
                }`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:border-b-2 hover:border-[var(--primary-gold)] ${
                  isActive('/contact')
                    ? 'border-b-2 border-[var(--primary-gold)]'
                    : ''
                }`}
              >
                Contact
              </Link>
            </li>
            {user ? (
              <button className="ml-4 py-3 px-7" onClick={handleSignOut}>
                Log Out
              </button>
            ) : (
              <Link to="/signin">
                <button className="ml-4 py-3 px-7">Sign In</button>
              </Link>
            )}
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-[var(--primary-gold)]" />
          ) : (
            <AiOutlineMenu size={30} className="text-[var(--primary-gold)]" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'w-full h-screen lg:h-[0%] bg-[var(--primary-red)] text-[var(--primary-gold)] absolute top-[90px] left-0 flex justify-center text-center ease-in-out duration-500 z-20'
              : 'absolute left-[-100%]'
          }
        >
          <ul>
            {user ? (
              <li>
                <Link
                  className={`hover:border-b-2 hover:border-[var(--primary-gold)] ${
                    isActive('/account')
                      ? 'border-b-2 border-[var(--primary-gold)] inline-block p-1 text-2xl'
                      : 'inline-block p-1 text-2xl'
                  }`}
                  to="/account"
                  onClick={handleNavClick}
                >
                  Account
                </Link>
              </li>
            ) : null}
            <li>
              <Link
                className={`hover:border-b-2 hover:border-[var(--primary-gold)] ${
                  isActive('/')
                    ? 'border-b-2 border-[var(--primary-gold)] inline-block p-1 text-2xl'
                    : 'inline-block p-1 text-2xl'
                }`}
                to="/"
                onClick={handleNavClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`hover:border-b-2 hover:border-[var(--primary-gold)] ${
                  isActive('/culture')
                    ? 'border-b-2 border-[var(--primary-gold)] inline-block p-1 text-2xl'
                    : 'inline-block p-1 text-2xl'
                }`}
                to="/culture"
                onClick={handleNavClick}
              >
                Culture
              </Link>
            </li>
            <li>
              <Link
                className={`hover:border-b-2 hover:border-[var(--primary-gold)] ${
                  isActive('/products')
                    ? 'border-b-2 border-[var(--primary-gold)] inline-block p-1 text-2xl'
                    : 'inline-block p-1 text-2xl'
                }`}
                to="/products"
                onClick={handleNavClick}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className={`hover:border-b-2 hover:border-[var(--primary-gold)] ${
                  isActive('/contact')
                    ? 'border-b-2 border-[var(--primary-gold)] inline-block p-1 text-2xl'
                    : 'inline-block p-1 text-2xl'
                }`}
                to="/contact"
                onClick={handleNavClick}
              >
                Contact
              </Link>
            </li>
            {user ? (
              <button onClick={handleClick} className="m-8 py-3 px-7">
                Log Out
              </button>
            ) : (
              <Link to="/signin">
                <button onClick={handleNavClick} className="m-8 py-3 px-7">
                  Sign In
                </button>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
