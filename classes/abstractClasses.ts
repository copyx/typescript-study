abstract class AbstractPerson {
  protected _name: string = "Jake";
  abstract setName(name: string): void;
}

// new AbstractPerson(); // Error

class ExtendingPerson extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const ep = new ExtendingPerson();
ep.setName("Jake");
