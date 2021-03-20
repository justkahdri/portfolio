import React from 'react';

import './styles/carousel.css';

const ModalCarousel = ({content, ctx, custom}) => {
    const active = i => (i ? '' : ' active');

    return (
        <div id="carousel" className={"carousel slide " + custom} data-ride="carousel">
            <ol className="carousel-indicators">
                {Object.values(content).map((image, idx) => (
                    <li data-target="#carousel" data-slide-to={idx} className={active(idx)}/>
                ))}
            </ol>
            <div className="carousel-inner">
                {Object.values(content).map((image, idx) => (
                    <div className={"carousel-item" + active(idx)}>
                        <img src={ctx(image.source).default} className="d-block w-100" alt={image.alt}/>
                        {image.caption &&
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{image.alt}</h5>
                            <p>{image.caption}</p>
                        </div>
                        }
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default ModalCarousel;