import makeDOMelement from '../model/makeDOMElement';
import state from '../model/state';
import Sticker from '../model/Sticker';
import editSticker from '../view/editSticker/editSticker';

let module;
const testObj = { title: "New title" };
const testState = [
    { title: 'Title1', content: 'content1', keyWords: 'keyword1', adress: 'adress1' },
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
        it('Проверка создания узла', function() {
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
        it('Запись и чтение массива', function() {
            state.set(testState);
            assert.equal(testState, state.get());
        });
        it('Добавление элемента в конец массива', function() {
            state.add(testObj);
            const stLng = state.get().length;
            assert.equal(state.getElement(stLng), testObj);
        });
        it('Запись и чтение элемента', function() {
            state.setElement(testState[0]);
            assert.equal(state.getElement(1), testState[0]);
        });
        it('Вставка элемента', function() {
            state.insertElement(1, testObj);
            assert.equal(state.getElement(1), testObj);
        });
        it('Удаление элемента', function() {
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
        setTimeout(() => { // иначе удаляет раньше, чем отработали предыдущие блоки 
            el.remove();
        }, 100);
    } catch (e) {
        error(module, e);
    }
});