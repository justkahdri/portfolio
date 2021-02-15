import React from 'react';

// <a href='https://www.freepik.com/vectors/business'>Business vector created by freepik - www.freepik.com</a>

const Attributions = ({content}) => (
    <article id="attributions" className="row bg-dark">
        <div className="container py-2">
            {content.map(([caption, route], idx) => (
                <div key={idx} className="row justify-content-center">
                    <a href={route} rel="noreferrer" target="_blank" className="text-muted small">{caption}</a>
                </div>
                ))}
        </div>
    </article>
);

export default Attributions;