interface Person2 {
  name: string;
  age?: number;
};

function hello2(person: Person2) : void {
  console.log(`Hi, I'm ${person.name}`);
}

hello2({name: 'Jake', age: 33});
hello2({name: 'Jake'});