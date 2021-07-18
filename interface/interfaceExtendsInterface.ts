interface IPerson2 {
  name: string;
  age?: number;
};

interface IKorean extends IPerson2 {
  name: 'Jake';
  city: string;
}

const kr: IKorean = {
  name: 'Jake',
  city: 'Seoul',
};