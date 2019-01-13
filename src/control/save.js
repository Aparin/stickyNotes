// import message from '../view/message/message';
import state from '../model/state';
export default function save() {
    localStorage.clear();

    for (let id = 1; state.getElement(id); id++) {
        const el = state.getElement(id);

        localStorage.setItem(`t${id}`, el.title);
        localStorage.setItem(`c${id}`, el.content);
        localStorage.setItem(`k${id}`, el.keyWords);
        localStorage.setItem(`a${id}`, el.adress);

    }
    // message(`Сохранено`);
}