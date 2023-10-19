import { useLottie } from 'lottie-react';
import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import lottieAnimation from '@/assets/lottie.json';
import { resultSelector } from '@/recoil/selector';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

export const Loading = () => {
  const navigate = useNavigate();
  const result = useRecoilValue(resultSelector);
  const { View } = useLottie({
    animationData: lottieAnimation,
    loop: true,
  });

  useEffect(() => {
    setTimeout(() => {
      navigate(`/results/${result}`);
    }, 2500);
  }, []);

  return <ResultWrapper>{View}</ResultWrapper>;
};

const ResultWrapper = styled.div`
  font-size: 0;
  display: flex;
  min-height: calc((calc(var(--vh, 1vh) * 100)) - 48px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
