import React from 'react';

const ExternalLink = props => (
    <a className={"btn-block " + props.custom} href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children || props.title}
    </a>
);

export default ExternalLink;