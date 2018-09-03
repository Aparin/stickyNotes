import { panel } from './panel';
import load from './load';
import out from './out';
import listener from './listener';

panel();
if (localStorage.getItem('stickers')) {
    load();
}
listener();