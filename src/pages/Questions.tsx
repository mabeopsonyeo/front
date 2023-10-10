import React from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { stepState, answerState, resultState } from '@/recoil/state';
import { QnA } from '@/constant/questions';
import { MBTI } from '@/interface/MBTI';
import { Button } from '@/components/Button';

type ButtonColor = 'hoshinoPurple' | 'aiYellow' | 'rubyPink' | 'aquaBlue';

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

  const oddButtons: Array<ButtonColor> = ['hoshinoPurple', 'rubyPink'];
  const evalButtons: Array<ButtonColor> = ['aiYellow', 'aquaBlue'];

  return (
    <BlurBackground>
      <Content>{QnA[step].question}</Content>
      <ButtonWrapper>
        {QnA[step].options.map((option, idx) => (
          <Button
            key={`answer-${idx}`}
            type={step % 2 === 0 ? evalButtons[idx] : oddButtons[idx]}
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
          </Button>
        ))}
      </ButtonWrapper>
      <BottomSection>
        <ProgressBar>
          <div>🔮</div>
          <progress value={step} max={11} />
        </ProgressBar>
        <div className="copyright">Designed by Freepik</div>
      </BottomSection>
    </BlurBackground>
  );
};

const BlurBackground = styled.div`
  @media screen and (min-width: 1024px) {
    width: 375px;
  }
  position: relative;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &::after {
    @media screen and (min-width: 1024px) {
      width: 375px;
    }
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.3);
    filter: blur(5px);
    z-index: -1;
  }
`;

const Content = styled.div`
  color: #282827;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  height: 220px;
  display: flex;
  align-items: center;
  cursor: default;
  white-space: break-spaces;
  word-break: keep-all;
`;

const ButtonWrapper = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  margin-bottom: 46px;
`;
const BottomSection = styled.div`
  position: absolute;
  width: 100%;
  bottom: 24px;
  color: #fff;
  text-align: center;

  .copyright {
    font-size: 10px;
  }
`;

const ProgressBar = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 0px 32px;
  height: 32px;
  justify-items: center;
  font-size: 16px;

  progress {
    width: 100%;
    appearance: none;
    &::-webkit-progress-bar {
      background: rgba(249, 240, 255, 0.7);
      border-radius: 50px;
      overflow: hidden;
    }
    &::-webkit-progress-value {
      background: rgba(131, 85, 224, 0.7);
    }
  }
`;
