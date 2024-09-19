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
} from "./commonStyles";

export default function Section2() {
  return (
    <section css={ctn}>
      <div css={img_ctn}>
        <div css={img_inner_ctn}>
          <img
            src="/assets/images/homePage/section2main.png"
            alt="section2main"
            css={img_main}
          />
          <img
            src="/assets/images/homePage/section2Float1.png"
            alt="section2Float1"
            css={img_float1}
          />
          <img
            src="/assets/images/homePage/section2Float2.png"
            alt="section2Float2"
            css={img_float2}
          />
          <img
            src="/assets/images/homePage/section2Float3.png"
            alt="section2Float3"
            css={img_float3}
          />
          <img
            src="/assets/images/homePage/section2Float4.png"
            alt="section2Float4"
            css={img_float4}
          />
          <span css={img_bg}></span>
        </div>
      </div>
      <div css={text_ctn}>
        <p css={text_top}>
          가맹본부 설립 희망<span css={text_block}>직영점 1년 이상</span>
        </p>
        <div css={text_mid}>
          <div css={question}>
            <p className="separate">q.</p>
            <p>
              현재하고 있는 사업, 가맹본부{" "}
              <br css={br_desktop} className="br_desktop" />
              설립으로 시작할 수 있을까요?
            </p>
          </div>
          <div css={answer}>
            <p className="separate">a.</p>
            <p>
              전문가가 직접 분석 및 진단하여
              <br css={br_desktop} className="br_desktop" /> 최적화된 솔루션을
              제공해드립니다.
            </p>
          </div>
        </div>
        <div css={text_bottom}>
          <p className="separate">n.</p>
          <p>
            신속한 가맹본부 설립에 필요한 레서피, 지식재산권(상품, 디자인,
            <br css={br_desktop} className="br_desktop" />
            특허 등), 세무, 회계, 법률 등
            <span className="high_light"> 원스톱으로 진행해드립니다.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

const ctn = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 308px 210px;
  width: 100%;
  background: linear-gradient(180deg, #fefeff 0%, #f5f6f9 100%);
  @media (max-width: 1919px) {
    padding: 240px 180px;
    gap: 100px;
  }
  @media (max-width: 1440px) {
    padding: 220px 120px;
    gap: 100px;
  }
  @media (max-width: 1280px) {
    padding: 200px 80px;
  }
  @media (max-width: 1024px) {
    padding: 160px 100px;
    gap: 100px;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    gap: 160px;
    padding: 160px 80px;
  }
  @media (max-width: 767px) {
    padding: 80px;
  }
  @media (max-width: 375px) {
    justify-content: start;
    align-items: start;
    padding: 80px 20px 108px;
  }
`;

const img_ctn = css`
  width: 100%;
  position: relative;
  @media (max-width: 1919px) {
    display: flex;
    align-items: center;
    justify-content: start;
  }
  @media (max-width: 950px) {
    order: 2;
    width: 70%;
  }
  @media (max-width: 375px) {
    width: 80%;
    padding-left: 12px;
  }
`;

const img_inner_ctn = css`
  height: 100%;
  width: auto;
  position: relative;
  @media (max-width: 375px) {
    width: 100%;
  }
`;

const img_main = css`
  position: relative;
  z-index: 2;
  height: auto;
  width: 100%;
  max-width: 617px;
`;

const img_bg = css`
  display: block;
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
  max-width: 680px;
  max-height: 680px;
  border-radius: 50%;
  background: linear-gradient(180deg, #ffcfeb 0.04%, #9da6f6 84.59%);
  filter: blur(100px);
  @media (max-width: 1919px) {
    width: 90%;
  }
  @media (max-width: 375px) {
    left: 50%;
    transform: translate(-50%, -50%);
    width: 283px;
    height: 282px;
    flex-shrink: 0;
    border-radius: 50%;
    background: linear-gradient(180deg, #ffcfeb 0.04%, #9da6f6 84.59%);
    filter: blur(49.85994338989258px);
  }
`;

const img_float1 = css`
  position: absolute;
  top: calc(50% - 45%);
  left: calc(50% - 35%);
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 100%;
  max-width: 26%;
  animation: ${float} 3s 0.3s ease-in-out infinite;
  @media (max-width: 1919px) {
    max-width: 34%;
    top: calc(50% - 42%);
    left: calc(50% - 30%);
  }
`;

const img_float2 = css`
  position: absolute;
  top: calc(50% - 60%);
  right: calc(50% - 43%);
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 20%;
  height: auto;
  z-index: 1;
  animation: ${float} 3s ease-in-out infinite;
  @media (max-width: 1919px) {
    max-width: 28%;
    top: calc(50% - 55%);
    right: calc(50% - 75%);
  }
  @media (max-width: 375px) {
    max-width: 30%;
    top: calc(50% - 55%);
    right: calc(50% - 80%);
  }
`;

const img_float3 = css`
  position: absolute;
  top: calc(50% - 7%);
  right: calc(50% - 41%);
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 20%;
  z-index: 1;
  animation: ${float} 3s 0.8s ease-in-out infinite;
  @media (max-width: 1919px) {
    max-width: 24%;
    top: calc(50% - 5%);
    right: calc(50% - 68%);
  }
  @media (max-width: 375px) {
    max-width: 28%;
    right: calc(50% - 73%);
  }
`;

const img_float4 = css`
  position: absolute;
  top: calc(50% + 38%);
  right: calc(50% - 35%);
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 100%;
  max-width: 30%;
  animation: ${float} 3s 0.4s ease-in-out infinite;
  @media (max-width: 1919px) {
    max-width: 36%;
    top: calc(50% + 40%);
    right: calc(50% - 60%);
  }
  @media (max-width: 375px) {
    max-width: 38%;
  }
`;

const text_ctn = css`
  width: 100%;
  max-width: 662px;
  @media (max-width: 950px) {
    order: 1;
    text-align: center;
  }
`;
