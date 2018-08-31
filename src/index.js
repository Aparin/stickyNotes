import { panel } from './panel';
import { load } from './load';
import out from './out';

panel();
if (localStorage.getItem('stickers')) {
    load();
}