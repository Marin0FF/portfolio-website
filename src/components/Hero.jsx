import React from 'react'
import HALO from 'vanta/src/vanta.halo'
import HeroContent from './HeroContent'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

class HeroSection extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  onResize(effect) {
    if(window.innerWidth <= 768) {
      effect.setOptions({
        size: 1.45,
        xOffset: 0.3,
        yOffset: -0.4
      })
    }
      effect.setOptions({
        minHeight: window.innerHeight,
        minWidth: window.innerWidth,
      })
      effect.resize();
  }
  componentDidMount() {
    this.vantaEffect = HALO({
      el: this.vantaRef.current,
      forceAnimate: true,
      baseColor: 0x22,
      amplitudeFactor: 1.10,
      minHeight: window.innerHeight,
      minWidth: window.innerWidth,
      xOffset: 0.2,
      size: 1.2,
    });
    this.onResize(this.vantaEffect);
    window.addEventListener('resize', () => {
      this.onResize(this.vantaEffect);
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }

  render() {
    return <div ref={this.vantaRef} id="home">
      <HeroContent
      greeting="Hello, I'm Hristo!"
      shortBio="I'm a front-end developer searching for the next step in my career."
      />
    </div>
  }
}

export default HeroSection;