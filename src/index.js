import panel from './panel';
import load from './load';
import listeners from './listeners';

panel();
if (localStorage.getItem('stickers')) {
    load();
}
listeners();