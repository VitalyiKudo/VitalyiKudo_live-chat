// Core
import React, { FC } from 'react';
import { Key } from './Key';
import { keys } from './keyboardData';


// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Keyboard: FC<PropTypes> = () => {
    return (
        <S.Container>
            <main>
                <div className = 'keyboard'>
                    <div className = 'keyboard-row first-row'>
                        {
                            keys.firstRow.map((value, index) => {
                                return (
                                    <Key
                                        key = { index }
                                        value = { value }
                                    />
                                );
                            })
                        }
                    </div>
                    <div className = 'keyboard-row second-row'>
                        {
                            keys.secondRow.map((value, index) => {
                                return (
                                    <Key
                                        key = { index }
                                        value = { value }
                                    />
                                );
                            })
                        }
                    </div>
                    <div className = 'keyboard-row third-row'>
                        {
                            keys.thirdRow.map((value, index) => {
                                return (
                                    <Key
                                        key = { index }
                                        value = { value }
                                    />
                                );
                            })
                        }
                    </div>
                    <div className = 'keyboard-row fourth-row'>
                        {
                            keys.fourthRow.map((value, index) => {
                                return (
                                    <Key
                                        key = { index }
                                        value = { value }
                                    />
                                );
                            })
                        }
                    </div>
                    <div className = 'keyboard-row fifth-row'>
                        {
                            keys.fifthRow.map((value, index) => {
                                return (
                                    <Key
                                        key = { index }
                                        value = { value }
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </main>
        </S.Container>
    );
};
