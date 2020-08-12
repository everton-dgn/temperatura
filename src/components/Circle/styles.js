import styled from "styled-components";

export const CompCircle = styled.div`
    padding: 10px 0;

    .circleColor {
        z-index: 1;
        width: 330px;
        height: 330px;
        border-radius: 50%;
        box-shadow: inset 6px -1px 8px #000000a6;
        padding: 35px;

        .circleMain {

            &::after {
                content: '';
                width: 50px;
                height: 15px;
                background: #33363c;
                z-index: 10;
                display: block;
                position: absolute;
                border-radius: 15px;
                margin-top: 101px;
                margin-left: -63px;
            }

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

    .load {
        width: 330px;
        height: 330px;
        position: absolute;
        background-color: var(--green);
        border-radius: 50%;
        transform: rotate(-135deg);
        animation: circle 3s linear infinite;

        @keyframes circle {
            0% {
                clip-path: polygon(100% 0, 100% 0%, 100% 0%, 100% 0%, 100% 0%, 50% 50%);
            }
            25% {
                clip-path: polygon(
                    100% 0,
                    100% 100%,
                    100% 100%,
                    100% 100%,
                    100% 100%,
                    50% 50%
                );
            }
            50% {
                clip-path: polygon(100% 0, 100% 100%, 0% 100%, 0% 100%, 0 100%, 50% 50%);
            }
            75% {
                clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0%, 0 0, 50% 50%);
            }
            100% {
                clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0, 100% 0, 50% 50%);
            }
        }
    }
`;