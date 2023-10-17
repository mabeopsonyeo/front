import { MBTI } from '@/interface/MBTI';
import { atom } from 'recoil';

export const answerState = atom<Array<MBTI>>({
  key: 'answers',
  default: [] as MBTI[],
});

export const stepState = atom<number>({
  key: 'step',
  default: 0,
});
