import React from 'react'
import './css/Company.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
function Company() {
  return (
    <div id='company' className='company'>
      <motion.div
      variants={fadeIn("right",0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.7}}
      className="company-left"><h1>Loved by entire Marketing Teams</h1>
      <p>We ensure that our system can work well with the marketing team </p>
      </motion.div>
      <motion.div
      variants={fadeIn("left",0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.7}}
      className="company-right"><p className="right-txt">We canot say enough good things about our Company and their exceptional services. From the moment we reached out to them. we weremet with professionaism, experties, and a genuiine desire to help my business succeed.</p></motion.div>
    </div>
  )
}

export default Company
