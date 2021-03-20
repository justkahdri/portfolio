import React from 'react';
import {Link} from "react-router-dom";

const InnerLink = props => (
    <Link className={"btn-block " + props.custom} to={props.href}>
        {props.children || props.title}
    </Link>
);

export default InnerLink;