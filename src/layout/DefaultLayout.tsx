import React, { ReactNode } from 'react';
import styled from 'styled-components';

export const DefaultLayout = (props: { children: ReactNode | undefined }) => {
  return (
    <LayoutContainer>
      <LayoutWrapper>{props.children}</LayoutWrapper>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const LayoutWrapper = styled.div`
  width: 100%;
  @media screen and (min-width: 500px) {
    width: 375px;
  }
`;
