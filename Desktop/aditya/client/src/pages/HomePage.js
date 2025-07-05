'use client';
import About from '@/components/home/about/About';
import Card from '@/components/home/Cards/Cards';
import Footer from '@/components/home/footer/Footer';
import Hero from '@/components/home/hero/Hero'
import WearCard from '@/components/home/wear_card/WearCard';

import React from 'react'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Card/>
        <WearCard/>
        <About/>
        <Footer/>
    </div>
  )
}

export default HomePage