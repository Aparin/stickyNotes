import { makeSticker } from './makeSticker';
import { movingTheDiv } from './movingTheDiv';

const out = (data) => {
    document.writeln(data, '<br />');
}

makeSticker({ id: 15, head: 'Super HeadLine', body: 'Some very intresting or important text' }).show(0, 200);
makeSticker({ id: 2 }).show(100, 150);

// movingTheDiv('2');
// movingTheDiv('15');