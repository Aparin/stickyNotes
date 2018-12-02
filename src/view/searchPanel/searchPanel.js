import mkEl from '../../model/makeDOMElement';
import filter from '../../model/filter';

export default function searchPanel() {
    const node = mkEl('div', 'wrapSearchPanel');

    let checkGr = mkEl('div', 'checkGroup');
    const titleCheck = mkEl('input', '');
    titleCheck.type = 'checkbox';
    checkGr.appendChild(titleCheck);
    checkGr.appendChild(mkEl('label', '', 'Заголовки'));
    node.appendChild(checkGr);

    checkGr = mkEl('div', 'checkGroup');
    const contentCheck = mkEl('input', '');
    contentCheck.type = 'checkbox';
    checkGr.appendChild(contentCheck);
    checkGr.appendChild(mkEl('label', '', 'Содержимое'));
    node.appendChild(checkGr); /* */

    node.appendChild(mkEl('div')); //перевод строки после чекбоксов

    const inp = mkEl('input', 'searchPanel');
    inp.type = 'text';
    inp.size = "25";
    inp.placeholder = "Поиск по ключевым словам";
    node.appendChild(inp);

    return node;
}