function Project({title, description, img, tags, links}){
    return(
        <div className="project">
            <section>
                <img src="" alt="" />
            </section>
            <section className="project_details">
                <h1 className="project__title">{title}</h1>
                <p className="project__description">{description}</p>
                <ul className="project__tags">
                    {
                        tags.map((tag,index)=>(
                            <li key={index} className="project__tag">
                                {tag}
                            </li>
                            )
                        )
                    }
                </ul>
                <section className="project__btns">
                    <button className="project_btn project_btn--live">
                        <a href={links.demo ? links.demo : ""}>Live Demo</a>
                        </button>
                    <button>
                        <a href={links.github} target="_blank">Source Code</a>
                    </button>
                </section>
            </section>
        </div>
    )
}
export default Project;