// Core
import React, { FC } from 'react';

type PropTypes = {
    deleteMsg: Function,
    modalHandler: Function,
}

export const ModalDelete: FC<PropTypes> = ({ modalHandler, deleteMsg }) => {
    return (
        <div className = 'modal'>
            <div className = 'modal-content'>
                <h1 className = 'modal-heading'>Delete message ?</h1>
                <div className = 'modal-buttons'>
                    <button
                        className = 'modal-button'
                        onClick = { () => deleteMsg() }>Ok
                    </button>
                    <button
                        className = 'modal-button'
                        onClick = { () => modalHandler() }>Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};
