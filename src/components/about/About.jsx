import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='About Us' subtitle='Read carefully.' />

            <p>Welcome to HomeSpace, your premier destination for all your real estate needs. Whether you're looking to buy your dream home, sell your property, or invest in the real estate market, we are here to assist you every step of the way.</p>
            <p>At HomeSpace, we pride ourselves on our commitment to excellence and customer satisfaction. 
</p>
            <button className='btn2'>Read More</button>
          </div>
          <div className='right row'>
            <img src='./immio.webp' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
