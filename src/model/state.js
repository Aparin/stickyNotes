const state = {
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
    this.arr.push(obj);
  },
  setElement(id, obj) {
    this.arr[id - 1] = obj;
  },
  getElement(id) {
    return this.arr[id - 1];
  },
  insertElement(id, obj) {
    this.arr.splice(id - 1, 0, obj);
  },
  delElement(id) {
    this.arr.splice(id - 1, 1);
  },
};

export default state;
