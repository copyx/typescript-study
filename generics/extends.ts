class PersonExtends<T extends string | number> {
  private _name: T;
  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends("Jake");
new PersonExtends(33);
// new PersonExtends(true); // Error
