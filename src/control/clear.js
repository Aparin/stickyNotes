import popup from '../view/popup';

export default function clear(key, e) {
    if (!localStorage.getItem(key)) {
        alert("Нет сохранённых стикеров, удалять нечего...");
    } else {
        const msg = 'Удалить без возможности восстановления?';
        popup({ msg, e, height: 150 });
        const div = document.createElement('div');

        div.onclick = function(e) {
            if (e.target.value == 'Да') {
                for (let id = 1; true; id++) {
                    let sticker = document.getElementById(id);
                    if (!sticker === false) {
                        sticker.remove();
                    } else { break; }
                }
                localStorage.clear();
                popupArea.parentNode.removeChild(popupArea);
            } else {
                popupArea.parentNode.removeChild(popupArea);
            }
        }
        let inp = 'style="margin: 5px; padding: 3px; font-size: 14px;"';
        div.innerHTML = `
            <input ${inp} type="button" value="Да">
            <input ${inp} type="button" value="Нет">`;

        const popupArea = document.getElementById('popup');
        popupArea.appendChild(div);
    }
}