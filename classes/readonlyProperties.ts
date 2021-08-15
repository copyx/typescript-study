class CPerson5 {
  public readonly name: string = "Jake";
  private readonly contry: string = "Korea";

  f() {
    // this.country = 'USA'; // Error
  }
}

const cp5 = new CPerson5();
// cp5.name = 'Fake'; // Error
