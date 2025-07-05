'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../hero.css'; // Make sure this is placed in /app or /public or /styles if used globally
import { slides } from '@/components/data/slide';

const OpticalCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={3500}
        transitionTime={800}
        swipeable
        emulateTouch
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.image} alt={slide.alt || `Slide ${index + 1}`} />
            {slide.caption && <p className="legend">{slide.caption}</p>}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default OpticalCarousel;
