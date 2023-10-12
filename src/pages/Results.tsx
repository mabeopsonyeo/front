import { Button } from '@/components/Button';
import { FloatingPopup } from '@/components/FloatingPopup';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

export const Results = () => {
  let { id } = useParams();
  const [showFloatingPopup, setShowFloatingPopup] = useState(false);

  const handleCopyClipBoard = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setShowFloatingPopup(true);
  };
  return (
    <ResultWrapper>
      <img width="100%" src={`${process.env.PUBLIC_URL}/images/result/${id}.png`} alt={id} />
      <ShareButtonWrapper>
        {showFloatingPopup && <FloatingPopup text="링크 복사 완료! 결과를 공유 해보세요!" />}
        <Button type="aiYellow" onClick={() => handleCopyClipBoard()}>
          결과 공유하기
        </Button>
      </ShareButtonWrapper>
      <BottomSection>
        <div className="copyright">Designed by Freepik</div>
      </BottomSection>
    </ResultWrapper>
  );
};

const ResultWrapper = styled.div`
  font-size: 0;
  display: flex;
  gap: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ShareButtonWrapper = styled.div`
  width: 100%;
  position: relative;

  button {
    min-height: 60px !important;
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
