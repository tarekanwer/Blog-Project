import React from 'react';
import classes from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image src = "/images/img.jpg" alt = "An image showing max" width = {300} height = {300} />
        </div>
        <h1>Hi, I'm Tarek</h1>
        <p>
            I blog about web development - especially frontend frameworks like react 
        </p>
    </section>
  )
}

export default Hero