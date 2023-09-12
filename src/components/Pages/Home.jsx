import React from 'react'
import SectionOne from '../BodyItems/SectionOne'
import SectionTwo from '../BodyItems/SectionTwo'
import SectionThree from '../BodyItems/SectionThree'
import SectionFour from '../BodyItems/SectionFour'
import SectionFive from '../BodyItems/SectionFive'
import SectionSix from '../BodyItems/SectionSix'




const Home = () => {
  return (
    <div className='main-body'>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree  />
      
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      
    </div>
  )
}

export default Home
