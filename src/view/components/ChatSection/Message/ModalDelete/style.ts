import styled from 'styled-components';

export const Container = styled.div`
.modal {
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4);
    .modal-content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #fefefe;
        margin: 250px auto;  
        padding: 20px;
        border: 1px solid #888;
        width: 20%;
        height: 90px;
        border: 3px solid #3C9CEE;
        border-radius: 5px;
        .modal-heading {
            font-size: 25px;
        }
        .modal-buttons {
            padding-top: 20px;
            align-items: center;
        }
        .modal-button:last-child{
            margin-left: 20px;
        }
        .modal-button {
            border: 3px solid #3C9CEE;
            background-color: transparent;
            padding: 5px;
            font-size: 15px;
            width: 120px;
        }
        @media (max-width: 1300px) {
            .modal-button {
                border: 3px solid #3C9CEE;
                background-color: transparent;
                padding: 5px;
                font-size: 15px;
                width: 100px;
            }
        }
        @media (max-width: 1100px) {
            min-width: 250px;
            .modal-button:last-child{
                margin-left: 5px;
            }
        }
        @media (max-height: 600px) {
            margin: 200px auto;  
        }
    }
}
`;
