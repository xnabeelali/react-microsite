import { Logo } from "../../assets/images/svg";

const NavBar = () => {
  return (
      <nav className="topNav">
          <div className="inner-wrapper">
            <div className="logo">
              <a href="/" alt="site-logo"><Logo /></a>
            </div>
            <div className="hamburger">
              
            </div>
          </div>
      </nav>
  );
}

export default NavBar;
