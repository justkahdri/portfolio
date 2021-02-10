import React from 'react';

import './styles/buttongroup.css';

const ButtonGroup = () => {
    const buttons = [
        {
            title: "Github",
            icon: "fa-github",
            btn: "btn-github"
        },
        {
            title: "LinkedIn",
            icon: "fa-linkedin",
            btn: "btn-linkedin"
        },
        {
            title: "Blog",
            icon: "fa-github",
            btn: "btn-green"
        }
    ];

    return (
        <section id="button-group" className="container py-5">
            <div className="row justify-content-between">
                {buttons.map(b => (
                    // <div className="col">
                    //     <button type="button" className="btn hvr-outline-out btn-secondary btn-block">{b.title}</button>
                    // </div>
                    <div className="my-1 col-md">
                        <button className={"btn-block " + b.btn}>
                            <span className="btn-gradient">
                                <i className={"fa " + b.icon}/>
                            </span>
                            <span className="btn-text">{b.title}</span>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default ButtonGroup;