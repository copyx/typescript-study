interface Person4 {
  name: string;
  age: number;
  hello(): void;
};

const p41: Person4 = {
  name: 'Jake',
  age: 33,
  hello: function(): void {
    console.log(`Hi, I'm ${this.name}`);
  },
};

const p42: Person4 = {
  name: 'Jake2',
  age: 33,
  hello(): void {
    console.log(`Hi, I'm ${this.name}`);
  },
};

// const p43: Person4 = {
//   name: 'Jake',
//   age: 33,
//   hello: (): void => { // Arrow Function의 this에 객체가 바인딩되지 않아서 오류 발생
//     console.log(`Hi, I'm ${this.name}`);
//   },
// };

p41.hello();
p42.hello();