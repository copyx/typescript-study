// interface IPerson {
//   name: string;
//   say(): void;
//   cry(): string;
// }

interface IPerson {
  name: string;
  say(): void;
}

type PersonType = {
  name: string;
  say(): number;
};

let personInterface: IPerson = {} as any;
let personType: PersonType = {} as any;

personInterface.say = function(): void {
  console.log('void');
};
personType.say = function(): number {
  console.log('number');
  return 3;
}

personInterface = personType;
// personType = personInterface;

const resultVoid = personInterface.say();
const resultNumber = personType.say();

console.log(resultVoid, resultNumber)