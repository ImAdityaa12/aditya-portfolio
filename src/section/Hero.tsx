"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '@/components/Button'
import Typewriter from "typewriter-effect"

const Hero = () => {
  return (
    <div className='hero'>
        <motion.h1 
        className='hero-title'
        initial={{opacity: 0, y:5}}
        animate={{opacity:1, y:0}}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
        >
            Hi my name is
        </motion.h1>
            <motion.h2 className="hero-title-large"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.75,
            }}
            >
                Aditya Raj Gupta
            </motion.h2>
            <motion.h3 className="hero-title-large hero-title-sub"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 1.05,
            }}
            >
              <Typewriter
                options={{
                  strings: ['I create awesome stuff for the web!'],
                  autoStart: true,
                  loop: true,
                }}
              />
               </motion.h3>
            <motion.p 
            className='hero-text'
            initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
            > I craft amazing web experiences! From beautiful designs to making sure everything works smoothly, I love crafting websites that people enjoy using. Contact me at <Link href="https://www.linkedin.com/in/aditya-raj-gupta-089393215/" target="_blank" className="link">
          Linkedin
        </Link></motion.p>
        <motion.div className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
        >
            <Button text='Download Resume' link='https://aditya-portfolio-nextjs.netlify.app/resume.pdf'/>
            
        </motion.div>
    </div>
  )
}

export default Hero