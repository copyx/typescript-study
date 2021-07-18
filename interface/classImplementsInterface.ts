interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
};

class CPerson implements IPerson1 {
  name: string;
  age?: number;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`Hi, I'm ${this.name}`)
  }
}

const cPerson: IPerson1 = new CPerson('Jake');
cPerson.hello();