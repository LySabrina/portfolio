import GitHubIcon from "../../assets/images/github.svg?react";
import LinkedinIcon from "../../assets/images/linkedin.svg?react";
import GmailIcon from "../../assets/images/gmail.svg?react";

function Contacts(){
    const themeStyle = document.body.className; 
    return (
        <section className="section section__header" id="contacts">
            <h1>Contact Me</h1>
             <ul className="contacts">
                <li className="contact">
                    <a href="mailto:lysabrinak@gmail.com" target="__blank">
                        <GmailIcon className="svg-icon svg-icon--bigger"/>                        
                    </a>
                </li>

                <li  className="contact">
                    <a href="https://www.linkedin.com/in/sabrina-ly" target="__blank">
                        <LinkedinIcon className="svg-icon svg-icon--bigger"/>
                    </a>
                </li>
                
                <li  className="contact">
                    <a href="https://github.com/LySabrina" target="__blank">
                      <GitHubIcon 
                      fill ={themeStyle === "light-theme" ? "black" : "white"}
                      className="svg-icon svg-icon--bigger"/>
                    </a>
                </li>
             </ul>

        </section>
    )
}
export default Contacts;