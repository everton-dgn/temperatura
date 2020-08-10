import styled from "styled-components";
import {Thermometer} from "styled-icons/boxicons-solid";
import {HelpOutline} from "styled-icons/material-rounded";
import {LightBulb} from "styled-icons/heroicons-outline";
import {MoonOutline} from "styled-icons/evaicons-outline";
import {Gear} from "styled-icons/octicons";
import {Search} from "styled-icons/ionicons-solid";

export const CompFooter = styled.div`
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        padding: 50px 20px;
    }
`;

export const Ther = styled(Thermometer)`
    width: 30px;
    height: 30px;
    color: #fff;
`;

export const Help = styled(HelpOutline)`
    width: 30px;
    height: 30px;
    color: #fff;
`;

export const Light = styled(LightBulb)`
    width: 30px;
    height: 30px;
    color: #fff;
`;

export const Dark = styled(MoonOutline)`
    width: 30px;
    height: 30px;
    color: #fff;
`;

export const Config = styled(Gear)`
    width: 30px;
    height: 30px;
    color: #fff;
`;

export const SearchBox = styled(Search)`
    width: 30px;
    height: 30px;
    color: #fff;
`;