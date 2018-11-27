import menu from './view/menu/menu';
import load from './transmission/load';
import listeners from './control/listeners';

menu();
load();
if (localStorage.getItem('stickers')) {
    load();
}
listeners();