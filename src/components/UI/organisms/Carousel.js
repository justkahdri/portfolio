import React from 'react';

import './styles/carousel.css';

const Carousel = ({content, ctx, custom}) => {

    return (
        <div id="projectCarousel" className={"carousel slide " + custom} data-ride="carousel">
            <div className="carousel-inner">
                {Object.values(content).map((image, idx) => (
                    <div key={idx} className={"carousel-item" + (idx ? '' : ' active')}>
                        <img src={ctx(image.source).default} className="d-block w-100" alt={image.alt}/>
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" href="#projectCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#projectCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;