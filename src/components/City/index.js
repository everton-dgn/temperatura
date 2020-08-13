import React from "react";
import {CompCity} from './styles';

const City = (props) => {

    return (
        <CompCity>
            <div>
                <h1>{props.city}</h1>
            </div>
        </CompCity>
    );
};

export default City;