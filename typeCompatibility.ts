class Person {}
class Developer extends Person {
  coding() {}
}
class StartupDeveloper extends Developer {
  burning() {}
}

function tellme(f: (d: Developer) => Developer) {}

tellme((d: Developer): Developer => {
  return new Developer();
})
tellme((d: Person): Developer => {
  return new Developer();
})
// strictFunctionTypes 옵션 켜져있으면 에러!
// tellme((d: StartupDeveloper): Developer => {
//   return new Developer();
// })