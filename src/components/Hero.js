import React, { useState, useEffect, useRef } from 'react';
import HALO from 'vanta/dist/vanta.halo.min';
import HeroContent from './HeroContent';
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
 
const HeroSection = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(HALO({
        el: myRef.current,
        forceAnimate: true,
        minHeight: window.innerHeight,
        minWidth: window.innerWidth,
        xOffset: 0.2,
        size: 1.40
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef}>
    <HeroContent 
    greeting="Hello, I'm Hristo Marinov!" 
    shortBio="Some bullshit about me, being a web developer and UI designer."
    />
  </div>
}

export default HeroSection;