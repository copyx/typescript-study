// message가 any 타입으로 암시적 추론되서 에러
// function returnAny(message): any {
function returnAny(message: any): any {
    console.log(message);
}

const any1 = returnAny('리턴은 아무거나');
any1.toString();

let looselyTyped: any = {a: 1};
const d = looselyTyped.a;

function leakingAny(obj: any) {
    // const a = obj.num;
    const a: number = obj.num;
    const b = a + 1;
    return b;
}

const c = leakingAny({num: 0});
// c.indexOf("0"); // c는 number 형식이라 indexOf 사용 불가능