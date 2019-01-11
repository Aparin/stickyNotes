import makeDOMelement from '../model/makeDOMElement';
import state from '../model/state';
import { testObj, testState } from '../start/testData';
import error from '../start/testError';


/****************** MODEL *****************/
/***** makeDOMelement  *****/
let module = 'makeDOMelement';
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