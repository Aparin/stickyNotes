import './menu.css';
import filter from '../../model/filter';
import popup from '../popup/';

export default function panel() {

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
        popup({ msg: `<p>Галка в <span style="color: green;">зелёном квадрате</span> <br>
                    добавляет поиск по заголовкам. </p>
                    <p>В <span style="color:orange;">оранжевом</span> - добавляет поиск по содержимому</p>`, e: e, height: 160 });
    }
};