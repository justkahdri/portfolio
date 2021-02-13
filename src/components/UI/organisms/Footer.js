import React from 'react';

import './styles/footer.css';

import Cafecito from "../atoms/Cafecito";

const Footer = () => {
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <footer id="footer" className="bg-dark">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 py-2 col-lg text-center">
                        <Cafecito />
                    </div>
                    <div className="col-md-4 py-2 col-lg text-center">
                        <h6 className="bold text-light mb-0">
                            JustKahdri © {new Date().getFullYear() || 2021}
                        </h6>
                    </div>

                    <div className="col-md-4 py-2 col-lg text-center">
                        <button onClick={topFunction} role="link" className="btn btn-link to-top">Back to top</button>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;