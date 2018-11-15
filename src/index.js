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
const sticker = new Sticker('Visit tte museum', '', 'Moscow, Lomonosova street, 15');
sticker.create();
// sticker.hide();