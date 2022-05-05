import styled from 'styled-components';

export const Media = styled.div`
@media (max-width: 1440px) {
    .message,
    .my-message {
        width: 280px;
    }
    .edit {
        width: 300px;
        .edit-field {
            width: 218px;
        }
        .buttons {
            left: 17px;
        }
        .my-create-date {
            padding-left: 240px;
        }
    }
}

@media (max-width: 1024px) {
    .message,
    .my-message {
        width: 220px;
    }
    .buttons {
        left: 10px;
    }
    .edit-status,
    .my-edit-status {
        left: 13px;
    }
    .edit {
        width: 250px;
        .edit-field {
            width: 184px;
        }

        .buttons {
            left: 10px;
        }
    }
}

@media (max-width: 570px) {
    .buttons {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: -1px;
        left: -15px;
        .message-btn {
            background-color:  #20B2AA;
            border: 1px solid black;
            color: white;
            height: 41px;
        }
    }
    .message,
    .my-message {
        width: 220px;
    }
    .edit-status,
    .my-edit-status {
        left: 20px;
    }
    .edit {
        width: 240px;
        .edit-field {
            font-size: 16px;
            width: 175px;
        }
        .edit-btn {
            height: 25px;
        }
        .buttons {
            left: -20px;
        }
    }
    .desktop {
        display: none;
    }
    .mobile {
        display: block;
    }
}

@media (max-width: 530px) {
    .message,
    .my-message {
        width: 200px;
    }
    .edit {
        width: 220px;
        .edit-field {
            width: 160px;
        }
    }
}

@media (max-width: 480px) {
    .message,
    .my-message {
        width: 180px;
    }
    .edit {
        width: 200px;
        .edit-field {
            width: 142px;
        }
    }
}
@media (max-width: 410px) {
    .message,
    .my-message {
        width: 160px;
    }
    .edit {
        width: 180px;
        .edit-field {
            width: 132px;
        }
    }
}
@media (max-width: 370px) {
    .message,
    .my-message {
        width: 140px;
    }
    .edit {
        width: 160px;
        .edit-field {
            width: 110px;
        }
    }
}
@media (max-width: 340px) {
    .message,
    .my-message {
        width: 130px;
    }
    .edit {
        width: 150px;
        .edit-field {
            width: 95px;
        }
    }
}
`;
