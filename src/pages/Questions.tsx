import React from 'react';
import { useRecoilState } from 'recoil';
import { answerState, stepState } from '@/recoil/state';

import { test } from '@/constant/questions';

export const Questions = () => {
  const [answers, setAnswers] = useRecoilState(answerState);
  const [step, setStep] = useRecoilState(stepState);

  return <div>{test[step].question}</div>;
};
