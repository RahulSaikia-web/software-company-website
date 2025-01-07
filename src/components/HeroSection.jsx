import React from 'react'
import { Link } from 'react-scroll'
import './css/HeroSection.css'
import { motion } from 'framer-motion'
import {fadeIn} from '../variants'
function HeroSection() {
  return (
    <div id='HeroSection' className='hero-main-body'>
      <div className="hero-text-body">
        <motion.div 
        variants={fadeIn("right",0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        className="hero-head-txt"><h1>The Marketing Platform <br /> With Hight Conversion</h1></motion.div>
        <motion.div
        variants={fadeIn("left",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
         className="hero-mid-txt"><p>With the right marketing, increases your business income quick  and in the long term, <br /> we guarantee our service.</p></motion.div>
        <div className="hero-btn"><button><Link to="pricing" smooth={true}>Get Start for free</Link></button></div>
      </div>
    </div>
  )
}

export default HeroSection
