import React from "react";
import {CompCircle} from './styles';

const Circle = () => {

    return (
        <CompCircle>
            <div className="circleColor">

                <div className="circleMain">
                    <div className="unity">°C</div>
                    <div className="Temperature">29</div>
                    <div className="current">Agora</div>
                </div>
            </div>
            <div className="load"></div>
        </CompCircle>
    );
};

export default Circle;