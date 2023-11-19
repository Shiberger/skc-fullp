import React from 'react'
import HeroAbout from './HeroAbout'
import HeroAbout2 from './HeroAbout2'
import ContentAbout from './ContentAbout'
import HeroAbout3 from './HeroAbout3'
import GridAbout from './GridAbout'
import CardAbout from './CardAbout'
import ScrollToTop from '@/components/ScollToTop'


function page() {
  return (
    <div>
        <HeroAbout/>
        <HeroAbout3/>
        <GridAbout/>
        {/* <CardAbout/> */}
        <HeroAbout2/>
        <CardAbout/>
        <ScrollToTop/>
        


    </div>

  )
}

export default page