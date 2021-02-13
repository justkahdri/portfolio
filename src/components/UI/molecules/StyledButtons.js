import React from 'react';
import {Link} from "react-router-dom";

import './styles/styledbuttons.css';

const StyledButtons = props => {
    const default_style = "btn btn-large hvr-outline-out btn-block ";
    return (
        <div id="two--buttons" className="row justify-content-center">
            {props.buttons.map((btn, idx) => (
                <div key={idx} className={"col " + props.custom}>
                    {btn.to_path.includes('.') ?
                        <a href={btn.to_path} className="no-underline" target="_blank" rel="noopener noreferrer">
                            <button className={default_style + btn.importance}>{btn.name}</button>
                        </a>
                        :
                        <Link to={btn.to_path} className="no-underline">
                            <button className={default_style + btn.importance}>{btn.name}</button>
                        </Link>
                    }
                </div>
            ))}
        </div>
    );
}


export default StyledButtons;