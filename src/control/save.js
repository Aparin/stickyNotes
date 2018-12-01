import message from '../view/message/message';
import objects from '../model/objects';
export default function save() {
    localStorage.clear();

    for (let id = 1; objects.getElement(id); id++) {
        const el = objects.getElement(id);

        localStorage.setItem(`t${id}`, el.title);
        localStorage.setItem(`c${id}`, el.content);
        localStorage.setItem(`k${id}`, el.keyWords);
        localStorage.setItem(`a${id}`, el.adress);

    }
    message(`Сохранено`);
}