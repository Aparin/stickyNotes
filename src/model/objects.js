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
    }
}

export default objects;