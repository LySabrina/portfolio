import Project from "./Project";
import projects  from "../../data/projects";
function Projects(){
    return(
        <section id="projects" className="section">
            <h1>Projects</h1>
            
            <div className="projects-list">
            {
                projects.map((project, index)=>(
                    
                    <Project {...project}
                    key={index}
                    />
                      
                ))
            }
            
            </div>
           
        </section>
    )
}
export default Projects;