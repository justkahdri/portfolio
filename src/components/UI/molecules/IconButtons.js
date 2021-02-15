import React from 'react';

import './styles/iconbuttons.css';

import Icon from '../atoms/Icon';
import ExternalLink from "../atoms/ExternalLink";
import InnerLink from "../atoms/InnerLink";

const IconButtons = ({buttons}) => (
    <section id="button-group" className="container mb-5 py-2">
        <div className="row justify-content-between">
            {buttons.map((btn, idx) => (
                <div key={idx} className="my-2 my-md-0 col-md">
                    {btn.href.includes('.') ?
                        <ExternalLink {...btn}>
                            {btn.icon && <Icon {...btn} />}
                        </ExternalLink>
                        :
                        <InnerLink {...btn}>
                            {btn.icon && <Icon {...btn} />}
                        </InnerLink>
                    }

                </div>
            ))}
        </div>
    </section>
);

export default IconButtons;