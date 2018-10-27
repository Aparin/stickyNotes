export default function panel() {
    let panelContents = `
    <div id="panel" class="panel">
        <div id="example" class="symbol" style="border: 2px solid green; padding: 2px; margin-right:4px;" title="Загрузить примеры"><img src="img/example_32.png"></div>
        <div id="plus" class="symbol" title="Добавить стикер"><img src="img/plus_32.png"></div>
        <div id="saving" class="symbol" title="Сохранить всё"><img src="img/save_32.png"></div>    
        <div id="toServer" class="symbol" title="Сохранить на сервер"><img src="img/toServer_32.png"></div>     
        <div id="cleaning" class="symbol" title="Удалить всё"><img src="img/clear_32.png"></div>
    </div>`;

    document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', panelContents);
};