import React from 'react';
import Header from "../components/Header";

const ProjectDetails = (props) => {
    const details = props.location.state;
    const context = require.context('../assets/projects', true);

    return (
        <React.Fragment>
            <Header currentPath={props.location.pathname} />
            <main id="project--details" role="main">
                <section className="container">
                    <article className="row text-center">
                        <h1 className="col">{details.title}</h1>
                    </article>

                    <article className="row">
                        <figure className="col-6">
                            <img src={context(details.thumbnail).default} className="img-fluid" alt="Project Cover" />
                        </figure>
                        <div className="col-6 text-right">
                            <h2>What is this?</h2>
                            <p className="text-muted">{details.content.date}</p>
                            {details.content.introduction.map((paragraph, idx) =>
                                <p key={idx} className="text-justify">{paragraph}</p>
                            )}
                            <div className="d-flex">
                                <button className="btn btn-block btn-outline-primary">See code</button>
                                <button className="btn btn-block btn-primary mt-0">Go to Demo</button>
                            </div>
                        </div>
                    </article>

                    <article className="row">
                        <div className="col-8">
                            <h2>Why does it matter?</h2>
                            {Object.entries(details.content.learned).map(([key, value]) =>
                                key.charAt(0) === "p" ? (
                                <p>{value}</p>
                                ) :
                                    <ul>
                                        {value.map(i => <li>{i}</li>)}
                                    </ul>
                            )}
                        </div>
                    </article>

                    <article className="row">
                        <div className="col text-right">
                            <h2>Some Previews</h2>
                            {details.content.screenshots.map((source, idx) => (
                                <img key={idx} src={context(source).default}
                                     alt={"Screenshot " + idx} className="img-fluid" />
                            ))}
                        </div>
                    </article>

                    <article className="row justify-content-between">
                        <div className="col-12 text-center">
                            <h2>Want to see more?</h2>
                        </div>
                        <div className="col">
                            <button className="btn btn-block btn-outline-primary">See code</button>
                        </div>
                        <div className="col-5">
                            <button className="btn btn-block btn-primary">Go to Demo</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-block btn-outline-secondary">Other projects</button>
                        </div>
                    </article>
                </section>
            </main>
        </React.Fragment>
    );
}

export default ProjectDetails;