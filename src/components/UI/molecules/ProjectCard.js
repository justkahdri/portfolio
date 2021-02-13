import React from 'react';
import { Link } from 'react-router-dom';

import './styles/projectcard.css';

const ProjectCard = (props) => {
    const default_pill = "badge px-3 rounded-pill font-weight-normal mr-1 mt-1 ";
    const data = props.data;

    return (
        <article className="col-xl-4 col-md-6 mb-4">
            <div id="project--card" className="bg-white shadow-sm">
                <Link to={`projects/${props.id}`}>
                    <img id="thumbnail" src={props.ctx(data.thumbnail).default}
                         alt={data.title + " Thumbnail"} className="img-fluid" />
                </Link>
                <div id="card--content" className="p-4">
                    <h5><Link to={`projects/${props.id}`} className="text-dark">{data.title}</Link></h5>
                    <p className="small text-muted text-justify mb-4">{data.description}</p>
                    <div id="card--tag" className="container pill bg-light py-2">
                        <p className="row small px-3 mb-0"><i className="fas fa-tag"/><span
                            className="ml-2 font-weight-bold">{data.category}</span></p>

                        <div className="row px-3">
                            {Object.entries(data.technologies).map(([title, style], idx) => (
                                <div key={idx} className={default_pill + style}>{title}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;