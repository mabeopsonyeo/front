import React, { ReactNode, useMemo } from 'react';
import { useMatch } from 'react-router-dom';
import styled from 'styled-components';
import mainBackgroundImage from '@/assets/images/mainBackgroundImage.jpg';
import evenQuestionsBackgroundImage from '@/assets/images/evenQuestionsBackgroundImage.jpg';
import oddQuestionsBackgroundImage from '@/assets/images/oddQuestionsBackgroundImage.jpg';

export const DefaultLayout = (props: { children: ReactNode | undefined }) => {
  const matchMain = useMatch('/');
  const matchQuestions = useMatch('/questions');
  const matchResults = useMatch('/results');

  const backgroundImageURL = useMemo(() => {
    let imageURL = '' as string;
    if (matchMain) {
      imageURL = mainBackgroundImage;
    }
    if (matchQuestions) {
      imageURL = evenQuestionsBackgroundImage;
    }
    if (matchResults) {
      imageURL = oddQuestionsBackgroundImage;
    }
    return imageURL;
  }, [matchMain, matchQuestions, matchResults]);

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
  @media screen and (min-width: 500px) {
    width: 375px;
  }
`;
