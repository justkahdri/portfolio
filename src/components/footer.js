import React from 'react';

import './styles/footer.css';

const Footer = () => {
    return (
        <footer id="footer" className="pb-4 pt-4 bg-secondary">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-4 col-lg">
                        <button className="btn btn-primary">
                            Github
                        </button>
                    </div>
                    <div className="col-md-4 col-lg">
                        <button className="btn btn-link">About Me</button>
                    </div>
                    <div className="col-md-4 col-lg align-self-end text-center">
                        <a href="#" className="to-top">Back to top</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;