import React from "react";
import {CompFooter, Ther, Help, Light, Dark, Config, SearchBox} from './styles';

const Footer = () => {

    return (
        <CompFooter>
            <div>
                <Ther/>
            </div>
            <div>
                <SearchBox/>
            </div>
            <div>
               <Light/>
            </div>
            <div>
                <Config/>
            </div>
            <div>
                <Help/>
            </div>
        </CompFooter>
    );
};

export default Footer