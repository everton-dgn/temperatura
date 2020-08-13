import React from "react";
import {CompAuto} from './styles';

const Auto = (props) => {

    return (
        <CompAuto>
            <div>{props.description}</div>
        </CompAuto>
    );
};

export default Auto;