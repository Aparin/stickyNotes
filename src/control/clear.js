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
                this.parentNode.removeChild(this)
            } else {
                this.parentNode.removeChild(this)
            }
        }
        let inp = 'style="margin: 5px; padding: 3px; font-size: 14px;"';
        div.innerHTML = `<input ${inp} 
        type="button" value="Да"><input ${inp} type="button" value="Нет">`;

        document.getElementById('popup').appendChild(div);
        /*
                div.style.cssText = `
                    font-size:14px; text-align:center; padding:10px; position:fixed; 
                    zIndex: 1000; background-color: white; width:200px; height:100px; 
                    top: 50px; left: 100px; margin-right:-100px; 
                    margin-bottom:-20px; border: 1px dotted #000`;
                   
                 */
    }
}