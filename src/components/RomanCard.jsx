import React from 'react'

const RomanCard = (props) => {
  return (
    <div className='flex flex-col border text-left rounded-2xl border-[var(--primary-gold)] pt-12 px-8 col-span-1 lg:col-span-3 bg-gradient-to-tr from-[var(--dark-purple)] to-[var(--primary-purple)] hover:scale-105 transition-transform duration-300'>
      <a href={props.link} target='blank'>
        <div>
          <div className='flex items-center justify-center'>
            {props.image}
          </div>
          <h3 className='text-xl font-bold py-4'>{props.heading}</h3>
          <p className='flex items-center lg:h-[80%] pb-12 lg:pb-0'>
            {props.text}
          </p>
        </div>   
      </a>
    </div>
  )
}

export default RomanCard