function helloArray<T>(message: T[]): T {
  return message[0];
}

helloArray(["hello", "world"]);
helloArray(["hello", 5]);

function helloTuple<T, U>(message: [T, U]): T {
  return message[0];
}

helloTuple(["hello", "world"]);
helloTuple(["hello", 5]);
