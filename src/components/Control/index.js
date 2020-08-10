import React from "react";
import {CompControl, Max, Min, Win} from './styles';

export const Control = () => {

    return (
        <CompControl>
            <div>
                <button><Max/></button>
            </div>
            <div>
                <button><Min/></button>
            </div>
            <div>
                <button><Win/></button>
            </div>
        </CompControl>
    );
};

export default Control;