import testing from './research'
import menu from './view/menu/menu';
import load from './control/load';
import listeners from './control/listeners';

menu();
load();
if (localStorage.getItem('stickers')) {
    load();
}
listeners();