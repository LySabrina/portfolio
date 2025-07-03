import { useState, useRef } from "react";
import MoonIcon from "../assets/images/moon.svg?react";
import SunIcon from "../assets/images/sun.svg?react";
import BlogIcon from "../assets/images/blog.svg?react";
import ContactIcon from "../assets/images/contact.svg?react";
import ProjectIcon from "../assets/images/laptop_code.svg?react";
import { CSSTransition } from "react-transition-group";

/**
 * Navbar component.
 * Related to all navigation of the website and theme changer 
 * @returns Navbar
 */
function Navbar() {
  const body = document.body;
  const ulRef = useRef(null);
  const [currentLink, setCurrentLink] = useState("Projects");
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



  return (
    <nav className="nav">
      {open ? (
        <CSSTransition
        nodeRef={ulRef}  
        in={open}
          timeout={{enter:0, exit:200}}
          unmountOnExit
          onEnter={()=>{setOpen(true)}}
          onExit={()=>setOpen(false)}
          className ="nav-links"
        >
          <ul className={`nav-links`} ref={ulRef}>
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
              <a href="#">
                <BlogIcon className="svg-icon" />
                Blog
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
          {currentLink === "Projects" ? (
            <ProjectIcon className="svg-icon" />
          ) : (
            <ContactIcon className="svg-icon" />
          )}
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
