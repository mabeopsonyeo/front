import React from 'react';
import { useRecoilState } from 'recoil';
import { stepState, answerState, resultState } from '@/recoil/state';
import { QnA } from '@/constant/questions';
import { MBTI } from '@/interface/MBTI';

export const Questions = () => {
  const [answers, setAnswers] = useRecoilState(answerState);
  const [step, setStep] = useRecoilState(stepState);
  const [result, setResult] = useRecoilState(resultState);

  const getUserMbti = (userAnswers: MBTI[]) => {
    let mbti = result;
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
    setResult(mbti);
    return mbti;
  };

  return (
    <div>
      <div>{QnA[step].question}</div>
      {QnA[step].options.map((option, idx) => (
        <div
          key={`answer-${idx}`}
          onClick={() => {
            const updateAnswers: MBTI[] =
              answers.length < step + 1
                ? ([...answers, option.type] as MBTI[])
                : ([...answers.slice(0, step), option.type] as MBTI[]);
            setAnswers(updateAnswers);

            if (updateAnswers.length === QnA.length) {
              const mbti = getUserMbti(updateAnswers);
              return (window.location.href = `${process.env.PUBLIC_URL}/results/${mbti}`);
            }
            return setStep(step + 1);
          }}
        >
          {option.answer}
        </div>
      ))}
    </div>
  );
};
