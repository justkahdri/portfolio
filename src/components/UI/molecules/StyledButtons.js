import React from 'react';

import './styles/styledbuttons.css';

import ExternalLink from "../atoms/ExternalLink";
import InnerLink from "../atoms/InnerLink";

const StyledButtons = props => {
    const default_style = "btn btn-large hvr-outline-out text-center ";

    return (
        <div id="two--buttons" className="row justify-content-center">
            {props.buttons.map((btn, idx) => (
                <div key={idx} className={"col-12 mb-2 mb-md-0 col-md " + props.custom}>
                    {btn.href.includes('.') ?
                        <ExternalLink {...btn} custom={default_style + btn.custom} />
                        :
                        <InnerLink {...btn} custom={default_style + btn.custom} />
                    }
                </div>
            ))}
        </div>
    );
}


export default StyledButtons;