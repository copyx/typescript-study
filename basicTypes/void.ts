function returnVoid(message: string): void {
    console.log(message);
    // return 1; // 리턴 타입이 void인데 다른 타입을 반환하면 에러
    return;
}

const r = returnVoid("without return"); // r은 void 타입. void 타입은 아무것도 못함.