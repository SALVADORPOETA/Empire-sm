import React from 'react'
import religion from '../../assets/religion.jpg'

const RomeReligion = () => {
  return (
    <div className='bg-[var(--primary-red)] text-[var(--primary-gold)] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <a href='https://en.wikipedia.org/wiki/Ancient_Rome#Religion' target='blank'>
          <div className='flex flex-col justify-center m-8 hover:scale-105 transition-transform duration-300 bg-black/50 p-6 rounded-3xl'>
            <p className='font-bold'>ROMAN RELIGION</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Archaic Roman religion, was made up of complex interrelations between gods and humans.</h1>
            <p>
              Unlike in Greek mythology, the gods were not personified, 
              but were vaguely defined sacred spirits called numina. 
              Romans also believed that every person, place or thing had its own genius, or divine soul. 
              During the Roman Republic, Roman religion was organised under a strict system of priestly offices, 
              which were held by men of senatorial rank. 
              The College of Pontifices was uppermost body in this hierarchy, 
              and its chief priest, the Pontifex Maximus, was the head of the state religion.          
            </p>
          </div>
        </a>
        <img className='h-[500px] p-4 mx-auto my-4 rounded-[20%]' src={religion} alt='/' />
      </div>
    </div>
  )
}

export default RomeReligion