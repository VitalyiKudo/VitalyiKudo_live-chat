// Core
import styled from 'styled-components';

export const Container = styled.div`
header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.user-name {
    color: #20B2AA;
    padding: 20px 0px;
    font-size: 30px;
}
.name-span {
    font-weight: bold;
}
.logout {
    position: relative;
    font-size: 16px;
    width: 250px;
    height: 30px;
    background-color: #3C9CEE;
    border: 1px solid black;
    margin: 2px 0px 0px 5px;
        &:hover {
            box-shadow: 0px 2px 5px -0.5px rgba(0,0,0,0.71);
            transition: 0.3s;
        } 
        @media (max-width: 408px) {
            height: 40px;
        }
}
.logout-image {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 30px;
    height: 25px;
        @media (max-width: 408px) {
            top: 5px;
            rigth: 1px;
        }
}
`;
