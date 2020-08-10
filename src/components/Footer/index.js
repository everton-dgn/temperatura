import React from "react";
import {CompFooter, Ther, Help, Light, Dark, SearchBox} from './styles';

const Footer = () => {

    return (
        <CompFooter>
            <div>
                <SearchBox/>
            </div>

            <div>
                <Ther/>
            </div>

            <div>
                <Light/>
            </div>

            <div>
                <Help/>
            </div>
        </CompFooter>
    );
};

export default Footer