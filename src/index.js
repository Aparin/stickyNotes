import out from './out';
import panel from './allStickers/panel';
import load from './transmission/load';
import listeners from './singleSticker/listeners';
import Sticker from './singleSticker/Sticker';
import Calc from '../testing/Calc'

panel();
if (localStorage.getItem('stickers')) {
    load();
}
listeners();

// const calc = new Calc(2, 5);
// out(calc.sum(10, 20));
const sticker = new Sticker();
out(sticker.name + sticker.type);