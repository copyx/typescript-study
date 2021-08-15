(() => {
  interface TestType {
    name: string;
    age: number;
  }

  const p: TestType = {
    name: "Jake",
    age: 33,
  };

  // function getProp(obj: TestType, key: keyof TestType): TestType[keyof TestType] {
  //   return obj[key];
  // }

  function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  getProp(p, "age");

  function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
  }

  setProp(p, "age", 33);
})();
