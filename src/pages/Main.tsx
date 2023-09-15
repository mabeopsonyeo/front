import React from 'react';
import styled from 'styled-components';

export const Main = () => {
  return <StyledDiv>Main</StyledDiv>;
};

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.color.hoshinoPurple.default};
`;
