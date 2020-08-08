import React from "react";
import {CompCircle} from './styles';

const Circle = () => {

    return (
        <CompCircle>
            <div className="circleColor">
                <div className="circleMain">
                    <div className="unity">°C</div>
                    <div className="Temperature">29</div>
                    <div className="current">29°C agora</div>
                </div>
            </div>
        </CompCircle>
    );
};

export default Circle;