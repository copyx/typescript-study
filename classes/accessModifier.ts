class CPerson2 {
  public name: string = "Jake";
  private age!: number;
  protected sex!: string;
}

const cp2 = new CPerson2();
// cp2.age = 2; // Error
console.log(cp2);
