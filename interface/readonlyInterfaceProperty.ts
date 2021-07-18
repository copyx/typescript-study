interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: 'Jake',
  gender: 'male',
};

// p81.gender = 'female'; // Readonly 프로퍼티라 변경 불가 에러