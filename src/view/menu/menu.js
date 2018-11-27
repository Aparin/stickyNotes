export default function panel() {
    let panelContents = `
    <div id="panel" class="panel">

        <div id="example" class="button btn btn-success pull-left" title="Загрузить примеры">
        Примеры</div>

        <div id="plus" class="button btn btn-success pull-left" title="Добавить стикер">
        <span class="plusSign">➕&nbsp</span>стикер</div>

        <div id="plusMap" class="button btn btn-success pull-left" title="Добавить стикер-карту">
        <span class="plusSign">➕&nbsp</span>карта</div>

        <div id="saving" class="button btn btn-success pull-left" title="Сохранить  всё">
        Сохранить</div>    
 
        <div id="cleaning" class="button btn btn-success pull-left" title="Удалить  всё">
        Удалить</div>
        <div id='inform'></div>
    </div>`;

    document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', panelContents);
};