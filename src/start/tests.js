import '../view/main/main.css';
import '../view/editSticker/editSticker.css';
import makeDOMelement from '../model/makeDOMElement';
import state from '../model/state';
import Sticker from '../model/Sticker';
import editSticker from '../view/editSticker/editSticker';
import xhrYaMap from '../control/xhrYaMap';

let module;
const testObj = { title: "New title" };
const testState = [
    { title: 'Title1', content: 'content1', keyWords: 'keyword1', adress: '' },
    { title: 'Title2', content: 'content2', keyWords: 'keyword2', adress: 'adress2' }
];

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
});

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
        it('Редактируем как обычный стикер', function() {
            sticker.full();
            assert.equal('editSticker', el.className);
        });

        const stickerMap = new Sticker(2);
        stickerMap.toDOM();
        stickerMap.full('map');
        const map = document.getElementById('2');
        it('Редактируем как map-стикер', function() {
            assert.equal('editMapSticker', map.className);
        });
        setTimeout(() => { // иначе удаляет раньше, чем отработали предыдущие блоки, особенно 'editMapSticker'
            el.remove();
            map.remove();
        }, 2000);
    } catch (e) {
        error(module, e);
    }
});

/***** editSticker *****/
/*
let id = 2;
let sticker2 = new Sticker(id);
sticker2.toDOM();
editSticker(id, '');
*/