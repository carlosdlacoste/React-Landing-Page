import React from 'react';
import PropType from 'prop-types';

export const Jumbotron = (props) => {
    return (
        <>
            <div className="p-5 bg-secondary text-dark rounded bg-opacity-25 my-2 mx-2">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <button id="jumbo-button" type="button" className="btn btn-primary btn-lg p-2">{props.buttonLabel}</button>
            </div>
        </>
    )

};

Jumbotron.propTypes = {
    title: PropType.string,
    text: PropType.string,
    buttonLabel: PropType.string
};
