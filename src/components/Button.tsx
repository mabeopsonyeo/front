import theme from '@/styles/theme';
import React, { ReactNode, useMemo } from 'react';
import { styled } from 'styled-components';

interface ButtonProps {
  type?: 'hoshinoPurple' | 'aiYellow' | 'rubyPink' | 'aquaBlue';
  children: ReactNode | undefined;
  onClick?: any;
}

export const Button = (props: ButtonProps) => {
  const { type = 'hoshinoPurple', children, onClick } = props;
  const backgroundColor = `${theme.color[type].default}`;
  const hoverColor = useMemo(() => {
    if (type === 'aiYellow') {
      return `${theme.color[type].scale300}`;
    }
    if (type === 'rubyPink' || type === 'aquaBlue') {
      return `${theme.color[type].scale500}`;
    }
    return `${theme.color[type].scale900}`;
  }, [type]);

  return (
    <ButtonWrapper backgroundColor={backgroundColor} hoverColor={hoverColor} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ backgroundColor: string; hoverColor: string }>`
  width: 100%;
  min-height: 74px;
  border-radius: 16px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #fff;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: break-spaces;
  padding: 16px;
  word-break: keep-all;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }
`;
