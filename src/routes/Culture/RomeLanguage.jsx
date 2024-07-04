import React from 'react'
import language from '../../assets/language.jpg'

const RomeLanguage = () => {
  return (
    <div className='bg-gradient-to-tr from-[var(--dark-purple)] to-[var(--primary-purple)] text-[var(--primary-gold)] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='h-[500px] p-4 mx-auto my-4 rounded-[20%]' src={language} alt='/' />
        <a href='https://en.wikipedia.org/wiki/Ancient_Rome#Language' target='blank'>
          <div className='flex flex-col justify-center m-8 hover:scale-105 transition-transform duration-300 bg-black/50 p-6 rounded-3xl'>
            <p className='font-bold'>ROMAN LANGUAGE</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>The native language of the Romans was Latin.</h1>
            <p>
              The Latin is an Italic language the grammar of which relies little on word order, 
              conveying meaning through a system of affixes attached to word stems. 
              Its alphabet was based on the Etruscan alphabet, 
              which was in turn based on the Greek alphabet. 
              Although surviving Latin literature consists almost entirely of Classical Latin, 
              an artificial and highly stylised and polished literary language from the 1st century BC, 
              the spoken language of the Roman Empire was Vulgar Latin, 
              which significantly differed from Classical Latin in grammar and vocabulary, 
              and eventually in pronunciation. 
              Speakers of Latin could understand both until the 7th century when spoken Latin began 
              to diverge so much that 'Classical' or 'Good Latin' had to be learned as a second language.
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default RomeLanguage