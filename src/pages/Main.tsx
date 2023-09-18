import React from 'react';
import styled from 'styled-components';
import logo from '@/assets/images/logo.png';
import { Button } from '@/components/Button';
import { useNavigate } from 'react-router-dom';

export const Main = () => {
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <MainContents>
        <img src={logo} width="313px" alt="" />
        <Button type="aiYellow" onClick={() => navigate('/questions')}>
          시작하기
        </Button>
      </MainContents>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MainContents = styled.div`
  width: 100%;
  padding: 24px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;
