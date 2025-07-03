import ResumeIcon from "../../assets/images/resume.svg?react";
import Resume from "../../assets/pdf/Sabrina_Ly_Resume.pdf";
function Hero() {
  return (
    <section className="section section__header">
      <h1>Sabrina Ly</h1>
      <h3>
        I am an aspiring Software Engineer - interested in Full-Stack roles.
      </h3>
      <p>
        During my free time, you will find me working on projects and learning
        how to draw. Check out my <a href="#projects">Projects</a>
      </p>
      <p>Also interest in my Resume?</p>
      <div className="resume-container">
        &#128073;
        <a href={Resume} download>
          <button className="project__btn btn--resume">
            {" "}
            Download Resume
            <ResumeIcon className="svg-icon resume-icon" />
          </button>
        </a>
      </div>
    </section>
  );
}
export default Hero;
