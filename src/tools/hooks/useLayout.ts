export const useLayout = (isEnglish: boolean) => {
    const rows = {
        ENG: {
            firstRow: {
                keys: [
                    { value: '1', code: 49 },
                    { value: '2', code: 50 },
                    { value: '3', code: 51 },
                    { value: '4', code: 52 },
                    { value: '5', code: 53 },
                    { value: '6', code: 54 },
                    { value: '7', code: 55 },
                    { value: '8', code: 56 },
                    { value: '9', code: 57 },
                    { value: '0', code: 48 },
                ],
            },
            secondRow: {
                keys: [
                    { value: 'q', code: 81 },
                    { value: 'w', code: 87 },
                    { value: 'e', code: 69 },
                    { value: 'r', code: 82 },
                    { value: 't', code: 84 },
                    { value: 'y', code: 89 },
                    { value: 'u', code: 85 },
                    { value: 'i', code: 73 },
                    { value: 'o', code: 79 },
                    { value: 'p', code: 80 },
                ],
            },
            thirdRow: {
                keys: [
                    { value: 'a', code: 65 },
                    { value: 's', code: 83 },
                    { value: 'd', code: 68 },
                    { value: 'f', code: 70 },
                    { value: 'g', code: 71 },
                    { value: 'h', code: 72 },
                    { value: 'j', code: 74 },
                    { value: 'k', code: 75 },
                    { value: 'l', code: 76 },

                ],
            },
            fourthRow: {
                keys: [
                    { value: 'Shift', code: 16 },
                    { value: 'z', code: 90 },
                    { value: 'x', code: 88 },
                    { value: 'c', code: 67 },
                    { value: 'v', code: 86 },
                    { value: 'b', code: 66 },
                    { value: 'n', code: 78 },
                    { value: 'm', code: 77 },
                    { value: 'Backspace', code: 8 },
                ],
            },
            fifthRow: {
                keys: [
                    { value: ',', code: 300 },
                    { value: 'En', code: 190454634 },
                    { value: 'Space', code: 32 },
                    { value: '.', code: 320 },
                    { value: 'Enter', code: 13 },
                ],
            },
        },
        RU: {
            firstRow: {
                keys: [
                    { value: '1', code: 49 },
                    { value: '2', code: 50 },
                    { value: '3', code: 51 },
                    { value: '4', code: 52 },
                    { value: '5', code: 53 },
                    { value: '6', code: 54 },
                    { value: '7', code: 55 },
                    { value: '8', code: 56 },
                    { value: '9', code: 57 },
                    { value: '0', code: 48 },
                ],
            },
            secondRow: {
                keys: [
                    { value: 'й', code: 81 },
                    { value: 'ц', code: 87 },
                    { value: 'у', code: 69 },
                    { value: 'к', code: 82 },
                    { value: 'е', code: 84 },
                    { value: 'н', code: 89 },
                    { value: 'г', code: 85 },
                    { value: 'ш', code: 73 },
                    { value: 'щ', code: 79 },
                    { value: 'з', code: 80 },
                    { value: 'х', code: 219 },
                    { value: 'ъ', code: 221 },
                ],
            },
            thirdRow: {
                keys: [
                    { value: 'ф', code: 65 },
                    { value: 'ы', code: 83 },
                    { value: 'в', code: 68 },
                    { value: 'а', code: 70 },
                    { value: 'п', code: 71 },
                    { value: 'р', code: 72 },
                    { value: 'о', code: 74 },
                    { value: 'л', code: 75 },
                    { value: 'д', code: 76 },
                    { value: 'ж', code: 186 },
                    { value: 'э', code: 222 },
                ],
            },
            fourthRow: {
                keys: [
                    { value: 'Shift', code: 16 },
                    { value: 'я', code: 90 },
                    { value: 'ч', code: 88 },
                    { value: 'с', code: 67 },
                    { value: 'м', code: 86 },
                    { value: 'и', code: 66 },
                    { value: 'т', code: 78 },
                    { value: 'ь', code: 77 },
                    { value: 'б', code: 188 },
                    { value: 'ю', code: 190 },
                    { value: 'Backspace', code: 8 },
                ],
            },
            fifthRow: {
                keys: [
                    { value: ',', code: 240 },
                    { value: 'Ru', code: 190454634 },
                    { value: 'Space', code: 32 },
                    { value: '.', code: 230 },
                    { value: 'Enter', code: 13 },
                ],
            },
        },
    };

    const result = isEnglish ? rows.ENG : rows.RU;

    return result;
};