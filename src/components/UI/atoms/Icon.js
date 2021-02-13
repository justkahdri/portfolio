import React from 'react';

const Icon = ({icon, title}) => (
    <React.Fragment>
                <span className="btn-gradient">
                    <i className={icon}/>
                </span>
        <span className="btn-text">{title}</span>
    </React.Fragment>
);

export default Icon;