import React from 'react'
import morality from '../../assets/morality.jpg'

const RomeMorality = () => {
  return (
    <div className='bg-gradient-to-tr from-[var(--dark-purple)] to-[var(--primary-purple)] text-[var(--primary-gold)] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='h-[500px] p-4 mx-auto my-4 rounded-[20%]' src={morality} alt='/' />
        <a href="https://en.wikipedia.org/wiki/Ancient_Rome#Ethics_and_morality" target='blank'>
          <div className='flex flex-col justify-center m-8 hover:scale-105 transition-transform duration-300 bg-black/50 p-6 rounded-3xl'>
            <p className='font-bold'>ROMAN MORALITY</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Roman ethics and morality, differed greatly in several important ways with modern society.</h1>
            <p>
              Because ancient civilisations like Rome were under constant threat of attack from marauding tribes, 
              their culture was necessarily militaristic with martial skills being a prized attribute. 
              Whereas modern societies consider compassion a virtue, Roman society considered compassion a vice, 
              a moral defect. Indeed, one of the primary purposes of the gladiatorial games was to inoculate 
              Roman citizens from this weakness. 
              Romans instead prized virtues such as courage and conviction (virtus), 
              a sense of duty to one's people, moderation and avoiding excess (moderatio), 
              forgiveness and understanding (clementia), fairness (severitas), and loyalty (pietas).          
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default RomeMorality