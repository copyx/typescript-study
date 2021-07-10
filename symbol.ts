console.log(Symbol('foo') === Symbol('foo'));

const sym = Symbol();

const obj = {
    sym: 'value',
    [sym]: 'symbol value',
};

console.log(obj['sym']);
console.log(obj[sym]);