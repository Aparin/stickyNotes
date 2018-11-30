const objects = {
    arr: [],

    set(objs) {
        this.arr = objs;
    },

    get() {
        return this.arr;
    },

    add(obj) {
        this.arr.push(obj)
    },

    getElement(id) {
        return this.arr[id - 1];
    },

    setElenent(id, obj) {
        this.arr[id - 1] = obj;
    }
}

export default objects;