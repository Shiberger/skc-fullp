import React from 'react'
import HeroAbout from './HeroAbout'
import HeroAbout2 from './HeroAbout2'
import GridAbout from './GridAbout'
import HeroAbout3 from './HeroAbout3'


import ContentAbout from './ContentAbout'
import CardAbout from './CardAbout'

import ScrollToTop from '@/components/ScollToTop'
import LastSection from './LastSection'



function page() {
  return (
    <div>
        <HeroAbout/>
        <HeroAbout2/>
        <GridAbout/>
        <HeroAbout3/>
        <LastSection/>
        <ScrollToTop/>
        


    </div>

  )
}

export default page