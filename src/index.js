import panel from './allStickers/panel';
import load from './transmission/load';
import listeners from './singleSticker/listeners';

panel();
load();
if (localStorage.getItem('stickers')) {
    load();
}
listeners();