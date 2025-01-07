import React from 'react'
import './css/Pricing.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
function Pricing() {
  return (
    <div id='pricing' className='pricing-body'>
      <div className="main-pricing-box">
        <motion.div
        variants={fadeIn("left",0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        className="main-txt"><h1>Save time & Money <br /> on --Company Name-- </h1><p>Saving,visibility, and infrasrtucture guardrails. <br />One automated platform.</p></motion.div>
        <div className="pricing-card-div">
          {/* First Box  Start */}
            <div className="pricing-card">
                <div className="pricing-title"><h1> <span>$</span> 00 <span>.00/ month</span></h1></div>
                <div className="pricing-items">
                    <p>Pick a product or all products plan.</p>
                    <ol>
                        <li>Facebook Marketing.</li>
                        <li>Tik Tok Marketing</li>
                        <li>YouTube Marketing.</li>
                        <li>Embed instagram feed.</li>
                        <li>Create link in bio page.</li>
                    </ol>
                </div>
                <div className="pricing-btn">
                    <button>Get Start for Free</button>
                </div>
                <div className="end-txt">
                <p>All pro features including 7-days free trial.</p>
                </div>
            </div>
            {/* First Box end  */}
            {/* Second Box Start  */}
            <div className="pricing-card">
                <div className="pricing-title"><h1> <span>$</span> 79 <span>.00/ month</span></h1></div>
                <div className="pricing-items">
                    <p>Pick a product or all products plan.</p>
                    <ol>
                        <li>Facebook Marketing.</li>
                        <li>Tik Tok Marketing</li>
                        <li>YouTube Marketing.</li>
                        <li>Embed instagram feed.</li>
                        <li>Create link in bio page.</li>
                        <li>landingpage Marketing.</li>
                        <li>5 more...</li>
                    </ol>
                </div>
                <div className="pricing-btn">
                    <button>Buy This  Pack</button>
                </div>
                {/* <div className="end-txt">
                <p>All pro features including 7-days free trial.</p>
                </div> */}
            </div> 
            {/* Second box end  */}
            {/* Third Box start  */}
            <div className="pricing-card">
                <div className="pricing-title"><h1> <span>$</span> 99 <span>.00/ month</span></h1></div>
                <div className="pricing-items">
                    <p>Pick a product or all products plan.</p>
                    <ol>
                        <li>Facebook Marketing.</li>
                        <li>Tik Tok Marketing</li>
                        <li>YouTube Marketing.</li>
                        <li>Embed instagram feed.</li>
                        <li>Create link in bio page.</li>
                        <li>Display Tik Tok Videos</li>
                        <li> 10 more...</li>
                    </ol>
                </div>
                <div className="pricing-btn">
                    <button>Buy This Pack</button>
                </div>
                {/* <div className="end-txt">
                <p>All pro features including 7-days free trial.</p>
                </div> */}
            </div>
            {/* Third box end  */}
        </div>
      </div>
    </div>
  )
}

export default Pricing
