import React, { ReactNode, useMemo } from 'react';
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
      imageURL = `${process.env.PUBLIC_URL}/images/background/mainBackgroundImage.jpg`;
    }
    if (matchQuestions) {
      imageURL =
        (step + 1) % 2 === 0
          ? `${process.env.PUBLIC_URL}/images/background/evenQuestionsBackgroundImage.jpg`
          : `${process.env.PUBLIC_URL}/images/background/oddQuestionsBackgroundImage.jpg`;
    }
    if (matchResults) {
      imageURL = `${process.env.PUBLIC_URL}/images/background/resultBackgroundImage.jpg`;
    }
    return imageURL;
  }, [matchMain, matchQuestions, matchResults, step]);

  return (
    <LayoutContainer backgroundImageURL={backgroundImageURL}>
      <LayoutWrapper>{props.children}</LayoutWrapper>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div<{ backgroundImageURL: string }>`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImageURL }) => backgroundImageURL});
`;

const LayoutWrapper = styled.div`
  width: 100%;
  padding: 24px;
  @media screen and (min-width: 500px) {
    width: 423px;
    display: flex;
    align-items: center;
  }
`;
