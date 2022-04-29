// Core
import React, { FC } from 'react';
import { Key } from './Key';
import { rows } from './keyboardData';


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
                            rows.ENG.firstRow.keys.map((value, index) => {
                                return (
                                    <Key
                                        key = { index }
                                        { ...value }
                                    />
                                );
                            })
                        }
                    </div>
                    <div className = 'keyboard-row second-row'>
                        {
                            rows.ENG.secondRow.keys.map((value, index) => {
                                return (
                                    <Key
                                        key = { index }
                                        { ...value }
                                    />
                                );
                            })
                        }
                    </div>
                    <div className = 'keyboard-row third-row'>
                        {
                            rows.ENG.thirdRow.keys.map((value, index) => {
                                return (
                                    <Key
                                        key = { index }
                                        { ...value }
                                    />
                                );
                            })
                        }
                    </div>
                    <div className = 'keyboard-row fourth-row'>
                        {
                            rows.ENG.fourthRow.keys.map((value, index) => {
                                return (
                                    <Key
                                        key = { index }
                                        { ...value }
                                    />
                                );
                            })
                        }
                    </div>
                    <div className = 'keyboard-row fifth-row'>
                        {
                            rows.ENG.fifthRow.keys.map((value, index) => {
                                return (
                                    <Key
                                        key = { index }
                                        { ...value }
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
