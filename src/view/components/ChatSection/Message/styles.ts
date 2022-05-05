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
min-width: 300px;
max-width: 450px;
min-height: 80px;
}
.text, .my-text {
    text-align: left;
    padding: 15px 20px;
    font-size: 18px;
}
.create-date, .my-create-date {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 14px;
}
.edit-status, .my-edit-status {
    padding-left: 20px;
    text-align: left;
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
.mobile {
    display: none;
}
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    .modal-content {
        background-color: #fefefe;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 80%; /* Could be more or less, depending on screen size */
    }
}
`;

