interface HelloPerson {
  (name: string, age?: number): void;
};

// const helloPerson: HelloPerson = function(name: string, age: number) {
// 함수의 파라미터는 반공변적이어야 하므로 age가 필수로 바뀌면 대입 불가능
const helloPerson: HelloPerson = function(name: string) {
  console.log(`Hi, I'm ${name}`);
}

helloPerson('Jake');