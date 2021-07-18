declare const maybe: unknown;

// const aNumber: number = maybe; // unknown은 타입 가드가 없는 상태에서 대입 불가능

if (maybe === true) { // Type Guard
    const aBoolean: boolean = maybe;
    // const aString: string = maybe; // 에러
}

if (typeof maybe === 'string') { // typeof Type Guard
    const aString: string = maybe;
    // const aBoolean: boolean = maybe; // 에러
}