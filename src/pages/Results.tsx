import React, { useState, useEffect, useRef } from 'react';
import { useLottie } from 'lottie-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { Helmet } from 'react-helmet-async';
import { styled } from 'styled-components';

import { FloatingPopup } from '@/components/FloatingPopup';
import { answerState, stepState } from '@/recoil/state';
import { ResultTitle } from '@/constant/results';
import lottieAnimation from '@/assets/lottie.json';

export const Results = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const resetAnswerState = useResetRecoilState(answerState);
  const resetStepState = useResetRecoilState(stepState);
  const [showFloatingPopup, setShowFloatingPopup] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;
    const updateStatus = (img: HTMLImageElement) => {
      const isLoaded = img.complete && img.naturalHeight !== 0;
      isLoaded && setTimeout(() => setIsImageLoaded(isLoaded), 2500);
    };
    imgRef.current.addEventListener('load', () => updateStatus(imgRef.current as HTMLImageElement), { once: true });
  }, [imgRef]);

  const handleCopyClipBoard = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setShowFloatingPopup(true);
  };

  const handleRetry = () => {
    resetAnswerState();
    resetStepState();
    navigate('/');
  };

  const { View } = useLottie({
    animationData: lottieAnimation,
    loop: true,
  });

  return (
    <ResultWrapper>
      {id && (
        <Helmet>
          <title>{ResultTitle[id]}</title>
          <meta name="title" content={ResultTitle[id]} data-rh="true"></meta>
          <meta property="og:url" content={window.location.href} />
          <meta property="og:title" content={ResultTitle[id]} />
          <meta
            property="og:image"
            content={`https://mabeopsonyeo.github.io/test/images/result/${id}.webp`}
            data-rh="true"
          />
          <meta property="og:description" content="내가 마법소녀였다면 어떤 마법소녀였을까?" />
          <meta property="og:type" content="website" />
        </Helmet>
      )}
      <LottieWrapper isActive={!isImageLoaded}>{View}</LottieWrapper>
      <ResultContentWrapper isActive={isImageLoaded}>
        <img
          className="result_image"
          src={`https://mabeopsonyeo.github.io/test/images/result/${id}.webp`}
          alt={id}
          ref={imgRef}
        />
        <ShareButtonWrapper>
          {showFloatingPopup && <FloatingPopup text="링크 복사 완료! 결과를 공유 해보세요!" />}
          <div className="button_wrapper" onClick={() => handleCopyClipBoard()}>
            <div className="button_text">🪄 결과 공유하기</div>
            <div className="button_background"></div>
          </div>
          <div className="button_wrapper" onClick={() => handleRetry()}>
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

const ResultContentWrapper = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 100%;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
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
    cursor: pointer;

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

const LottieWrapper = styled.section<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? 'inherit' : 'none')};
`;
