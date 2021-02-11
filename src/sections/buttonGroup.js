import React from 'react';

import './styles/buttongroup.css';

const ButtonGroup = ({buttons}) => {

    return (
        <section id="button-group" className="container py-5">
            <div className="row justify-content-between">
                {buttons.map(b => (
                    // <div className="col">
                    //     <button type="button" className="btn hvr-outline-out btn-secondary btn-block">{b.title}</button>
                    // </div>
                    <div className="my-2 my-md-0 col-md">
                        <a className={"btn-block " + b.btn} href={b.href} target="_blank" rel="noreferrer">
                            <span className="btn-gradient">
                                <i className={b.icon}/>
                            </span>
                            <span className="btn-text">{b.title}</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default ButtonGroup;