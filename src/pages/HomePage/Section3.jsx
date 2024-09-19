/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  float,
  br_desktop,
  br_mobile,
  text_bottom,
  text_block,
  text_top,
  text_mid,
  question,
  answer,
} from "./commonStyles";

export default function Section3() {
  return (
    <section css={ctn}>
      <div css={text_ctn}>
        <p css={text_top}>
          가맹본부 사업 전환
          <span css={text_block}>가맹본부 또는 가맹점 1년 이상 운영</span>
        </p>
        <div css={text_mid}>
          <div css={question}>
            <p className="separate">q.</p>
            <p>
              지금하고 있는 가맹사업이
              <br css={br_desktop} className="br_desktop" /> 잘 안돼요.{" "}
              <br css={br_mobile} className="br_mobile" />
              어떻게 하면 좋을까요?
            </p>
          </div>
          <div css={answer}>
            <p className="separate">a.</p>
            <p>
              전문가가 직접 현장 방문하여
              <br css={br_desktop} className="br_desktop" /> 고민을
              해결해드립니다.
            </p>
          </div>
        </div>
        <div css={text_bottom}>
          <p className="separate">n.</p>
          <p>
            가맹본부 전환에 필요한 레서피, 브랜딩, 지식재산권{" "}
            <br css={br_desktop} className="br_desktop" />
            (상표, 디자인, 특허등), 세무, 회계, 법 마케팅 등
            <br css={br_desktop} className="br_desktop" />
            <br css={br_mobile} />
            <span className="high_light">최적화된 솔루션을 제안드립니다.</span>
          </p>
        </div>
      </div>
      <div css={img_ctn}>
        <img
          src="/assets/images/homePage/section3main.png"
          alt="section3main"
          css={img_main}
        />
        <img
          src="/assets/images/homePage/section3float1.png"
          alt="section3float1"
          css={img_float1}
        />
        <span css={img_bg}></span>
      </div>
    </section>
  );
}
const ctn = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 308px 0;
  width: 100%;

  background: linear-gradient(180deg, #fefeff 0%, #f5f6f9 100%);
  @media (max-width: 1919px) {
    padding: 240px 0;
  }
  @media (max-width: 1440px) {
    padding: 220px 0;
  }
  @media (max-width: 1280px) {
    padding: 200px 0;
  }
  @media (max-width: 1024px) {
    padding: 160px 0;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    gap: 100px;
    padding: 160px 80px;
  }
  @media (max-width: 767px) {
    padding: 80px;
  }
  @media (max-width: 375px) {
    padding: 80px 0px;
  }
`;

const text_ctn = css`
  box-sizing: border-box;
  padding: 0 82px 0 210px;
  width: 100%;
  @media (max-width: 1919px) {
    padding: 0 82px 0 160px;
  }
  @media (max-width: 1440px) {
    padding: 0 82px 0 120px;
  }
  @media (max-width: 1280px) {
    padding: 0 60px 0 80px;
  }
  @media (max-width: 1024px) {
    padding: 0 60px 0 80px;
  }
  @media (max-width: 950px) {
    padding: 0;
  }
  @media (max-width: 375px) {
    padding: 0 20px;
  }
`;

const img_ctn = css`
  position: relative;
  width: 100%;
  height: auto;
  @media (max-width: 1919px) {
    box-sizing: border-box;
    padding-right: 20px;
  }
  @media (max-width: 950px) {
    width: 90%;
  }
  @media (max-width: 375px) {
    padding-right: 0px;
  }
`;

const img_main = css`
  position: relative;
  width: 100%;
  height: auto;
  z-index: 1;
`;

const img_bg = css`
  display: block;
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 680px;
  height: 680px;
  border-radius: 50%;
  background: linear-gradient(180deg, #ffcfeb 0.04%, #9da6f6 84.59%);
  filter: blur(100px);
  @media (max-width: 1919px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 375px) {
    width: 283px;
    height: 282px;
    border-radius: 50%;
    background: linear-gradient(180deg, #ffcfeb 0.04%, #9da6f6 84.59%);
    filter: blur(49.85994338989258px);
  }
`;

const img_float1 = css`
  position: absolute;
  width: 100%;
  max-width: 28%;
  top: calc(50% + 20%);
  left: calc(50% - 18%);
  transform: translate(-50%, -50%);
  z-index: 2;
  object-fit: cover;
  animation: ${float} 3s ease-in-out infinite;
  @media (max-width: 1919px) {
    max-width: 27%;
    top: calc(50% + 24%);
  }
  @media (max-width: 1440px) {
    max-width: 26%;
    top: calc(50% + 26%);
  }
  @media (max-width: 375px) {
    max-width: 34%;
    top: calc(50% + 26%);
  }
`;
