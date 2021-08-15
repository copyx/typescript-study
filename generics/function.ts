type FunctionGeneric1 = <T>(a: T) => T;
const function1: FunctionGeneric1 = <T>(a: T): T => a;

interface FunctionGeneric2 {
  <T>(a: T): T;
}
const function2: FunctionGeneric2 = <T>(a: T): T => a;
