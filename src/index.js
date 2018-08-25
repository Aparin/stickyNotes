import { makeSticker } from './makeSticker';
import { panel } from './panel';
import { stickers } from './stickers';

panel();
//var zIndex = 2; // max 2.147.483.647 on desktop
// makeSticker({ id: 15, head: 'Super HeadLine', body: 'Some very intresting or important text' }).show(0, 200);
//makeSticker({ id: 2 }).show(100, 150);

let out = document.getElementById('out');
out.innerText = stickers[1].id;