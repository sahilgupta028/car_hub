"use client";

import React from 'react'
import { CustomButton } from '.';

const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("discover");
    
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      };

  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking process.
        </p>

        <CustomButton title="Explore Cars" containerStyles="bg-primary-blue text-white rounded-full mt-10" handleClick={handleScroll}/> 
        </div>

        <div className="hero__image-container">
        <div className="-mb-44 hero__image">
          <img src="/hero.png" className="object-contain" />
        </div>

        <div className="lg:-mb-60 hero__image-overlay" />
        </div>
    </div>
  )
}

export default Hero