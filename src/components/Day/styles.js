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
            background: black;
            border-radius: 50%;
            padding: 5px;
        }
    }

    .day {
        font-size: var(--fontDay);
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