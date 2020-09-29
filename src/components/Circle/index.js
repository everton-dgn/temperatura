import React from "react";
import {CompCircle} from './styles';

const Circle = (props) => {

    return (
        <CompCircle>
            <div className="circleColor">

                <div className="circleMain">
                    <div className="unity">
                        {/*{props.uni}*/}
                    </div>
                    <div className="Temperature">
                        {/*{props.temp}*/}
                    </div>
                    <div className="current">
                        {/*{props.current}*/}
                    </div>
                </div>
            </div>
            <div className="load"></div>
        </CompCircle>
    );
};

export default Circle;