import GitHubIcon from "../../assets/images/github.svg?react";
import LinkedinIcon from "../../assets/images/linkedin.svg?react";
import GmailIcon from "../../assets/images/gmail.svg?react";

function Contacts(){
    const themeStyle = document.body.className; // won't work
    return (
        <section className="section section__header" id="contacts">
            <h1>Contact Me</h1>
             <ul className="contacts">
                <li className="contact">
                    <a href="mailto:lysabrinak@gmail.com">
                        <GmailIcon className="svg-icon svg-icon--bigger"/>                        
                    </a>
                </li>

                <li  className="contact">
                    <a href="">
                        <LinkedinIcon className="svg-icon svg-icon--bigger"/>
                    </a>
                </li>
                
                <li  className="contact">
                    <a href="https://github.com/LySabrina">
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