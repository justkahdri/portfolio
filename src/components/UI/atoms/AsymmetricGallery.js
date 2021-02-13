import React from "react";

const AsymmetricImage = props => {
    const ratios = {
        xlarge: "col-12",
        large: "col-12 col-lg-8 order-lg-1",
        medium: "col-12 col-md-8 col-lg-6 order-md-3",
        small: "col-6 col-md-6 col-lg-4 order-md-4 order-lg-1",
        xsmall: "col-6 col-md-4 col-lg-2 order-md-3 order-lg-2"
    }

    return (
        <div className={ratios[props.size]}>
            <img src={props.image} alt={props.alt} className="img-fluid" />
        </div>
    );
}

export default AsymmetricImage;