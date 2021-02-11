import React from 'react';

import './styles/footer.css';

const Footer = () => {
    return (
        <footer id="footer" className="bg-dark">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 py-2 col-lg text-center">
                        <a href='https://cafecito.app/justkahdri' rel='noopener noreferrer' target='_blank'><img
                            srcSet='https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x'
                            src='https://cdn.cafecito.app/imgs/buttons/button_1.png'
                            alt='Invitame un café en cafecito.app'/></a>
                    </div>
                    <div className="col-md-4 py-2 col-lg text-center">
                        <h6 className="bold text-light mb-0">
                            JustKahdri © {new Date().getFullYear() || 2021}
                        </h6>
                    </div>

                    <div className="col-md-4 py-2 col-lg text-center">
                        <a href="#" className="to-top">Back to top</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;