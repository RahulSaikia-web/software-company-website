import React from 'react'
import HeroSection from '../components/HeroSection'
import Company from './Company'
import Pricing from './Pricing'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <HeroSection />
      <Company />
      <Pricing />
      <Footer />
    </>
  )
}

export default Home
