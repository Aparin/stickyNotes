import addMiniSigns from '../model/addMiniSigns';

export default function editSticker(id) {
    const sticker = document.getElementById(id);

    sticker.className = 'editSticker';
    let head = sticker.querySelector('h1').textContent;
    let body = sticker.querySelector('p').textContent;
    sticker.innerHTML = `    
    <img src="img/edit_10.png" class="editBig" title="Закрыть без изменений" 
    data-action="close">
    <img src="img/save_18.png" class="editBig" title="Применить изменения" 
    data-action="ok">
    <input type="text" style="width:250px" draggable="false" value="${head}" placeholder="Введите заголовок">
    <br />
    <textarea name="textArea" placeholder="Место для заметок">${body}</textarea>`;

    sticker.onclick = function(e) {
        const target = e.target;
        const action = target.getAttribute('data-action');

        if (action == 'ok') {
            head = sticker.getElementsByTagName('input')[0].value;
            body = sticker.getElementsByTagName('textArea')[0].value;
            sticker.innerHTML = '';
            if (sticker.className == 'editSticker') { sticker.className = 'newSticker'; };
            if (sticker.className == 'editMapSticker') { sticker.className = 'mapSticker' };
            sticker.appendChild(addMiniSigns());
            sticker.innerHTML += `<h1>${head}</h1><p>${body}</p>`;
        }
        if (action == 'close') {
            sticker.innerHTML = '';
            if (sticker.className == 'editSticker') { sticker.className = 'newSticker' };
            if (sticker.className == 'editMapSticker') { sticker.className = 'mapSticker' };
            sticker.appendChild(addMiniSigns());
            sticker.innerHTML += `<h1>${head}</h1><p>${body}</p>`
        }
    };
}