import githubIcon from '../assets/images/GitHub_Invertocat_Black_Clearspace.svg';
import linkedinIcon from '../assets/images/InBug-Black.png';

const Footer = () => {
  return (
    
      <footer className="footer" id="contact">
        <div className="footer-content">
          <span className="footer-heading">Lets connect!</span>
          <h2>A developer with passion for sustainable development</h2>
          <p>Feel free to reach out to me for any inquiries or collaborations. I am always open to new opportunities and challenges.</p>
        </div>

        <div className="footer-contact">
          <a href="mailto:jonsson_markus@hotmail.com" className="contact-button">Contact Me</a>
          
        <div className="footer-socials">
          <a href="https://github.com/Crestedgaming" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="social-icon-github" />
          </a>

          <a href="https://www.linkedin.com/in/markus-jonsson-1a0b4b1b6/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon-linkedin" />
          </a>
        </div>
        

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Markus Jönsson. All rights reserved.</p>
          </div>
        </div>
      </footer>
        

      
      
    
  )
}

export default Footer