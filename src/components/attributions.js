import React from 'react';

const Attributions = ({content}) => (
    <article id="attributions" className="bg-dark">
        <div className="container py-2">
            {Object.entries(content).map(([caption, route], idx) => (
                <div key={idx} className="row justify-content-center">
                    <a href={route} rel="noreferrer" target="_blank" className="text-muted small">{caption}</a>
                </div>
                ))}
        </div>
    </article>
);

export default Attributions;