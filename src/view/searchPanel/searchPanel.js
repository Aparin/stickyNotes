import './searchPanel.css';
import mkEl from '../../model/makeDOMElement';

export default function searchPanel() {
    const node = mkEl('div', 'wrapSearchPanel');

    let checkGr = mkEl('div', 'checkGroup');
    const titleCheck = mkEl('input', '', '', 'titleCheck');
    titleCheck.type = 'checkbox';
    checkGr.appendChild(titleCheck);
    checkGr.appendChild(mkEl('label', '', 'Заголовки'));
    node.appendChild(checkGr);

    checkGr = mkEl('div', 'checkGroup');
    const contentCheck = mkEl('input', '', '', 'contentCheck');
    contentCheck.type = 'checkbox';
    checkGr.appendChild(contentCheck);
    checkGr.appendChild(mkEl('label', '', 'Содержимое'));
    node.appendChild(checkGr);

    node.appendChild(mkEl('div')); //перевод строки после чекбоксов

    const inp = mkEl('input', 'searchPanel', '', 'search');
    inp.type = 'text';
    inp.size = "25";
    inp.placeholder = "Поиск по ключевым словам";
    node.appendChild(inp);

    return node;
}