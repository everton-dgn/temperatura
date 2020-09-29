import React from "react";
import {CompControl, Max, Min, Win, Wtr} from './styles';

export const Control = (
    {max, min}
) => {

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
            <div>
                <button><Wtr/></button>
            </div>
        </CompControl>
    );
};

export default Control;