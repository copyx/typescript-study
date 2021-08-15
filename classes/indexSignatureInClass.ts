class Students {
  [index: string]: "male" | "female";
}

const a = new Students();
a.jake = "male";
a.fake = "male";

console.log(a);
