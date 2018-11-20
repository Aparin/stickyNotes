export default function panel() {
    let panelContents = `
    <div id="panel" class="panel">
        <div id="example" class="button" title="Загрузить примеры">
        Примеры</div>

        <div id="plus" class="button" title="Добавить стикер">
        <span class="plusSign">➕&nbsp</span>стикер</div>

        <div id="plusMap" class="button" title="Добавить стикер-карту">
        <span class="plusSign">➕&nbsp</span>карта</div>

        <div id="saving" class="button" title="Сохранить  всё">
        Сохранить</div>    
        <!--
        <div id="toServer" class="button" title="Сохранить на сервер">
        <img src="img/toServer_32.png"></div>    
        -->
         
        <div id="cleaning" class="button" title="Удалить  всё">
        Удалить</div>
        <div id='inform'></div>
    </div>`;

    document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', panelContents);
};