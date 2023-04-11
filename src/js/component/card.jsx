import React from 'react';
import PropType from 'prop-types';


export const Card = (props) => {
    return (

        <>
            <div className="card m-2 mx-auto" style={{width: "18rem", height: "30rem"}}>
                <img src={props.imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text text-center">{props.text}</p>
                </div>
                <div className="bg-light border-top p-3">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <a href="#" className="btn btn-primary d-flex justify-content-center">{props.buttonLabel}</a>
                    </div>
                </div>
            </div>
        </>
    )

};

Card.propTypes = {
    imageUrl: PropType.string,
    title: PropType.string,
    text: PropType.string,
    buttonLabel: PropType.string

};