import React from 'react'
import Firstrow from './HomeComponents/Firstrow'
import SecondrowFeature from './HomeComponents/SecondrowFeature'
import Thirdrow from './HomeComponents/Thirdrow'
import Footer from './commoncomponents/Footer'

function About() {
  return (
    <div>
      <Firstrow/>
      <SecondrowFeature />
      <Thirdrow/>
      <Footer/>
    </div>
  )
}

export default About
