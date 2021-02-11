import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {
    const default_pill = "badge px-3 rounded-pill font-weight-normal mr-1 mt-1 ";
    const project_url = `projects/${props.id}`;

    return (
        <article className="col-xl-4 col-md-6 mb-4">
            <div className="bg-white shadow-sm">
                <Link to={project_url}>
                    <img src={props.ctx(props.thumbnail).default} alt={props.title + " Thumbnail"}
                         className="img-fluid" />
                </Link>
                <div className="p-4">
                    <h5><Link to={project_url} className="text-dark">{props.title}</Link></h5>
                    <p className="small text-muted mb-0">{props.description}</p>
                    <div className="container align-items-center justify-content-between pill bg-light py-2 mt-4">
                        <p className="row small px-3 mb-0"><i className={props.icon}/><span
                            className="ml-2 font-weight-bold">{props.category}</span></p>

                        <div className="row px-3">
                            {Object.entries(props.technologies).map(([title, style], idx) => (
                                <div key={idx} className={default_pill + style}>{title}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Project;