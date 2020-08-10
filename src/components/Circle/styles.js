import styled from "styled-components";

export const CompCircle = styled.div`
    padding: 10px 0;

    .circleColor {
        background: var(--green);
        width: 330px;
        height: 330px;
        border-radius: 50%;
        padding: 35px;
        box-shadow: inset 6px -1px 8px #000000a6;

        .circleMain {
            background-image: linear-gradient(90deg, #1d1f23, #42474e);
            box-shadow: 4px 3px 14px #000;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            padding: 20px;
            display: flex;
            flex-direction: column;

            div {
                display: flex;
                flex: 1;
                justify-content: center;
                width: 100%;
            }

            .unity {
                align-items: flex-end;
                color: var(--green);
                font-size: var(--fontH2);
                font-weight: 600;
            }

            .Temperature {
                color: var(--green);
                font-size: var(--fontTemp);
                font-weight: 600;
                align-items: center;
            }

            .current {
                align-items: flex-start;
                color: var(--green);
                font-size: var(--fontH2);
                font-weight: 600;
            }
        }
    }
`;