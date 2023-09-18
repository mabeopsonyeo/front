import { MBTI } from '@/interface/MBTI';
import { atom } from 'recoil';

export const answerState = atom<Array<MBTI>>({
  key: 'answers',
  default: [],
});

export const stepState = atom<number>({
  key: 'step',
  default: 0,
});

export const resultState = atom<string>({
  key: 'result',
  default: '',
});
