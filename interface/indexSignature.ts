interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;
};

function hello3(person: Person3): void {
  console.log(`Hi, I'm ${person.name}`);
}

hello3({
  name: 'Jake',
  age: 33,
});
hello3({
  name: 'Jake2',
  systers: ['Ann', 'Anne', 'Anna'],
});
