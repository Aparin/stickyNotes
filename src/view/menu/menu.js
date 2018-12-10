import './menu.css';

import makeEl from '../../model/makeDOMElement';
import seacrhPanel from '../searchPanel/searchPanel';
import filter from '../../model/filter';
import popup from '../popup/';

export default function panel() {

    const area = document.getElementById('stickyNotes');

    const menu = makeEl('div', 'panel', '', 'panel');
    menu.classList.add('col-lg-12');

    const mkBtn = (id, title, text) => {
            const btn = makeEl('div', '', text, id);
            const btnStyle = "button btn btn-success pull-left";
            btnStyle.split(' ').forEach(function(style) {
                btn.classList.add(style);
            });
            btn.title = title;
            menu.appendChild(btn);
        }
        /*

        mkBtn("example", "Загрузить примеры", 'Примеры');
        mkBtn("plus", "Добавить стикер", "➕ стикер");
        mkBtn("plusMap", "Добавить стикер-карту", "➕ карта");
        mkBtn("saving", "Сохранить всё", "Сохранить");
        mkBtn("cleaning", "Удалить всё", "Удалить");
        
    menu.appendChild(seacrhPanel());
    menu.appendChild(makeEl('div', '', '', 'inform'));
    area.appendChild(menu);
    */
    const toSearch = () => {
        const text = search.value;
        const tCheck = titleCheck.checked;
        const cCheck = contentCheck.checked;
        if (tCheck && cCheck) { search.placeholder = 'По ключам, заголовкам, содержимому'; } else
        if (tCheck) { search.placeholder = 'По ключам и заголовкам'; } else
        if (cCheck) { search.placeholder = 'По ключам и содержимому'; } else {
            search.placeholder = 'Поиск по ключевым словам';
        }
        filter(text, tCheck, cCheck);
    }
    search.oninput = function(e) {
        toSearch();
    }
    titleCheck.onchange = function(e) {
        toSearch();
    }
    contentCheck.onchange = function(e) {
        toSearch();
    }
    question.onclick = function(e) {
            popup(`<p>Галка в <span style="color: green;">зелёном квадрате</span> <br>
                    добавляет поиск по заголовкам. </p>
                    <p>В <span style="color: #ffc107;">жёлтом</span> - добавляет поиск по содержимому</p>`, 160);
        }
        // area.appendChild(makeEl('div', 'clear'));

};