(() => {
    const body = document.querySelector('body');
    const reset = document.querySelectorAll('body *');
    reset.forEach(element => {
        element.style.margin = '0';
        element.style.padding = '0';
    });
    body.setAttribute('style', 'margin: 0; padding: 0');
    const wrapContent = document.createElement('div');
    wrapContent.setAttribute('style', 'max-width: 720px; margin: 0 auto; display: flex; ' +
        '                                       flex-direction: column; align-items: center; box-sizing: border-box');
    body.append(wrapContent);
    const area = document.createElement('textarea');
    area.setAttribute('id', 'textPlace');
    area.setAttribute('rows', '5');
    area.setAttribute('type', 'text');
    area.setAttribute('style', 'display: inline-block; width: 100%; margin-top: 100px; margin-bottom: 15px');
    wrapContent.append(area);
    const keyboard = document.createElement('div');
    keyboard.setAttribute('style', 'padding: 10px; border: 1px solid black; width: 100%; ' +
        'box-sizing: border-box; display: flex;' +
        'flex-direction: column; justify-content: space-between; ' +
        'background: rgb(240, 240, 240); cursor: pointer; ' +
        'margin-bottom: 20px');
    wrapContent.append(keyboard);
    const text = document.createElement('div');
    text.setAttribute('style', 'display: flex; flex-direction: column; justify-content: center; align-items: center; ' +
        'background: rgb(230, 230, 230); color: rgb(58, 66, 78); width: 100%');
    text.innerHTML = '<p>Клавиатура создана в операционной системе Windows</p>\n' +
        '<p>Для переключения языка: left Shift + left Ctrl</p>\n' +
        '<p>Показать/скрыть клавиатуру: left Ctrl + left Alt + Z</p>'
    wrapContent.append(text);
    const keysRowFirst = [
        {
            one: ['\`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
            sub: ['~', '!', '@', '#', '$', '%', ':', '?', '*', '(', ')', '_', '+', '']
        }
    ];
    const keysRowSecond = [
        {
            one: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL'],
            sub: ['', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', '']
        }
    ];
    const keysRowThird = [
        {
            one: ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'ENTER'],
            sub: ['', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '']
        }
    ];
    const keysRowFourth = [
        {
            one: ['Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', `up`, 'Shift'],
            sub: ['', '', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '', '']
        }
    ];
    const keysRowFifth = [{one: ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'left', 'down', 'right']}];

    // const spec = ['\`', 'Backspace', 'Tab', 'DEL', 'Caps Lock', 'ENTER', 'Shift1', 'Shift2', 'Ctrl', 'Win', 'Alt', `up`, 'left', 'down', 'right']

    function addRow() {
        let n = 0;
        let tmp
        let keyRow
        while (n !== 5) {
            keyRow = document.createElement('div');
            keyRow.setAttribute('style',
                'display: flex; justify-content: space-between; align-items: center; ' +
                'margin-bottom: 10px; box-sizing: border-box');
            keyRow.setAttribute('id', `row${n}`);
            if (n === 4) {
                keyRow.style.marginBottom = '0';
            }
            keyboard.append(keyRow);
            addKeys(n);
            tmp = keyboard.innerHTML;
            keyboard.innerHTML = tmp;
            n++
        }
    }

    addRow();


    function addKeys(n) {
        let tmp
        let keyBut
        let subKeyValue
        let keyRow
        switch (n) {
            case 0:
                keyRow = document.querySelector(`#row${n}`)
                keyBut = document.createElement('div');
                subKeyValue = document.createElement('div');
                keyBut.classList.add('keyBtn');
                keyBut.setAttribute('style',
                    'background: rgb(58, 66, 78); color: rgb(250, 250, 250); width: 40px; height: 40px; ' +
                    'position: relative; display: flex; justify-content: center; align-items: center; ' +
                    'font-size: 15px; border-radius: 3px');
                subKeyValue.setAttribute('style', 'position: absolute; top: 5px; left: 5px; font-size: 10px');
                subKeyValue.classList.add('subkey');
                for (let i = 0; i < keysRowFirst[0].one.length; i++) {
                    keyBut.textContent = keysRowFirst[0].one[i];
                    subKeyValue.textContent = keysRowFirst[0].sub[i];
                    if (keyBut.textContent === '\`' || keyBut.textContent === 'Backspace') {
                        keyBut.style.background = 'rgb(28, 35, 46)';
                        keyBut.style.color = 'rgb(173,173,173)';
                    } else {
                        keyBut.style.background = 'rgb(58, 66, 78)';
                        keyBut.style.color = 'rgb(250, 250, 250)';
                    }
                    if (keyBut.textContent === 'Backspace') {
                        keyBut.style.width = '100px';
                    }

                    keyBut.append(subKeyValue);
                    keyRow.append(keyBut);
                    tmp = keyRow.innerHTML;
                    keyRow.innerHTML = tmp;
                }
                break;

            case 1:
                keyRow = document.querySelector(`#row${n}`)
                keyBut = document.createElement('div');
                subKeyValue = document.createElement('div');
                keyBut.classList.add('keyBtn');
                keyBut.setAttribute('style',
                    'background: rgb(58, 66, 78); color: rgb(250, 250, 250); width: 40px; height: 40px; ' +
                    'position: relative; display: flex; justify-content: center; align-items: center; ' +
                    'font-size: 15px; border-radius: 3px');
                subKeyValue.setAttribute('style', 'position: absolute; top: 2px; left: 5px; font-size: 10px');
                subKeyValue.classList.add('subkey');
                for (let i = 0; i < keysRowSecond[0].one.length; i++) {
                    keyBut.textContent = keysRowSecond[0].one[i];
                    subKeyValue.textContent = keysRowSecond[0].sub[i];
                    if (keyBut.textContent === 'Tab' || keyBut.textContent === 'DEL') {
                        keyBut.style.background = 'rgb(28, 35, 46)';
                        keyBut.style.color = 'rgb(173,173,173)';
                    } else {
                        keyBut.style.background = 'rgb(58, 66, 78)';
                        keyBut.style.color = 'rgb(250, 250, 250)';
                    }
                    if (keyBut.textContent === 'Tab') {
                        keyBut.style.width = '50px';
                    } else if (keyBut.textContent === 'DEL') {
                        keyBut.style.width = '45px';
                    } else {
                        keyBut.style.width = '40px';
                    }
                    keyBut.append(subKeyValue);
                    keyRow.append(keyBut);
                    tmp = keyRow.innerHTML;
                    keyRow.innerHTML = tmp;
                }
                break;
            case 2:
                keyRow = document.querySelector(`#row${n}`)
                keyBut = document.createElement('div');
                subKeyValue = document.createElement('div');
                keyBut.classList.add('keyBtn');
                keyBut.setAttribute('style',
                    'background: rgb(58, 66, 78); color: rgb(250, 250, 250); width: 40px; height: 40px; ' +
                    'position: relative; display: flex; justify-content: center; align-items: center; ' +
                    'font-size: 15px; border-radius: 3px');
                subKeyValue.setAttribute('style', 'position: absolute; top: 2px; left: 5px; font-size: 10px');
                subKeyValue.classList.add('subkey');
                for (let i = 0; i < keysRowThird[0].one.length; i++) {
                    keyBut.textContent = keysRowThird[0].one[i];
                    subKeyValue.textContent = keysRowThird[0].sub[i];
                    if (keyBut.textContent === 'Caps Lock' || keyBut.textContent === 'ENTER') {
                        keyBut.style.background = 'rgb(28, 35, 46)';
                        keyBut.style.color = 'rgb(173,173,173)';
                    } else {
                        keyBut.style.background = 'rgb(58, 66, 78)';
                        keyBut.style.color = 'rgb(250, 250, 250)';
                    }
                    if (keyBut.textContent === 'Caps Lock') {
                        keyBut.style.width = '100px';
                    } else if (keyBut.textContent === 'ENTER') {
                        keyBut.style.width = '85px';
                    } else {
                        keyBut.style.width = '40px';
                    }
                    keyBut.append(subKeyValue);
                    keyRow.append(keyBut);
                    tmp = keyRow.innerHTML;
                    keyRow.innerHTML = tmp;
                }
                break;
            case 3:
                keyRow = document.querySelector(`#row${n}`)
                keyBut = document.createElement('div');
                subKeyValue = document.createElement('div');
                keyBut.classList.add('keyBtn');
                keyBut.setAttribute('style',
                    'background: rgb(58, 66, 78); color: rgb(250, 250, 250); width: 40px; height: 40px; ' +
                    'position: relative; display: flex; justify-content: center; align-items: center; ' +
                    'font-size: 15px; border-radius: 3px');
                subKeyValue.setAttribute('style', 'position: absolute; top: 2px; left: 5px; font-size: 10px');
                subKeyValue.classList.add('subkey');
                for (let i = 0; i < keysRowFourth[0].one.length; i++) {
                    keyBut.textContent = keysRowFourth[0].one[i];
                    subKeyValue.textContent = keysRowFourth[0].sub[i];
                    if (keyBut.textContent === 'Shift' || keyBut.textContent === 'up') {
                        keyBut.style.background = 'rgb(28, 35, 46)';
                        keyBut.style.color = 'rgb(173,173,173)';
                    } else {
                        keyBut.style.background = 'rgb(58, 66, 78)';
                        keyBut.style.color = 'rgb(250, 250, 250)';
                    }
                    if (keyBut.textContent === 'Shift' && i !== keysRowFourth[0].one.length - 1) {
                        keyBut.style.width = '100px';
                    } else if (keyBut.textContent === 'Shift' && i === keysRowFourth[0].one.length - 1) {
                        keyBut.style.width = '40px';
                    } else {
                        keyBut.style.width = '40px';
                    }
                    if (keyBut.textContent === 'up') {
                        keyBut.innerHTML = '<img src="./images/tria-up.png" alt="Up" class="up" style="width: 15px">';
                    }
                    keyBut.append(subKeyValue);
                    keyRow.append(keyBut);
                    tmp = keyRow.innerHTML;
                    keyRow.innerHTML = tmp;
                }
                break;
            case 4:
                console.log(keysRowFifth[0])
                keyRow = document.querySelector(`#row${n}`)
                keyBut = document.createElement('div');
                keyBut.classList.add('keyBtn');
                keyBut.setAttribute('style',
                    'background: rgb(58, 66, 78); color: rgb(250, 250, 250); width: 40px; height: 40px; ' +
                    'position: relative; display: flex; justify-content: center; align-items: center; ' +
                    'font-size: 15px; border-radius: 3px');
                for (let i = 0; i < keysRowFifth[0].one.length; i++) {
                    keyBut.textContent = keysRowFifth[0].one[i];
                    if (keyBut.textContent === 'Ctrl' || keyBut.textContent === 'Win' || keyBut.textContent === 'Alt'
                        || keyBut.textContent === 'left' || keyBut.textContent === 'down' || keyBut.textContent === 'right') {
                        keyBut.style.background = 'rgb(28, 35, 46)';
                        keyBut.style.color = 'rgb(173,173,173)';
                    } else {
                        keyBut.style.background = 'rgb(58, 66, 78)';
                        keyBut.style.color = 'rgb(250, 250, 250)';
                    }
                    if (keyBut.textContent === 'Ctrl') {
                        keyBut.style.width = '65px';
                    } else {
                        keyBut.style.width = '40px';
                    }
                    if (keyBut.textContent === 'left') {
                        keyBut.innerHTML = '<img src="./images/tria-left.png" alt="Left" class="left" style="width: 15px; height: 7px">';
                    }
                    if (keyBut.textContent === 'down') {
                        keyBut.innerHTML = '<img src="./images/tria-down.png" alt="Down" class="down" style="width: 15px">';
                    }
                    if (keyBut.textContent === 'right') {
                        keyBut.innerHTML = '<img src="./images/tria-right.png" alt="Right" class="right" style="width: 15px; height: 7px">';
                    }
                    if (keyBut.textContent === ' ') {
                        keyBut.style.width = '285px';
                        keyBut.innerHTML = '&nbsp;';
                    }
                    keyRow.append(keyBut);
                    tmp = keyRow.innerHTML;
                    keyRow.innerHTML = tmp;
                }
                break;
        }
    }

    const textArea = document.querySelector('#textPlace');

    const keys = document.querySelectorAll('.keyBtn');

    let flag = false;

    document.addEventListener('click', function (el) {
        if (!el.target.classList.contains('keyBtn')) {
            return false
        }
        if (el.target === textArea) {
            return false
        }
        if (el.target.textContent === 'Caps Lock' && !flag) {
            el.target.style.background = 'green';
            flag = !flag;
            return false
        } else if (el.target.textContent === 'Caps Lock' && flag) {
            el.target.style.background = 'rgb(28, 35, 46)';
            flag = !flag;
            return false
        }
        if (el.target.textContent === 'ENTER') {
            textArea.innerHTML = textArea.textContent + `&#10;`
            let tmp = el.target.style.background;
            el.target.style.background = 'rgb(44,104,164)';
            setTimeout(function () {
                el.target.style.background = tmp;
            }, 100);
            return false
        }
        if (el.target.textContent === 'Backspace') {
            let select = textArea.selectionStart;
            textArea.textContent = textArea.textContent.replace(textArea.textContent.slice(textArea.selectionStart - 1),
                textArea.textContent.slice(textArea.selectionStart));
            textArea.selectionStart = select;
        } else if (el.target.textContent === 'DEL') {
            let select = textArea.selectionStart;
            console.log(select)
            textArea.textContent = textArea.textContent.replace(textArea.textContent.slice(textArea.selectionStart),
                textArea.textContent.slice(textArea.selectionStart + 1));
            textArea.selectionStart = select;
            console.log(textArea.selectionStart)
        } else if (flag) {
            if (el.target.classList.contains('subkey')) {
                textArea.textContent = textArea.textContent + `${el.target.parentElement.textContent[0].toUpperCase()}`
                textArea.selectionStart = textArea.selectionEnd = textArea.textContent.length;
            } else {
                textArea.textContent = textArea.textContent + `${el.target.textContent[0].toUpperCase()}`
                textArea.selectionStart = textArea.selectionEnd = textArea.textContent.length;
            }

        } else {
            if (el.target.classList.contains('subkey')) {
                textArea.textContent = textArea.textContent + `${el.target.parentElement.textContent[0].toLowerCase()}`
                textArea.selectionStart = textArea.selectionEnd = textArea.textContent.length;
            } else {
                textArea.textContent = textArea.textContent + `${el.target.textContent[0].toLowerCase()}`
                textArea.selectionStart = textArea.selectionEnd = textArea.textContent.length;
            }
        }


        let tmp = el.target.style.background;
        el.target.style.background = 'rgb(44,104,164)';
        setTimeout(function () {
            el.target.style.background = tmp;
        }, 100);
        textArea.focus();
    })
    let pushKeys = false;

    function visibleKeyboard(func, ...codes) {
        let pressed = new Set();

        document.addEventListener('keydown', function (event) {
            pressed.add(event.code);
            for (let code of codes) {
                if (!pressed.has(code)) {
                    return;
                }
            }
            pressed.clear();
            func();
        });
        document.addEventListener('keyup', function (event) {
            pressed.delete(event.code);
        });
    }

    visibleKeyboard(
        () => keyboardNone(),
        "ControlLeft",
        "AltLeft",
        "KeyZ"
    );

    function keyboardNone() {
        if (!pushKeys) {
            keyboard.style.display = 'none';
            pushKeys = true;
        } else {
            keyboard.style.display = 'flex';
            pushKeys = false;
        }
    }

    document.addEventListener('keydown', function (event) {
       keys.forEach((elem) => {
           // console.log(event.key)
           // console.log(elem.textContent[0])
           if(event.key === elem.firstChild.textContent.toLowerCase() || event.key === elem.firstChild.textContent.toUpperCase()){
               let tmp = elem.style.background;
               elem.style.background = 'rgb(44,104,164)';
               setTimeout(function () {
                   elem.style.background = tmp;
               }, 100);
           }
       } )
    });
})();
