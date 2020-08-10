import styled from "styled-components";
import {KeyboardArrowLeft, KeyboardArrowRight} from "styled-icons/material-rounded";

export const CompDay = styled.div`
    width: 100%;
    padding: 20px 20px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;

        button {
            background: var(--bgButton);
            border-radius: 50%;
            padding: 5px;
            box-shadow: 1px 1px 12px #000000, -1px -1px 9px #6d6f73;
        }
    }

    .day {
        font-size: var(--fontDay);
        white-space: nowrap;
    }
`;

export const ArrowL = styled(KeyboardArrowLeft)`
    color: #fff;
    width: 35px;
    height: 35px;
`;

export const ArrowR = styled(KeyboardArrowRight)`
    color: #fff;
    width: 35px;
    height: 35px;
`;