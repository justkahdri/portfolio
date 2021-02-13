import React from 'react';

const Skill = (props) => (
    <div className="col-6 col-md-4 col-lg-2">
        <div className="badge container">
            <img width="140" height="140"
                 src={props.ctx(props.path).default} alt={props.name + " Badge"} />
            <h5>{props.name}</h5>
        </div>
    </div>
);

export default Skill;