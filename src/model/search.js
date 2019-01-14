import filter from './filter';
import popup from '../view/popup';
import guide from '../view/guide/guide';

export default function search() {
    const toSearch = () => {
        const text = searchArea.value;
        const tCheck = titleCheck.checked;
        const cCheck = contentCheck.checked;
        if (tCheck && cCheck) { search.placeholder = 'По ключам, заголовкам, содержимому'; } else
        if (tCheck) { search.placeholder = 'По ключам и заголовкам'; } else
        if (cCheck) { search.placeholder = 'По ключам и содержимому'; } else {
            search.placeholder = 'Поиск по ключевым словам';
        }
        filter(text, tCheck, cCheck);
    }
    searchArea.oninput = function(e) {
        toSearch();
    }
    titleCheck.onchange = function(e) {
        toSearch();
    }
    contentCheck.onchange = function(e) {
        toSearch();
    }
    question.onclick = function() {
        guide();
    }
}