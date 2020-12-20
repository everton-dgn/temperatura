import styled from 'styled-components';
import { Thermometer } from 'styled-icons/boxicons-solid';
import { LightBulb, Refresh } from 'styled-icons/heroicons-outline';
import { Search } from 'styled-icons/ionicons-solid';

export const CompFooter = styled.div`
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        padding: 10px 20px 40px 20px;

        button {
            background: transparent;
        }

        svg {
            width: 30px;
            height: 30px;
            fill: var(--grayIcon);
            transition: all .2s linear;

            &:hover {
                filter: drop-shadow(2px 3px 6px #000);
                fill: var(--colorWhite);
                cursor: pointer;
                transform: translateY(-1px);
            }
        }
    }
`;

export const Ther = styled(Thermometer)``;

export const Update = styled(Refresh)`
    fill: transparent !important;
    stroke: var(--grayIcon) !important;

    &:hover {
        stroke: var(--colorWhite) !important;
    }
`;

export const Light = styled(LightBulb)`
    fill: transparent !important;
    stroke: var(--grayIcon) !important;

    &:hover {
        stroke: var(--colorWhite) !important;
    }
`;

export const SearchBox = styled(Search)``;