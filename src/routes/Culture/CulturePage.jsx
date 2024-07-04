import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import RomeCulture from './RomeCulture'
import RomeLanguage from './RomeLanguage'
import RomeReligion from './RomeReligion'
import RomeMorality from './RomeMorality'
import RomeArts from './RomeArts'
import Subscribe from '../../components/Subscribe'

const CulturePage = () => {
  return (
    <>
      <Navbar />
      <RomeCulture />
      <RomeLanguage />
      <RomeReligion />
      <RomeMorality />
      <RomeArts />
      <Subscribe />
      <Footer />
    </>
  )
}

export default CulturePage
