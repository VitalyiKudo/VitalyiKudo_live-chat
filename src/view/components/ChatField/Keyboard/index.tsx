// Core
import React, { FC } from 'react';

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
                        <div className = 'key'>1</div>
                        <div className = 'key'>2</div>
                        <div className = 'key'>3</div>
                        <div className = 'key'>4</div>
                        <div className = 'key'>5</div>
                        <div className = 'key'>6</div>
                        <div className = 'key'>7</div>
                        <div className = 'key'>8</div>
                        <div className = 'key'>9</div>
                        <div className = 'key'>0</div>
                    </div>
                    <div className = 'keyboard-row second-row'>
                        <div className = 'key'>q</div>
                        <div className = 'key'>w</div>
                        <div className = 'key'>e</div>
                        <div className = 'key'>r</div>
                        <div className = 'key'>t</div>
                        <div className = 'key'>y</div>
                        <div className = 'key'>u</div>
                        <div className = 'key'>i</div>
                        <div className = 'key'>o</div>
                        <div className = 'key'>p</div>
                    </div>
                    <div className = 'keyboard-row third-row'>
                        <div className = 'key'>a</div>
                        <div className = 'key'>s</div>
                        <div className = 'key'>d</div>
                        <div className = 'key'>f</div>
                        <div className = 'key'>g</div>
                        <div className = 'key'>h</div>
                        <div className = 'key'>j</div>
                        <div className = 'key'>k</div>
                        <div className = 'key'>l</div>
                    </div>
                    <div className = 'keyboard-row fourth-row'>
                        <div className = 'key shift'>Shift</div>
                        <div className = 'key'>z</div>
                        <div className = 'key'>x</div>
                        <div className = 'key'>c</div>
                        <div className = 'key'>v</div>
                        <div className = 'key'>b</div>
                        <div className = 'key'>n</div>
                        <div className = 'key'>m</div>
                        <div className = 'key backspace'>Backspace</div>
                    </div>
                    <div className = 'keyboard-row fifth-row'>
                        <div className = 'key'>,</div>
                        <div className = 'key'>En</div>
                        <div className = 'key space'>Space</div>
                        <div className = 'key'>.</div>
                        <div className = 'key'>Enter</div>
                    </div>
                </div>
            </main>
        </S.Container>
    );
};
