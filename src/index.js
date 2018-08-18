import { makeSticker } from './makeSticker';

const out = (data) => {
    document.writeln(data, '<br />');
}

out(makeSticker(15, 'newClass', 'Super HeadLine', 'Some very intresting or important text'));
out('test!!');