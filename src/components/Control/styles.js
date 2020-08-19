import styled from "styled-components";
import {LocalFireDepartment} from "styled-icons/material";
import {Water} from "styled-icons/ionicons-outline";
import {Snowflake, Wind} from "styled-icons/fa-solid";

export const CompControl = styled.div`
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        padding: 50px 20px 30px 20px;

        button {
            background: var(--bgButton);
            border-radius: 50%;
            padding: 15px;
            box-shadow: 1px 1px 12px #000000, -1px -1px 9px #6d6f73;
            transition: all .2s linear;

            &:active {
                box-shadow: inset 1px 1px 16px #000000,
                inset -1px -1px 9px #6d6f73,
                1px 1px 12px #000000ed,
                -1px -1px 9px #6d6f73b8;
            }

            svg {
                width: 30px;
                height: 30px;
            }
        }
    }
`;

export const Max = styled(LocalFireDepartment)``;

export const Min = styled(Snowflake)``;

export const Win = styled(Wind)``;

export const Wtr = styled(Water)`
    path {
        stroke-width: 50!important;
        fill: transparent!important;
    }
`;