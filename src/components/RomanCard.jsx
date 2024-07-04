import React from 'react'
import rome26 from '../assets/rome26.png'

const RomanCard = () => {
  return (
    <div className="flex flex-col border text-left rounded-2xl border-[var(--primary-gold)] pt-12 px-8 col-span-1 lg:col-span-2 bg-gradient-to-tr from-[var(--dark-purple)] to-[var(--primary-purple)] hover:scale-105 transition-transform duration-300">
      <a href="https://en.wikipedia.org/wiki/Roman_Empire" target="blank">
        <div>
          <div className="flex items-center justify-center">
            <img
              src={rome26}
              alt="rome26"
              style={{ width: '240px', borderRadius: '30px' }}
            />
          </div>
          <h3 className="text-xl font-bold py-4">
            "Roman Empire (27 BC - AD 1453)"
          </h3>
          <p className="flex items-center lg:h-[80%] pb-12 lg:pb-0">
            "The Roman Empire is generally understood to mean the period and
            territory ruled by the Romans following Octavian's assumption of
            sole rule under the Principate in 27 BC, the post-Republican state
            of ancient Rome. It included territories in Europe, North Africa,
            and Western Asia and was ruled by emperors. The fall of the Western
            Roman Empire in 476 AD conventionally marks the end of classical
            antiquity and the beginning of the Middle Ages. The vexillum of the
            Roman Empire was a red banner with the letters SPQR (Senatus
            PopulusQue Romanus) in Gold surrounded by a gold wreath hung on a
            military standard topped by a Roman eagle or an image of the goddess
            Victoria made of silver or bronze."
          </p>
        </div>
      </a>
    </div>
  )
}

export default RomanCard
