import React from "react";
import {CompDay, ArrowL, ArrowR} from './styles';

const Day = (props) => {

    return (
        <CompDay>
            <div>
                <button>
                    <ArrowL/>
                </button>
            </div>
            <div className="day">
                {props.week}, {props.month}
            </div>
            <div>
                <button>
                    <ArrowR/>
                </button>
            </div>
        </CompDay>
    );
};

export default Day;