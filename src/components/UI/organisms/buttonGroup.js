import React from 'react';

import './styles/buttongroup.css';
import {Link} from "react-router-dom";

const ButtonGroup = ({buttons}) => {
    const IconValidation = ({icon, title}) => (
        icon ?
            <React.Fragment>
                <span className="btn-gradient">
                    <i className={icon}/>
                </span>
                <span className="btn-text">{title}</span>
            </React.Fragment>
            :
            <React.Fragment>{title}</React.Fragment>
    )

    return (
        <section id="button-group" className="container pb-5">
            <div className="row justify-content-between">
                {buttons.map((b, idx) => (
                    <div key={idx} className="my-2 my-md-0 col-md">
                        {b.href.includes('.') ?
                            <a className={"btn-block " + b.btn} href={b.href} target="_blank" rel="noreferrer">
                                <IconValidation icon={b.icon} title={b.title} />
                            </a>
                            :
                            <Link className={"btn-block " + b.btn} to={b.href}>
                                <IconValidation icon={b.icon} title={b.title} />
                            </Link>
                        }

                    </div>
                ))}
            </div>
        </section>
    );
}
export default ButtonGroup;