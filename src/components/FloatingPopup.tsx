import React from 'react';
import styled from 'styled-components';

interface FloatingPopupProps {
  text: string;
}

export const FloatingPopup = (props: FloatingPopupProps) => {
  const { text } = props;

  return (
    <FloatingPopupWrapper>
      <div className="info_text">{text}</div>
      <div className="popup_background" />
    </FloatingPopupWrapper>
  );
};

const FloatingPopupWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  animation: 3s ease 0.3s normal 1 fadeinout;
  -webkit-animation: 3s ease 0.3s normal 1 fadeinout;
  opacity: 0;
  position: absolute;
  top: -47px;

  .info_text {
    color: #454441;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    z-index: 1;
  }

  .popup_background {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: rgba(255, 255, 255, 0.7);
    filter: blur(1.5px);
    border-radius: 16px;
  }
  .popup_background:after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-top-color: rgba(255, 255, 255, 0.7);
    border-bottom: 0;
    margin-left: -8px;
    margin-bottom: -8px;
  }

  @keyframes fadeinout {
    0%,
    100% {
      opacity: 0;
    }
    25%,
    50%,
    75% {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeinout {
    0%,
    100% {
      opacity: 0;
    }
    25%,
    50%,
    75% {
      opacity: 1;
    }
  }
`;
