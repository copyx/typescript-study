declare const maybe: unknown;

const aNumber: number = maybe;

if (maybe === true) { // Type Guard
    const aBoolean: boolean = maybe;
    // const aString: string = maybe; // 에러
}

if (typeof maybe === 'string') { // typeof Type Guard
    const aString: string = maybe;
    // const aBoolean: boolean = maybe; // 에러
}