import { IconFacebook, IconInstagram, IconLinkedIn, IconTwitter, IconYoutube } from "../../assets/images/svg";

const Footer = () => {
    return (
      <footer className='footer'>
          <div className="container">
            <div className="inner-wrapper">
                <div className="footer-navlinks">
                    <ul className="navlink-list">
                        <li className="navlink"><a href="/">Lorem</a></li>
                        <li className="navlink"><a href="/">Lorem</a></li>
                        <li className="navlink"><a href="/">Lorem</a></li>
                        <li className="navlink"><a href="/">Lorem</a></li>
                        <li className="navlink"><a href="/">Lorem</a></li>
                        <li className="navlink"><a href="/">Lorem</a></li>
                        <li className="navlink"><a href="/">Lorem</a></li>
                        <li className="navlink"><a href="/">Lorem</a></li>
                        <li className="navlink"><a href="/">Lorem</a></li>
                        <li className="navlink"><a href="/">Lorem</a></li>
                    </ul>
                </div>
                
                <div className="right-wrapper">
                    <div className="social-links">
                        <a href="/" alt="youtube"><IconYoutube/></a>
                        <a href="/" alt="twitter"><IconTwitter/></a>
                        <a href="/" alt="linkenIn"><IconLinkedIn/></a>
                        <a href="/" alt="facebook"><IconFacebook/></a>
                        <a href="/" alt="Instagram"><IconInstagram/></a>
                    </div>
                    <p className="copyrights">© 2022 Lorem ipsum dolor</p>
                </div>
            </div>
          </div>
      </footer>
    );
  }
  
  export default Footer;