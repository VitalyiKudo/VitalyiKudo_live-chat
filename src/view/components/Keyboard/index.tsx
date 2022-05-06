// Core
import React, { FC } from 'react';
import { useKeyboard } from '../../../bus/keyboard';
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
    const { isEnglish } = useKeyboard();
    const layout = isEnglish ? rows.ENG : rows.RU;

    return (
        <S.Container>
            <main>
                <div className = { isEnglish ? 'keyboard-eng' : 'keyboard-ru' }>
                    <div className = 'keyboard-row first-row'>
                        {
                            layout.firstRow.keys.map((value, index) => {
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
                            layout.secondRow.keys.map((value, index) => {
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
                            layout.thirdRow.keys.map((value, index) => {
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
                            layout.fourthRow.keys.map((value, index) => {
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
                            layout.fifthRow.keys.map((value, index) => {
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
