import '../view/main/main.css';
import '../view/editSticker/editSticker.css';
import makeDOMelement from '../model/makeDOMElement';
import state from '../model/state';
import Sticker from '../model/Sticker';
import editSticker from '../view/editSticker/editSticker';
import xhrYaMap from '../control/xhrYaMap';

let module;
const testObj = { title: "New title" };
const testState = [];
for (let i = 0; i < 4; i += 2) {

    testState[i] = { title: 'Title' + i, content: 'content' + i, keyWords: 'keyword' + i, adress: '' };

    const j = i + 1;
    testState[j] = { title: 'Title' + j, content: 'content' + j, keyWords: 'keyword' + j, adress: 'adress' + j };
}

const error = (module, err) => {
    console.log(`В коде модуля "${module}" ошибка "${err.name}": ${err.message}`);
    document.body.insertAdjacentHTML('afterend',
        `<p style="color: red">В коде модуля <b>"${module}"</b> ошибка "${err.name}": ${err.message}
        </p>`);
    // throw "stop";
}

/****************** MODEL *****************/
/***** makeDOMelement  *****/
module = 'makeDOMelement';
describe(module, function() {
    try {
        it('Проверка создания узла', () => {
            assert.equal(makeDOMelement('р', 'red', 'Hi, world').outerHTML, '<р class="red">Hi, world</р>');
            assert.equal(makeDOMelement('div', 'red', 'Hi, world').outerHTML, '<div class="red">Hi, world</div>');
            assert.equal(makeDOMelement('div', 'red').outerHTML, '<div class="red"></div>');
        });
    } catch (e) {
        error(module, e);
    }
})

/***** state  *****/
module = 'state';
describe(module, function() {
    try {
        it('Запись и чтение массива', () => {
            state.set(testState);
            assert.equal(testState, state.get());
        });
        it('Добавление элемента в конец массива', () => {
            state.add(testObj);
            const stLng = state.get().length;
            assert.equal(state.getElement(stLng), testObj);
        });
        it('Запись и чтение элемента', () => {
            state.setElement(testState[0]);
            assert.equal(state.getElement(1), testState[0]);
        });
        it('Вставка элемента', () => {
            state.insertElement(1, testObj);
            assert.equal(state.getElement(1), testObj);
        });
        it('Удаление элемента', () => {
            state.delElement(1);
            assert.equal(state.getElement(1), testState[0]);
        });
    } catch (e) {
        error(module, e);
    }
});

/****************** VIEW ******************/
/***** Sticker *****/
module = 'Sticker';
describe(module, function() {
    try {
        state.set(testState);

        const sticker = new Sticker(1);
        it('Создание нового стикера', () => {
            assert.equal(sticker.element.title, state.getElement(1).title);
        });

        sticker.toDOM();
        const el = document.getElementById('1');
        it('Отправляем в DOM', () => {
            assert.equal(true, !!el);
        });
        it('Скрываем стикер', () => {
            sticker.hide();
            assert.equal('none', el.style.display);
        });
        it('Отображаем стикер', () => {
            sticker.show();
            assert.equal('block',
                window.getComputedStyle(el, null).getPropertyValue('display'));
        });
        it('Открываем как обычный стикер', function() {
            sticker.full();
            assert.equal('editSticker', el.className);
        });

        const stickerMap = new Sticker(2);
        stickerMap.toDOM();
        stickerMap.full('map');
        const map = document.getElementById('2');
        it('Открываем как map-стикер', function() {
            assert.equal('editMapSticker', map.className);
        });
        setTimeout(() => { // иначе удаляет раньше, чем отработали предыдущие блоки, особенно 'map-стикер'
            el.remove();
            map.remove();
        }, 2000);
    } catch (e) {
        error(module, e);
    }
});

/***** editSticker *****/
module = 'editSticker';
describe(module, () => {
    let id = 3;
    let sticker3 = new Sticker(id);
    sticker3.toDOM();
    editSticker(id, '');
    const el3 = document.getElementById(id);
    try {
        it(`Проверка значка 'закрыть'`, () => {
            assert.equal('close', el3.children[0].getAttribute('data-action'));
        })
        it(`Проверка значка 'дискета'`, () => {
            assert.equal('ok', el3.children[1].getAttribute('data-action'));
        })
        it(`Проверка поля 'Заголовок'`, () => {
            assert.equal('INPUT', el3.children[2].nodeName);
        })
        it(`Проверка поля 'Место для заметок'`, () => {
            assert.equal('TEXTAREA', el3.children[3].nodeName);
        })
        it(`Проверка поля 'keyWords'`, () => {
            assert.equal('INPUT', el3.children[4].nodeName);
        })
        setTimeout(() => {
            el3.remove();
        }, 200);
    } catch (e) {
        error(module, e);
    }
});

module = 'editSticker / map';
describe(module, () => {
    id = 4;
    const sticker4 = new Sticker(id);
    sticker4.toDOM();
    editSticker(id, '');
    const el4 = document.getElementById(id);
    try {
        it(`Map. Проверка значка 'закрыть'`, () => {
            assert.equal('close', el4.children[0].getAttribute('data-action'));
        })
        it(`Map. Проверка значка 'дискета'`, () => {
            assert.equal('ok', el4.children[1].getAttribute('data-action'));
        })
        it(`Map. Проверка поля 'Заголовок'`, () => {
            assert.equal('INPUT', el4.children[2].nodeName);
        })
        it(`Map. Проверка поля 'Место для заметок'`, () => {
            assert.equal('TEXTAREA', el4.children[3].nodeName);
        })
        it(`Map. Проверка поля 'Адрес'`, () => {
            assert.equal('INPUT', el4.children[4].nodeName);
        })
        it(`Map. Проверка значка 'reload'`, () => {
            assert.equal('IMG', el4.children[5].nodeName);
        })
        it(`Map. Проверка блока 'Карта'`, () => {
            assert.equal('map', el4.children[6].id);
        })
        it(`Map. Проверка поля 'keyWords'`, () => {
            assert.equal('INPUT', el4.children[7].nodeName);
        })
        setTimeout(() => {
            el4.remove();
        }, 2000);
    } catch (e) {
        error(module, e);
    }
});

/***** menu *****/
module = 'menu';
describe(module, function() {
    try {
        state.set(testState);

        const sticker = new Sticker(1);
        it('Создание нового стикера', () => {
            assert.equal(sticker.element.title, state.getElement(1).title);
        });

        sticker.toDOM();
        const el = document.getElementById('1');
        it('Отправляем в DOM', () => {
            assert.equal(true, !!el);
        });
        it('Скрываем стикер', () => {
            sticker.hide();
            assert.equal('none', el.style.display);
        });
        it('Отображаем стикер', () => {
            sticker.show();
            assert.equal('block',
                window.getComputedStyle(el, null).getPropertyValue('display'));
        });
        it('Открываем как обычный стикер', function() {
            sticker.full();
            assert.equal('editSticker', el.className);
        });

        const stickerMap = new Sticker(2);
        stickerMap.toDOM();
        stickerMap.full('map');
        const map = document.getElementById('2');
        it('Открываем как map-стикер', function() {
            assert.equal('editMapSticker', map.className);
        });
        setTimeout(() => { // иначе удаляет раньше, чем отработали предыдущие блоки, особенно 'map-стикер'
            el.remove();
            map.remove();
        }, 2000);
    } catch (e) {
        error(module, e);
    }
});