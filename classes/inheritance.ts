class Parent {
  constructor(protected _name: string, private _age: number) {}
  public print(): void {
    console.log(`Hi, I'm ${this._name} and ${this._age} years old.`);
  }
}

const p = new Parent("Jake", 33);
p.print();

class Child extends Parent {
  public gender = "male";
  constructor(age: number) {
    super("Fake", age);
  }
}

const child = new Child(1);
// const child2 = new Child("Jake", 33); // Error because of constructor overriding
child.print();
