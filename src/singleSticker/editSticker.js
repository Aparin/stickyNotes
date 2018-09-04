import out from '../out';
import addMiniSigns from './addMiniSigns';

export default function editSticker(id) {
    let sticker = document.getElementById(id);

    sticker.className = 'editSticker';
    let head = sticker.querySelector('h1').textContent;
    let body = sticker.querySelector('p').textContent;
    sticker.innerHTML = `    
    <img src="img/edit_10.png" class="editBig" title="Закрыть без сохранения" data-action="close">
    <img src="img/save_18.png" class="editBig" title="Применить изменения" data-action="ok">
    <input type="text" style="width:250px" value="${head}" onchange="document.getElementById('id').innerHTML = this.value"></input>
    <br />	
    <textarea style="width: 285px; height:260px;  margin: 3px; border: 0px;" name="textArea">${body}</textarea>`;


    sticker.onclick = function(e) {
        var target = e.target;
        var action = target.getAttribute('data-action');
        if (action == 'ok') {
            head = sticker.getElementsByTagName('input')[0].value;
            body = sticker.getElementsByTagName('textArea')[0].value;


            sticker.innerHTML = '';
            sticker.className = 'newSticker'
            sticker.appendChild(addMiniSigns());
            sticker.innerHTML += `<h1>${head}</h1><p>${body}</p>`;

        }
        if (action == 'close') {
            sticker.innerHTML = '';
            sticker.className = 'newSticker'
            sticker.appendChild(addMiniSigns());
            sticker.innerHTML += `<h1>${head}</h1><p>${body}</p>`
        }
    };

}

/*


    let area = document.getElementById('stickyNotes');

    let edit = document.createElement('div');
    edit.className = 'editSticker';
    edit.insertAdjacentHTML('beforeend', `    
        <img src="img/del_10.png" class="editBig" title="Закрыть без сохранения" data-action="close">
        <img src="img/save_18.png" class="editBig" title="Применить изменения" data-action="ok">
        <input type="text" style="width:250px" value="${head}" onchange="document.getElementById('id').innerHTML = this.value"></input>
        <br />	
        <textarea style="width: 285px; height:260px;  margin: 3px; border: 0px;" name="textArea">${body}</textarea>`);

    area.appendChild(edit);
*/
/*
    sticker.addEventListener('dblclick', function() {
        if (sticker.className === 'newSticker') {
            sticker.classList = 'editSticker';
            sticker.innerHTML = (
                `<input type="text" name="head" style="border: 0px; font-size:14px; width:290px; margin: 5px;" value="${head}" /><br />	
                <textarea style="width: 290px; height:265px;  margin: 3px; border: 0px;" name="textArea">${body}</textarea>`);

        } else {
            head = sticker.getElementsByTagName('h1')[0].value;
            body = sticker.getElementsByTagName('textArea')[0].value;

            sticker.innerHTML = `<h1>${head}</h1><div>${body}</div>`;
            sticker.className = 'newSticker';
        }

    });
    */