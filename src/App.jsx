// import './App.css'
import Navbar from "./components/Navbar";
import Projects from "./sections/Projects/Projects";
import Contacts from "./sections/Contacts/Contacts";
import Hero from "./sections/Hero/Hero";
import "../style.css";
function App() {
  const hamburgerOpen = () => {
    const id = document.querySelector("#root");
    id.classList.toggle("hamburger-darken");
  };

  return (
    <>
      <Navbar hamburgerOpen={hamburgerOpen} />
      <Hero />
      <Projects />
      <Contacts />
      <footer>
        <p>Made by Sabrina Ly</p>
        <p>
          Icons by
          <a href="https://icons8.com/" target="__blank" className="anchor-link">
            {" "}
            Icon8{" "}
          </a>
          ,
          <a href="https://techicons.dev/" target="__blank" className="anchor-link">
            {" "}
            TechIcons{" "}
          </a>
          and
          <a href="fontawesome.com" target="__blank" className="anchor-link">
            {" "}
            FontAwesome{" "}
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
