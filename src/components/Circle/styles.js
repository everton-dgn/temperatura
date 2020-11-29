import styled from 'styled-components';

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
            background-image: linear-gradient(90deg, #1d1f23, #42474e);
            box-shadow: 4px 3px 14px #000;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            padding: 20px;
            display: flex;
            flex-direction: column;

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
                box-shadow: 2px 4px 6px #000000eb;
            }

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

                .dayMaxMin {
                    display: flex;
                    flex-direction: column;
                    margin: 30px 0;

                    .dayMax, .dayMin {
                        font-size: 30px;
                        margin: 10px 0 0 0;
                    }
                }
            }

            span {
                font-size: 76px;
                color: var(--green);
                font-weight: 600;
                margin: 31px 0;
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
        display: block;
        position: absolute;
        border-radius: 50%;
        transition: all 3s linear!important;
    }
`;