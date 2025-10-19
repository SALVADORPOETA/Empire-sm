import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import RomeCulture from './RomeCulture'
// import RomeLanguage from './RomeLanguage'
// import RomeReligion from './RomeReligion'
// import RomeMorality from './RomeMorality'
// import RomeArts from './RomeArts'
import Subscribe from '../../components/Subscribe'
import Culture from './Culture'

const CulturePage = () => {
  return (
    <>
      <Navbar />
      <RomeCulture />
      <Culture />
      <Subscribe />
      <Footer />
    </>
  )
}

export default CulturePage
