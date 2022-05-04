// Core
import styled from 'styled-components';

export const Container = styled.div`
main {
    display: flex;
    justify-content: center;
    align-items: center;
}
.keyboard {
    width: 800px;
    padding: 1px;
    border-radius: 10px;
}
.keyboard-row {
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
@media (max-width: 1440px) {
    .keyboard {
        width: 700px;
    }
}
@media (max-width: 1024px) {
    .keyboard {
        width: 550px;
    }
}
`;
