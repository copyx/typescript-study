class Static {
  private static CITY = "Seoul";
  public hello() {
    console.log("hi", Static.CITY);
  }
  public change() {
    Static.CITY = "LA";
  }
}

const one = new Static();

one.hello();
one.change();

const another = new Static();

one.hello();
