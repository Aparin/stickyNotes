import { makeSticker } from './makeSticker';

const out = (data) => {
    document.writeln(data, '<br />');
}

makeSticker({ id: 15, head: 'Super HeadLine', body: 'Some very intresting or important text' }).show();
//makeSticker();
makeSticker({ id: 2 }).show(150, 150);