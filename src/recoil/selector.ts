import { selector } from 'recoil';
import { answerState } from '@/recoil/state';
import { QnA } from '@/constant/questions';

export const resultSelector = selector({
  key: 'resultSelector',
  get: ({ get }) => {
    const userAnswers = get(answerState);
    if (userAnswers.length < QnA.length) return '';

    const mbtiObj: { [key: string]: number } = {
      E: 0,
      I: 0,
      N: 0,
      S: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    };
    let mbti = '';
    userAnswers.map((value) => (mbtiObj[value] += 1));
    for (let [key, value] of Object.entries(mbtiObj)) {
      if (value > 1) mbti += key;
    }
    return mbti;
  },
});
