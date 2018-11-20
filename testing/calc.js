export default class Calc {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    sum(a, b) {
        if (a === undefined || b === undefined) {
            a = this.a;
            b = this.b;
            // alert('a= ' + a + 'b= ' + b);
        }
        return a + b;
    }
}