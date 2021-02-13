import React from 'react';

import './styles/styledbuttons.css';

import ExternalLink from "../atoms/ExternalLink";
import InnerLink from "../atoms/InnerLink";

const StyledButtons = props => {
    const default_style = "btn btn-large hvr-outline-out text-center ";

    return (
        <div id="two--buttons" className="row justify-content-center">
            {props.buttons.map((btn, idx) => (
                <div key={idx} className={"col " + props.custom}>
                    {btn.href.includes('.') ?
                        <ExternalLink custom={default_style + btn.importance} {...btn}/>
                        :
                        <InnerLink custom={default_style + btn.importance} {...btn}/>
                    }
                </div>
            ))}
        </div>
    );
}


export default StyledButtons;