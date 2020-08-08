import styled from "styled-components";

export const CompCircle = styled.div`
    padding: 40px 0;

    .circleColor {
        background: var(--green);
        width: 350px;
        height: 350px;
        border-radius: 50%;
        padding: 30px;

        .circleMain {
            background: var(--bgMain);
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