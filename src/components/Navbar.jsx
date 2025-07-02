import { useEffect, useState } from "react";
import HamburgerIcon from "../assets/images/hamburger.svg?react";
import MoonIcon from "../assets/images/moon.svg?react";
import SunIcon from "../assets/images/sun.svg?react";
import BlogIcon from "../assets/images/blog.svg?react";
import ContactIcon from "../assets/images/contact.svg?react";
import ProjectIcon from "../assets/images/laptop_code.svg?react";
import { getImageURL } from "../utils/image-util";
function Navbar({ hamburgerOpen }) {
  const body = document.body;
  const [currentLink, setCurrentLink] = useState("Projects");
  const [currentLinkIcon, setCurrentLinkIcon] = useState("laptop_code.svg");
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const sectionHeaders = document.querySelectorAll(".section");

  window.addEventListener("load", () => {
    for (let i = 0; i < sectionHeaders.length; i++) {
      const title = sectionHeaders[i];
      isInView(title);
    }
  });
  window.addEventListener("scroll", () => {
    for (let i = 0; i < sectionHeaders.length; i++) {
      const title = sectionHeaders[i];
      isInView(title);
    }
  });

  function isInView(element) {
    const windowHeight = window.innerHeight;
    const coords = element.getBoundingClientRect();
    if (coords.top >= 0 && coords.top < windowHeight) {
      const header = element.querySelector("h1");
      setCurrentLink(header.textContent);
    }
  }

  const changeTheme = (e) => {
    const themeStyle = e.currentTarget.value; //currentTarget instead of target because svg will also activate this handler

    if (themeStyle === "light") {
      setTheme("dark");
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
    } else {
      setTheme("light");
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
    }
  };

  const toggleNav = () => {
    setOpen((prevState) => !prevState);
  };

  useEffect(() => {
    switch (currentLink) {
      case "Projects":
        setCurrentLinkIcon(getImageURL("laptop_code.svg"));
        break;

      case "Contact Me":
        setCurrentLinkIcon(getImageURL("contact.svg"));
      default:
        break;
    }
  }, [currentLink]);
  const iconType = (linkName) => {};

  /**
   *
   * IDEA: have the navigation bar change name depending where you are on the screen
   *
   *
   */
  return (
    <nav className="nav">
      {open ? (
        <CSSTransition
          in={open}
          timeout={
            {
              enter:0,
              exit:2000
            }
            
          }
          unmountOnExit
        >
          <ul className={`nav-links`}>
            <li className="nav-link">
              <a href="#projects">
                <ProjectIcon className="svg-icon" />
                Projects
              </a>
            </li>
            <li className="nav-link">
              <a href="#contacts">
                <ContactIcon className="svg-icon" />
                Contact Me
              </a>
            </li>
            <li className="nav-link">
              <a href="">
                <BlogIcon className="svg-icon" />
                [Work in Progress]
              </a>
            </li>
            <li>
              <button onClick={toggleNav}>Close</button>
            </li>
          </ul>
        </CSSTransition>
      ) : (
        <button onClick={toggleNav} className="nav__btn">
          <img src={currentLinkIcon} alt="Link" className="svg-icon" />
          {currentLink}
        </button>
      )}

      <button id="theme-switcher" value={theme} onClick={changeTheme}>
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </button>
    </nav>
  );
}
export default Navbar;
