function returnAny(message): any {
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
c.indexOf("0");