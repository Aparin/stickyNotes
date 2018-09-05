export default function panel() {
    let panelContents = `
    <div id="panel" class="panel">
        <div id="plus" class="symbol" title="Добавить стикер"><img src="img/plus_32.png"></div>
        <div id="saving" class="symbol" title="Сохранить всё"><img src="img/save_32.png"></div>       
        <div id="cleaning" class="symbol" title="Удалить всё"><img src="img/clear_32.png"></div>
    </div>`;

    document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', panelContents);
};