

import bannerImage from '../assets/images/banner.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
      <img src={bannerImage} alt="Banner" />
      <p>I'm a frontend development student with a background in environmental science. I'm particularly interested in combining technology, usability and sustainability to create meaningful digital experiences.</p>
    </div>
  )
}

export default About