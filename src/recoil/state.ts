import { atom } from 'recoil';

export const answerState = atom<Number[]>({
  key: 'answers',
  default: [],
});

export const stepState = atom<number>({
  key: 'step',
  default: 0,
});

export const resultState = atom<String>({
  key: 'result',
  default: '',
});
