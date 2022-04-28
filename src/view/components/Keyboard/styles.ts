// Core
import styled from 'styled-components';

export const Container = styled.section`
main {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}
.keyboard {
    width: 800px;
    padding: 1px;
    border-radius: 10px;
}
.keyboard-row {
    /* width: 100%; */
    display: grid;
    grid-gap: 1px;
}
/* rows  */
.first-row, .second-row {
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: repeat(1, 50px);
}
.third-row {
    grid-template-columns: repeat(18,  1fr);
    grid-template-rows: repeat(1, 50px);
}
.fourth-row {
    grid-template-columns: repeat(20,  1fr);
    grid-template-rows: repeat(1, 50px);
}
.fifth-row {
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: repeat(1, 50px);
}
/* keys  */
.key {
    background-color: #F5F5F5;
    border: 2px solid black;
    border-radius: 5px;
    grid-column: span 2;
    display: flex;
    justify-content: center;
    align-items: center;
}
.shift {
    grid-column: span 3;
}
.backspace {
    grid-column: span 3;
}
.space {
    grid-column: span 7;
}
`;
