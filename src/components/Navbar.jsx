import React, {useState, useEffect} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  const handleNavClick = () =>{
    setNav(false)
  }

  const [shadow, setShadow] = useState(false)

  // Use effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Use effect to handle shadow of the navbar
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >=90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <div className={shadow ? 'shadow-xl w-full h-[90px] bg-[var(--primary-red)] fixed top-0 left-0 z-50' 
        : 'w-full h-[90px] bg-[var(--primary-red)] fixed top-0 left-0 z-50'}>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
            <h1 className='text-[var(--primary-gold)]'><Link to='/' onClick={handleNavClick}>EMPIRE</Link></h1>
            <div className='hidden md:flex'>
                <ul className='flex text-[var(--primary-gold)] items-center'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/rome'>Rome</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <button className='ml-4 py-3 px-7'>Login</button>
                </ul>
            </div>

            {/* Hamburger Menu */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={30} className='text-[var(--primary-gold)]' /> : <AiOutlineMenu size={30} className='text-[var(--primary-gold)]' />}                
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 'w-full h-screen lg:h-[0%] bg-[var(--primary-red)] text-[var(--primary-gold)] absolute top-[90px] left-0 flex justify-center text-center ease-in-out duration-500 z-20' 
              : 'absolute left-[-100%]'
            }>
                <ul>
                    <li className='text-2xl'><Link to='/' onClick={handleNavClick}>Home</Link></li>
                    <li className='text-2xl'><Link to='/rome' onClick={handleNavClick}>Rome</Link></li>
                    <li className='text-2xl'><Link to='/products' onClick={handleNavClick}>Products</Link></li>
                    <li className='text-2xl'><Link to='/contact' onClick={handleNavClick}>Contact</Link></li>
                    <button className='m-8 py-3 px-7'>Login</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar