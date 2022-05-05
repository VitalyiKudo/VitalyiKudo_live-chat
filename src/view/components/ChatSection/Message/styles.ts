// Core
import styled from 'styled-components';

export const Container = styled.div`
.message, .my-message {
position: relative;
overflow-wrap: break-word;
overflow: visible;
box-shadow: -1px 3px 5px -2px #000000;
border: 0.5px solid grey;
border-radius: 15px;
background-color: white;
width: 300px;
height: 80px;
}
.text, .my-text {
    padding: 15px 0px;
    font-size: 18px;
}
.create-date, .my-create-date {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 14px;
}
.edit-status, .my-edit-status {
    position: absolute;
    top: 60px;
    left: 22px;
    font-weight: bold;
}
.name {
    color: #3C9CEE;
}
.my-name {
    color:  #20B2AA;
    padding-top: 5px;
    padding-left: 0px;
}
.buttons {
    position: absolute;
    top: 2px;
    left: 20px;
}
.message-btn {
    background-color: white;
    color:  #20B2AA;
    border: 0.5px solid black;
    width: 30px;
    font-size: 10px;
}
.edit {
    width: 340px;
    height: 80px;
    .edit-field {
        height: 20px;
        margin: 10px 0px 10px 0px;
        width: 250px;
    }
    .edit-btn {
        border: 1px solid black;
        height: 26px;
    }
    .keep, .edit-btn {
        background-color:  #20B2AA;
        color: white;
    }
    .buttons {
        position: absolute;
    }
    .my-create-date {
        padding-left: 280px;
    }
    .my-edit-status {
        display: none;
    }
}
.mobile-buttons {
    display: none;
    position: absolute;
    top: -1px;
    left: -20px;
    .mobile-btn {
        background-color:  #20B2AA;
        
        border: 1px solid black;
        color: white;
        height: 41px;
    }
}
`;

