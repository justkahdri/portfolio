import React from 'react';

const SkillsContainer = () => {
    const skillsList = {
        1: {undefined},
        2: {undefined},
        3: {undefined},
        4: {undefined},
        5: {undefined},
    }
    return (
        <div id="skills" className="container text-center">
            <div className="row">
                {Object.entries(skillsList).map(() => (
                    <div className="col-6 col-md-4 col-lg-2">
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
                             xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                             preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777"></rect>
                            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                        </svg>

                        <h2>Heading</h2>
                    </div>
                ))}
            </div>
            <hr className="featurette-divider"/>
        </div>



                    );
}
export default SkillsContainer;