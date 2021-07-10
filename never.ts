function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error('failed');
}

function infiniteLoop(): never {
    while(true) {
        ;
    }
}

declare const b: string | number;

if (typeof b !== 'string') { // union type과 타입 가드를 통해 타입을 number로 한정지음.
    b;
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

type ObjectIndexable = Indexable<{}>;
type StringIndexable = Indexable<string>;