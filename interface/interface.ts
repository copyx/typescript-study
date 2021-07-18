interface Person1 {
  name: string;
  age: number;
};

function hello1(person: Person1) : void {
  console.log(`Hi, I'm ${person.name}`);
}

const p1: Person1 =  {
  name: 'Jake',
  age: 33,
};

hello1(p1);