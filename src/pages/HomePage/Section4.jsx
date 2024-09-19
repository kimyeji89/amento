/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  br_desktop,
  br_mobile,
  text_block,
  text_mid,
  question,
  answer,
  white,
  center,
} from "./commonStyles";

export default function Section4() {
  return (
    <section css={ctn} className="ctn">
      <div css={text_ctn}>
        <p css={text_top}>
          <span>가맹본부 운영 컨설팅</span>
          <span css={text_block}>가맹본부 운영중</span>
        </p>
        <div css={text_mid}>
          <div css={[question, white, center]}>
            <p className="separate_mobile">Q.</p>
            <p>
              <span className="separate_desktop">Q.</span> 우리 프랜차이즈,
              어떻게 하면
              <br css={br_mobile} />더 성공할 수 있을까요?
            </p>
          </div>
          <div css={[answer, center]}>
            <p className="separate_mobile">A.</p>
            <p>
              <span className="separate_desktop">A.</span> 전문가가 가맹본부의
              현향을 직접 진단 및 분석하여 개선방안을 제공해 드립니다.
            </p>
          </div>
        </div>
        <p css={[text_bottom, white]}>
          운영중인 가맹본부에 필요한 레서피, 브랜딩, 마케팅, 지식재산권 등
          <br css={br_desktop} className="br_desktop" />
          <span className="high_light">
            &nbsp; 최적화된 성장 솔루션을 제안드립니다.
          </span>
        </p>
      </div>
      <img
        src="/assets/images/homePage/section4.png"
        alt="section4"
        css={section4_img}
      />
    </section>
  );
}

const ctn = css`
  display: flex;
  align-items: end;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 1080px;
  box-sizing: border-box;
  padding-top: 140px;
  background-color: #05040a;
  @media (max-width: 950px) {
    max-height: 900px;
  }
  @media (max-width: 767px) {
    padding-top: 80px;
    max-height: 860px;
  }
  @media (max-width: 499px) {
    padding-top: 80px;
    max-height: 800px;
  }
  @media (max-width: 375px) {
    padding: 80px 24px 0;
    max-height: 788px;
  }
`;

const text_ctn = css`
  width: 100%;
  position: absolute;
  top: 140px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1;
  box-sizing: border-box;
  @media (max-width: 1280px) {
    padding: 0 100px;
  }
  @media (max-width: 767px) {
    top: 80px;
    padding: 0 80px;
  }
  @media (max-width: 499px) {
    padding: 0 60px;
  }
  @media (max-width: 375px) {
    padding: 0px;
    align-items: start;
    width: calc(100% - 48px);
    position: absolute;
    top: 80px;
    left: 24px;
    transform: translateX(0);
  }
`;

const text_top = css`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 34px;
  word-break: keep-all;
  @media (max-width: 1919px) {
    font-size: 23px;
  }
  @media (max-width: 1440px) {
    font-size: 22px;
  }
  @media (max-width: 1280px) {
    font-size: 21px;
  }
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 950px) {
    font-size: 19px;
    margin-bottom: 24px;
  }
  @media (max-width: 499px) {
    flex-direction: column;
  }
  @media (max-width: 375px) {
    font-size: 14px;
    flex-direction: column;
    align-items: start;
  }
`;

const section4_img = css`
  width: auto;
  max-height: 907px;
  object-fit: cover;
  @media (max-width: 950px) {
    max-height: 600px;
  }
  @media (max-width: 499px) {
    max-height: 510px;
  }
  @media (max-width: 375px) {
    max-height: 500px;
  }
  @media (max-width: 320px) {
    max-height: 420px;
  }
`;

const text_bottom = css`
  color: #292929;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
  word-break: keep-all;
  .high_light {
    color: #ec0d0d;
    font-weight: 700;
    line-height: 140%;
  }
  @media (max-width: 1919px) {
    font-size: 19px;
  }
  @media (max-width: 1440px) {
    font-size: 18px;
  }
  @media (max-width: 1280px) {
    font-size: 17px;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 950px) {
    justify-content: center;
    text-align: center;
  }
  @media (max-width: 375px) {
    display: inline;
    font-size: 14px;
    text-align: left;
    br {
      display: none;
    }
  }
`;
