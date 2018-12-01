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
    delElement(id) {
        this.arr.splice(id - 1, 1)
    },
    getElement(id) {
        return this.arr[id - 1];
    },

    setElement(id, obj) {
        this.arr[id - 1] = obj;
    },
    insertElement(id, obj) {
        this.arr.splice(id - 1, 0, obj);
    }
}

export default objects;