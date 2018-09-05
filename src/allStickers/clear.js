import out from '../out';

export default function clear() {

    if (!localStorage.getItem('stickers')) { alert("Нет сохранённых стикеров, удалять нечего..."); } else {
        var msg = 'Удалить без возможности восстановления?';
        var div = document.createElement('div');
        div.style.cssText = `
            text-align:center; padding:10px; position:fixed; background-color: white; 
            width:200px; height:70px; bottom:50%; right:50%; margin-right:-100px; margin-bottom:-20px; border: 1px dotted #000`;
        div.onclick = function(e) {
            if (e.target.value == 'Да') {
                for (var id = 1; true; id++) {
                    let sticker = document.getElementById(id);
                    if (!sticker === false) {
                        sticker.remove();
                    } else { break; }
                }

                localStorage.clear();
                this.parentNode.removeChild(this)
            } else {
                this.parentNode.removeChild(this)
            }
        }
        let inp = 'style="margin: 5px; padding: 3px; font-size: 14px;"';
        div.innerHTML = '<div>' + msg + `<div><input ${inp} type="button" value="Да"><input ${inp} type="button" value="Нет">`;

        document.body.appendChild(div);
    }

}