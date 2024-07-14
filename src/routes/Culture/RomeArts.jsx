import React from 'react'
import arts from '../../assets/arts.jpg'

const RomeArts = () => {
  return (
    <div className="bg-[var(--primary-red)] text-[var(--primary-gold)] py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <a
          href="https://en.wikipedia.org/wiki/Ancient_Rome#Art,_music_and_literature"
          target="blank"
        >
          <div className="flex flex-col justify-center m-8 hover:scale-105 transition-transform duration-300 bg-black/50 p-6 rounded-3xl">
            <p className="font-bold">ROMAN ARTS</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Surviving frescoes used to adorn the walls and ceilings of country
              villas.
            </h1>
            <p>
              Roman literature includes mentions of paintings on wood, ivory,
              and other materials. Portrait sculpture used youthful and
              classical proportions, evolving later into a mixture of realism
              and idealism. Roman music was largely based on Greek music. Latin
              literature was, from its start, influenced heavily by Greek
              authors. Some of the earliest extant works are of historical epics
              telling the early military history of Rome. As the Republic
              expanded, authors began to produce poetry, comedy, history, and
              tragedy.
            </p>
          </div>
        </a>
        <img
          className="h-[300px] md:h-[400px] lg:h-[500px] p-4 mx-auto my-4 rounded-[20%]"
          src={arts}
          alt="/"
        />
      </div>
    </div>
  )
}

export default RomeArts
