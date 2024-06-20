import React from 'react'

const AboutCard = (props) => {
  return (
    <div className='flex flex-col border text-left rounded-2xl border-[var(--primary-gold)] py-12 px-8 hover:scale-105 transition-transform duration-300'>
      <a href={props.link} target='blank'>
        <div>
          <div className='flex items-center justify-center'>
            {props.image}
          </div>
          <h3 className='text-xl font-bold py-4'>{props.heading}</h3>
          <p>
            {props.text}
          </p>
        </div>   
      </a>
    </div>
  )
}

export default AboutCard