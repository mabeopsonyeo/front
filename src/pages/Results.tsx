import { Button } from '@/components/Button';
import { FloatingPopup } from '@/components/FloatingPopup';
import { ResultTitle } from '@/constant/results';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
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
      {id && (
        <Helmet>
          <title>눈을 떠보니 마법소녀가 되어있던 건에 대하여</title>
          <meta name="title" content="눈을 떠보니 마법소녀가 되어있던 건에 대하여" data-react-helmet="true" />
          <meta property="og:url" content={window.location.href} data-react-helmet="true" />
          <meta property="og:title" content={ResultTitle[id]} data-react-helmet="true" />
          <meta
            property="og:image"
            content={`${process.env.PUBLIC_URL}/images/result/${id}.webp`}
            data-react-helmet="true"
          />
          <meta property="og:description" content="내가 마법소녀였다면 어떤 마법소녀였을까?" data-react-helmet="true" />
          <meta property="og:type" content="website" data-react-helmet="true" />
        </Helmet>
      )}
      <ResultContentWrapper>
        <img className="result_image" src={`${process.env.PUBLIC_URL}/images/result/${id}.webp`} alt={id} />
        <ShareButtonWrapper>
          {showFloatingPopup && <FloatingPopup text="링크 복사 완료! 결과를 공유 해보세요!" />}
          <ShareButton onClick={() => handleCopyClipBoard()}>결과 공유하기</ShareButton>
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

const ShareButton = styled.div`
  color: ${({ theme }) => theme.color.aquaBlue.scale500};
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  text-decoration: underline;
`;

const ResultContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  .result_image {
    width: 100%;
  }
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
