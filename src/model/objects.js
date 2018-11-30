const objects = {
    arr: [],

    // all stickers
    set(objs) {
        this.arr = objs;
    },

    get() {
        return this.arr;
    },

    // single sticker
    add(obj) {
        this.arr.push(obj)
    },
    del(id) {
        this.arr.splice(id - 1, 1)
    },
    getElement(id) {
        return this.arr[id - 1];
    },

    setElenent(id, obj) {
        this.arr[id - 1] = obj;
    }
}

export default objects;