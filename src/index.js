import panel from './allStickers/panel';
import load from './allStickers/load';
import listeners from './singleSticker/listeners';
import out from './out';

panel();
if (localStorage.getItem('stickers')) {
    load();
}
listeners();