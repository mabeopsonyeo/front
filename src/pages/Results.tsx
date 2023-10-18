import { FloatingPopup } from '@/components/FloatingPopup';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

export const Results = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [showFloatingPopup, setShowFloatingPopup] = useState(false);

  const handleCopyClipBoard = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setShowFloatingPopup(true);
  };
  return (
    <ResultWrapper>
      <ResultContentWrapper>
        <img className="result_image" src={`${process.env.PUBLIC_URL}/images/result/${id}.webp`} alt={id} />
        <ShareButtonWrapper>
          {showFloatingPopup && <FloatingPopup text="링크 복사 완료! 결과를 공유 해보세요!" />}
          <div className="button_wrapper" onClick={() => handleCopyClipBoard()}>
            <div className="button_text">🪄 결과 공유하기</div>
            <div className="button_background"></div>
          </div>
          <div className="button_wrapper" onClick={() => navigate('/')}>
            <div className="button_text">🧙🏻‍♀️ 다시 검사하기</div>
            <div className="button_background"></div>
          </div>
        </ShareButtonWrapper>
      </ResultContentWrapper>
      <BottomSection>
        <div className="copyright">Designed by Freepik</div>
      </BottomSection>
    </ResultWrapper>
  );
};

const ResultWrapper = styled.div`
  font-size: 0;
  display: flex;
  height: calc((calc(var(--vh, 1vh) * 100)) - 80px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ResultContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  .result_image {
    width: 100%;
  }
`;
const ShareButtonWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 48px;
  gap: 12px;
  position: relative;

  .button_wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .button_background {
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.color.rubyPink.default};
      opacity: 0.5;
      filter: blur(1.5px);
      border-radius: 16px;
    }
    .button_text {
      z-index: 1;
      font-size: 14px;
      text-align: center;
      position: absolute;
      color: #f8f7f5;
    }
  }
`;
const BottomSection = styled.div`
  position: absolute;
  width: 100%;
  bottom: 24px;
  color: #fff;
  text-align: center;

  .copyright {
    font-size: 10px;
    opacity: 50%;
  }
`;
