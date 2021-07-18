const person1 = { name: "jake", age: 12 };

// person1은 'object' 타입이 아닌 '{ name: string, age: number }'형식의 object 타입

const person2 = Object.create({ name: "jake", age: 12 });

function optionalProps(obj: { a: string; b?: string }) {}

// 둘 다 괜춘쓰
optionalProps({ a: "aa" });
optionalProps({ a: "aa", b: "bb" });