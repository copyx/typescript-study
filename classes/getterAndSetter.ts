class CPerson4 {
  constructor(public _name: string, public age: number) {}
  get name() {
    console.log("get");
    return this._name;
  }
  set name(n: string) {
    console.log("set");
    this._name = n;
  }
}

const cp4 = new CPerson4("Jake", 33);
console.log(cp4.name);
cp4.name = "test";
console.log(cp4.name);
