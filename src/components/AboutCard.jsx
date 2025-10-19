import React from 'react'

const AboutCard = (props) => {
  return (
    <div className="flex flex-col border text-left rounded-2xl border-[var(--primary-gold)] py-12 px-8 hover:scale-105 transition-transform duration-300">
      <a href={props.link} target="blank">
        <div>
          <div className="flex items-center justify-center">
            <img
              src={props.image}
              alt={props.section}
              className="w-[120px] rounded-[30px]"
            />
          </div>
          <h3 className="text-xl font-bold py-4">{props.section}</h3>
          <p>{props.p1}</p>
        </div>
      </a>
    </div>
  )
}

export default AboutCard
