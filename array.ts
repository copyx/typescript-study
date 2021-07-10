let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// 위의 방식을 더 많이 사용.
//  아래 방식은 JSX, TSX에서 충돌이 발생할 가능성 있음.

let list3: (number | string)[] = [1, 2, 3, 'a'];