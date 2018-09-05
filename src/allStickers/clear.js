import out from '../out';

export default function clear() {
    /*
    var msg = 'Удалить без возможности восстановления?';
    var div = document.createElement('div');
    div.style.cssText = "text-align:center;padding:10px;position:fixed;width:200px;height:100px;bottom:50%;right:50%;margin-right:-100px;margin-bottom:-20px;border:1px dotted #000"
    div.onclick = function(e) {
        var t = e ? e.target : window.event.srcElement;
        if (t.tagName == 'INPUT') {
            t.value == 'Да' && func('да');
            this.parentNode.removeChild(this)
        }
    }
    div.innerHTML = '<div>' + msg + '<div><input type="button" value="Да"><input type="button" value="Нет">'
    document.body.appendChild(div);
*/


    if (confirm("Удалить без возможности восстановления?")) {

        for (var id = 1; true; id++) {
            let sticker = document.getElementById(id);
            if (!sticker === false) {
                sticker.remove();
            } else { break; }
        }

        localStorage.clear();
    }

}