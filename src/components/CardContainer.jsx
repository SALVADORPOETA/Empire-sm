import React, { useState } from 'react'
import AboutCard from './AboutCard'
import RomanCard from './RomanCard'
import { dataDynasties } from '../data/DataDynasties'

const CardContainer = () => {
  const [cards] = useState(dataDynasties)

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {/* Card */}
      <RomanCard />
      {cards.map((item, index) => (
        <AboutCard
          key={item.id}
          link={item.link}
          image={item.image}
          heading={item.heading}
          text={item.text}
        />
      ))}
    </div>
  )
}

export default CardContainer
