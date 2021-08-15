class GenericClass<T> {
  private _name: T;
  constructor(name: T) {
    this._name = name;
  }
}

new GenericClass("Jake");
new GenericClass<string>("Jake");
// new GenericClass<string>(11); // Error
