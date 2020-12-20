import styled from 'styled-components';
import { Close } from 'styled-icons/evaicons-solid';

export const BackgroundPopup = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100% !important;
    position: fixed;
    display: flex;
    z-index: 9999;
    background: #000000a3;
    left: 0;
    top: 0;

    .containerPopup {
        padding: 40px 30px;
        max-width: 500px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: var(--bgMain);
        border-radius: 20px;
        position: relative;
        margin: 20px;
        animation: float .2s ease-out;

        @keyframes float {
            from {
                transform: scale(0);
            }
            to {
                transform: scale(1) translateY(0px);
            }
        }

        .close {
            background-color: var(--red);
            border-radius: 50%;
            position: absolute;
            top: -8px;
            right: -6px;
            box-shadow: -2px 4px 8px #131313;
            cursor: pointer;
        }

        .searchCity {
            display: flex;
            width: 100%;
            margin-top: 30px;
        }

        input {
            height: 40px;
            width: 100%;
            border-radius: 26px 0 0 26px;
            padding: 0 10px 0 20px;
            color: var(--textDark);
            font-size: 18px;

            ::placeholder {
                font-size: 18px;
                color: var(--grayDark);
            }
        }

        button {
            border-radius: 0 26px 26px 0;
            padding: 0 15px 0 0;
            background-color: var(--colorWhite);

            svg {
                width: 30px;
                height: 30px;
                fill: var(--textDark);
            }
        }
    }

    @media screen and (max-width: 480px) {
        transform: scale(1.01) !important;

        h1 {
            font-size: 22px;
            line-height: 1.4;
        }

        .containerPopup {
            padding: 30px 20px;

            input {
                padding: 0 0 0 10px;
            }

            button {
                padding-right: 10px;
                padding-left: 5px;

                svg {
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
`;

export const Closed = styled(Close)`
    width: 30px;
    height: 30px;
    fill: var(--colorWhite);
`;