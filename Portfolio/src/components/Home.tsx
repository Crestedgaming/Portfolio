

import bannerImage from '../assets/images/banner.jpg'

const Home = () => {
  return (
    <div className='home' id='home'>
      <img src={bannerImage} alt="Banner" />
      <p id="about">I'm a frontend development student with a background in environmental science. I'm particularly interested in combining technology, usability and sustainability to create meaningful digital experiences.</p>
    </div>
  )
}

export default Home