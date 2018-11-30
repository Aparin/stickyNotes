const objects = {
    arr: [],

    add(obj) {
        this.arr.push(obj)
    },
    get() {
        return this.arr;
    },
    getElement(id) {
        return this.arr[id - 1];
    },
    setElenent(id, obj) {
        this.arr[id - 1] = obj;
    }
}

export default objects;