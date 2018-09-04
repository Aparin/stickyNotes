import panel from './allStickers/panel';
import load from './allStickers/load';
import listeners from './singleSticker/listeners';

panel();
if (localStorage.getItem('stickers')) {
    load();
}
listeners();