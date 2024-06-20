import React from 'react'
import CardContainer from './CardContainer'

const About = () => {
  return (
    <div className='w-full bg-[var(--primary-red)] text-[var(--primary-gold)] text-center'>
        <div className='max-w-[1240px] mx-auto px-4 py-16'>
            <div>
                <h1 className='py-4'>The dynasties of the Roman Empire</h1>
                <p className='py-4 text-xl'>
                    Sicelides Musae, paulo maiora canamus.
                    non omnis arbusta iuvant humilesque myricae
                    si canimus silvas, silvae sint consule dignae.
                </p>
                <p className='pt-2 pb-12 text-xl'>
                - Virgil
                </p>
                {/* Card Container */}
                <CardContainer />
            </div>
        </div>
    </div>
  )
}

export default About