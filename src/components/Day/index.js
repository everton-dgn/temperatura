import React from "react";
import {CompDay, ArrowL, ArrowR} from './styles';

const Day = () => {

    return (
        <CompDay>
            <div>
                <button><ArrowL/></button>
            </div>
            <div className="day">
                Qua, 29/04
            </div>
            <div>
                <button><ArrowR/></button>
            </div>
        </CompDay>
    );
};

export default Day;