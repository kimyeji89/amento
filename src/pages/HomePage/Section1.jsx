/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  float,
  br_desktop,
  text_bottom,
  text_block,
  text_top,
  text_mid,
  question,
  answer,
  br_mobile,
} from "./commonStyles";

export default function Section1() {
  return (
    <section css={ctn}>
      <div css={text_ctn}>
        <p css={text_top}>
          예비 가맹본부 준비
          <span css={text_block}>사업(직영점 등) 1년 미만 or 미운영</span>
        </p>
        <div css={text_mid}>
          <div css={question}>
            <p className="separate">q.</p>
            <p>
              프랜차이즈 가맹본부,
              <br css={br_desktop} className="br_desktop" />
              어떻게 준비해야 할까요?
            </p>
          </div>
          <div css={answer}>
            <p className="separate">a.</p>
            <p>
              전문가가 맞춤형으로 직접
              <br css={br_desktop} className="br_desktop" /> 설계해드립니다.
            </p>
          </div>
        </div>
        <div css={text_bottom}>
          <p className="separate">n.</p>
          <p>
            예비 가맹본부에게 필수적인 레서피, 지식재산권
            <br css={br_desktop} /> (상표, 디자인,특허 등), 세무, 회계, 법률 등
            <br css={br_desktop} />
            <br css={br_mobile} />
            <span className="high_light"> 최적화된 방법을 제안드립니다.</span>
          </p>
        </div>
      </div>
      <div css={img_ctn}>
        <img
          src="/assets/images/homePage/section1main.png"
          alt="section1main"
          css={img_main}
        />
        <img
          src="/assets/images/homePage/section1Float1.png"
          alt="section1Float1"
          css={img_float1}
        />
        <img
          src="/assets/images/homePage/section1Float2.png"
          alt="section1Float2"
          css={img_float2}
        />
        <img
          src="/assets/images/homePage/section1Float3.png"
          alt="section1Float3"
          css={img_float3}
        />
        <span className="bg" css={img_bg}></span>
      </div>
    </section>
  );
}

const ctn = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  padding: 240px 160px 240px 210px;
  width: 100%;
  max-height: 1080px;
  background: linear-gradient(180deg, #fefeff 0%, #f5f6f9 100%);
  @media (min-width: 1921px) {
    justify-content: center;
    gap: 240px;
  }
  @media (max-width: 1919px) {
    padding: 240px 140px;
    max-height: 100%;
    gap: 80px;
  }
  @media (max-width: 1440px) {
    padding: 220px 120px;
  }
  @media (max-width: 1280px) {
    padding: 200px 80px;
  }
  @media (max-width: 1024px) {
    padding: 160px 100px;
    gap: 40px;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    gap: 80px;
    padding: 160px 80px;
  }
  @media (max-width: 767px) {
    padding: 80px;
  }
  @media (max-width: 375px) {
    padding: 50px 20px 67px;
  }
`;

const text_ctn = css`
  width: 100%;
  height: auto;
  @media (min-width: 1921px) {
    width: auto;
  }
  @media (max-width: 950px) {
    text-align: center;
  }
`;

const img_ctn = css`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1921px) {
    width: auto;
  }
  @media (max-width: 950px) {
    width: 70%;
  }
  @media (max-width: 375px) {
    width: 90%;
  }
`;

const img_main = css`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 694px;
  max-height: 641px;
  height: auto;
  object-fit: cover;
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
  border-radius: 680px;
  background: linear-gradient(180deg, #ffcfeb 0.04%, #9da6f6 84.59%);
  filter: blur(100px);
  @media (max-width: 1919px) {
    width: 98%;
    height: 98%;
  }
  @media (max-width: 1440px) {
    width: 96%;
    height: 96%;
  }
  @media (max-width: 1280px) {
    width: 94%;
    height: 94%;
  }
  @media (max-width: 1024px) {
    width: 90%;
    height: 90%;
  }
  @media (max-width: 375px) {
    width: 283px;
    height: 282px;
    border-radius: 283px;
    background: linear-gradient(180deg, #ffcfeb 0.04%, #9da6f6 84.59%);
    filter: blur(49.85994338989258px);
  }
`;

const img_float1 = css`
  position: absolute;
  top: calc(50% - 35%);
  left: calc(50% - 35%);
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 100%;
  max-width: 20%;
  height: auto;
  object-fit: cover;
  animation: ${float} 3s ease-in-out infinite;
  @media (max-width: 1919px) {
    max-width: 19%;
    left: calc(50% - 32%);
  }
  @media (max-width: 1440px) {
    max-width: 18%;
  }
  @media (max-width: 1280px) {
    max-width: 18.5%;
  }
  @media (max-width: 1024px) {
    max-width: 18%;
  }
  @media (max-width: 375px) {
    top: calc(50% - 45%);
    max-width: 25%;
  }
`;

const img_float2 = css`
  position: absolute;
  top: calc(50% - 32%);
  left: calc(50% + 36%);
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 50%;
  height: auto;
  object-fit: cover;
  z-index: 2;
  animation: ${float} 3s 0.5s ease-in-out infinite;
  @media (max-width: 1919px) {
    max-width: 46%;
    top: calc(50% - 31%);
    left: calc(50% + 33%);
  }
  @media (max-width: 1440px) {
    max-width: 44%;
    left: calc(50% + 32%);
  }
  @media (max-width: 1280px) {
    max-width: 43%;
    top: calc(50% - 30%);
  }
  @media (max-width: 1024px) {
    max-width: 42.5%;
  }
  @media (max-width: 375px) {
    max-width: 50%;
    left: calc(50% + 36%);
  }
`;

const img_float3 = css`
  position: absolute;
  top: calc(50%);
  left: calc(50% - 52%);
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 23%;
  height: auto;
  object-fit: cover;
  z-index: 2;
  animation: ${float} 3s 0.2s ease-in-out infinite;
  border-radius: 30px;
  box-shadow: 0px 50px 80px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 1919px) {
    max-width: 20%;
    top: calc(50% - 1.5%);
    left: calc(50% - 50%);
  }
  @media (max-width: 1440px) {
    max-width: 19%;
    top: calc(50% - 1.5%);
    border-radius: 20px;
  }
  @media (max-width: 1280px) {
    max-width: 18.5%;
    border-radius: 16px;
  }
  @media (max-width: 1024px) {
    max-width: 18%;
    border-radius: 14px;
  }
  @media (max-width: 375px) {
    max-width: 24%;
    border-radius: 10px;
    top: calc(50% - 10%);
    left: calc(50% - 48%);
  }
`;
