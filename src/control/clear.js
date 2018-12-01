export default function clear() {
    if (!localStorage.getItem('t1')) {
        alert("Нет сохранённых стикеров, удалять нечего...");
    } else {
        const msg = 'Удалить без возможности восстановления?';
        const div = document.createElement('div');
        div.style.cssText = `
            font-size:14px; text-align:center; padding:10px; position:fixed; 
            background-color: white; width:200px; height:100px; 
            top: 50px; left: 100px; margin-right:-100px; 
            margin-bottom:-20px; border: 1px dotted #000`;
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
        div.innerHTML = '<div>' + msg + `<div><input ${inp} 
        type="button" value="Да"><input ${inp} type="button" value="Нет">`;

        document.body.appendChild(div);
    }
}