import { makeSticker } from './makeSticker';
import { out } from './out';

function panel() {
    document.write(`
        <div id="panel" class="panel">
            <div id="plus" class="symbol" title="Добавить стикер">+</div>
            <div id="sort" class="symbol" title="Упорядочить">≚</div>
        </div>`);

    const plus = document.getElementById('plus');
    plus.addEventListener('click', function() {
        // out('click plus');
        makeSticker({ id: 15, head: 'Super HeadLine', body: 'Some very intresting or important text' }).show(0, 200);
    });


};

export { panel };