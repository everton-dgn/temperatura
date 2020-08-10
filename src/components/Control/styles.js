import styled from "styled-components";
import {LocalFireDepartment} from "styled-icons/material";
import {Snowflake, Wind} from "styled-icons/fa-solid";

export const CompControl = styled.div`
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        padding: 50px 20px;

        button {
            background: black;
            border-radius: 50%;
            padding: 15px;
        }
    }
`;

export const Max = styled(LocalFireDepartment)`
    width: 30px;
    height: 30px;
    color: #fff;
`;

export const Min = styled(Snowflake)`
    width: 30px;
    height: 30px;
    color: #fff;
`;

export const Win = styled(Wind)`
    width: 30px;
    height: 30px;
    color: #fff;
`;