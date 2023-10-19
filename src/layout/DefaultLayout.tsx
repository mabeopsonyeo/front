import React, { ReactNode, useEffect, useMemo } from 'react';
import { useMatch } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { stepState } from '@/recoil/state';

export const DefaultLayout = (props: { children: ReactNode | undefined }) => {
  const matchMain = useMatch('/');
  const matchQuestions = useMatch('/questions');
  const matchResults = useMatch('/results/:id');

  const step = useRecoilValue(stepState);

  const backgroundImageURL = useMemo(() => {
    let imageURL = '' as string;
    if (matchMain) {
      imageURL = `${process.env.PUBLIC_URL}/images/background/mainBackgroundImage.webp`;
    }
    if (matchQuestions) {
      imageURL =
        (step + 1) % 2 === 0
          ? `${process.env.PUBLIC_URL}/images/background/evenQuestionsBackgroundImage.webp`
          : `${process.env.PUBLIC_URL}/images/background/oddQuestionsBackgroundImage.webp`;
    }
    if (matchResults) {
      imageURL = `${process.env.PUBLIC_URL}/images/background/resultBackgroundImage.webp`;
    }
    return imageURL;
  }, [matchMain, matchQuestions, matchResults, step]);

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`); //"--vh"라는 속성으로 정의해준다.
  }

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', () => setScreenSize());
  }, []);

  return (
    <LayoutContainer backgroundImageURL={backgroundImageURL}>
      <div className="background_image" />
      <LayoutWrapper>{props.children}</LayoutWrapper>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div<{ backgroundImageURL: string }>`
  display: flex;
  justify-content: center;
  min-height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  position: relative;

  .background_image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${({ backgroundImageURL }) => backgroundImageURL});
    background-attachment: fixed;
  }
`;

const LayoutWrapper = styled.div`
  width: 100%;
  padding: 24px;
  z-index: 1;
  @media screen and (min-width: 500px) {
    width: 423px;
    display: flex;
    align-items: center;
  }
`;
