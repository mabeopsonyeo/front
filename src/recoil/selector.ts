import { selector } from 'recoil';
import { answerState } from '@/recoil/state';

export const resultSelector = selector({
  key: 'resultSelector',
  get: ({ get }) => {
    const userAnswers = get(answerState);
    let mbti = '';
    const mbtiObj = {
      E: 0,
      I: 0,
      N: 0,
      S: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    };
    userAnswers.map((value) => (mbtiObj[value] += 1));
    for (let [key, value] of Object.entries(mbtiObj)) {
      if (value > 1) mbti += key;
    }
    return mbti;
  },
});
