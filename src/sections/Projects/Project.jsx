import { getImageURL } from "../../utils/image-util";
import ExternalIcon from "../../assets/images/external.svg?react";
import CodeIcon from "../../assets/images/code.svg?react";

function Project({ title, description, img, tags, links }) {
  return (
    <div className="project">
      <section className="project__img-container">
        <img src={getImageURL(img)} alt={`${title} Screenshot`} />
      </section>
      <section className="project_details">
        <h1 className="project__title">{title}</h1>
        <p className="project__description">{description}</p>
        <ul className="project__tags">
          {tags.map((tag, index) => {
            const keys = Object.keys(tag);
            const url = getImageURL(tag[keys[0]]);

            return (
              <li key={index} className="project__tag">
                {keys[0]}
                <span className="project__tag-img-container">
                  <img src={url} alt={keys} />
                </span>
              </li>
            );
          })}
        </ul>

        <section className="project__btns">
          {links.demo && (
            <a
              href={links.demo ? links.demo : ""}
              target="_blank"
              className="anchor-link"
            >
              <button className="project__btn project__btn--live">
                Live Demo
                <ExternalIcon className="svg-icon" />
              </button>
            </a>
          ) }

          <a href={links.github} target="_blank" className="anchor-link">
            <button className="project__btn project__btn--source">
              Source Code
              <CodeIcon className="svg-icon" />
            </button>
          </a>
        </section>
      </section>
    </div>
  );
}
export default Project;
