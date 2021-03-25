import React, { useState, useEffect, useRef } from 'react'
import HALO from 'vanta/src/vanta.halo'
import HeroContent from './HeroContent'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
 
const HeroSection = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      const effect = setVantaEffect(HALO({
        el: myRef.current,
        forceAnimate: true,
        baseColor: 0x22,
        amplitudeFactor: 1.10,
        minHeight: window.innerHeight,
        minWidth: window.innerWidth,
        xOffset: 0.2,
        size: 1.2,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef}>
    <HeroContent 
    greeting="Hello, I'm Hristo!" 
    shortBio="This is a plea to any potential employer to hire me, so that I can feed myself."
    />
  </div>
}

export default HeroSection;