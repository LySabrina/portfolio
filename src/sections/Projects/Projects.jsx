import Project from "./Project";
import projects  from "../../data/projects";
function Projects(){
    return(
        <section>
            <h1>Projects</h1>

            <div>
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