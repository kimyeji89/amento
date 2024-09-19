/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Box from "./Box";

export default function IntroSection3() {
  return (
    <section css={section_wrap}>
      <Box
        firstText={"실전형 창업&비즈니스 전문가의"}
        secondText={"원스톱 지원 상담"}
      />
      <div css={box_wrap}>
        <div css={box_1}>
          <img
            src="/assets/images/companyIntroPage/platform.png"
            alt="platform"
          />
          <p css={number}>01</p>
          <p css={des}>
            미래를 설계하고 성장을 지원하는
            <br />
            <span>전문 창업 플랫폼</span>
          </p>
        </div>
        <div css={box_2}>
          <img
            src="/assets/images/companyIntroPage/handshaking.png"
            alt="hand"
          />
          <p css={number_2}>02</p>
          <p css={des}>
            다양한 창업 및 가맹본부 설립 경험을 갖춘
            <br />
            <span css={pro_span}>전문가 그룹</span>
            <br />
            <p css={pro_p}>(경영, 법률, 세무, 지식재산권 등)</p>
          </p>
        </div>
        <div css={box_3}>
          <img src="/assets/images/companyIntroPage/graph.png" alt="graph" />
          <p css={number}>03</p>
          <p css={des}>
            최적화된 비즈니스모델 전략
            <br />
            <span>설계 및 지원</span>
          </p>
        </div>
      </div>
    </section>
  );
}

const section_wrap = css`
  display: flex;
  padding: 100px 0;
  flex-direction: column;
  align-items: center;
  gap: 34px;

  background: #f5f6f9;

  @media (max-width: 768px) {
    padding: 70px 0;
  }
`;

const box_wrap = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 34px;
  min-width: 1500px;
  min-height: 341.5px;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
  }

  @media (max-width: 1680px) {
    min-width: 1400px;
    min-height: 324px;
  }

  @media (max-width: 1520px) {
    min-width: 1250px;
    min-height: 300px;
  }

  @media (max-width: 1280px) {
    min-width: 1000px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    min-width: 0px;
    min-height: 960px;
    width: 90%;
    gap: 24px;
  }

  @media (max-width: 500px) {
    min-height: 854px;
  }

  @media (max-width: 375px) {
    gap: 20px;
  }
`;

const box_1 = css`
  background: #f2e8fa;
  max-height: 335px;

  img {
    width: 146px;
    height: 134px;
  }

  @media (max-width: 375px) {
    max-height: 282px;
    img {
      width: 146px;
      height: 120px;
    }
  }
`;

const box_2 = css`
  background: #e4e8ff;
  max-height: 348px;

  img {
    width: 137px;
    height: 134px;
  }

  @media (max-width: 375px) {
    max-height: 282px;
  }
`;

const box_3 = css`
  background: #e5def2;
  max-height: 335px;

  img {
    width: 126px;
  }

  @media (max-width: 375px) {
    img {
       width: 134px;
  }
`;

const number = css`
  padding: 24px 0 14px;

  color: var(--primary);
  text-align: center;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 18px 0 8px;
  }
`;

const number_2 = css`
  padding: 24px 0 14px;

  color: #2768e7;
  text-align: center;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 500px) {
    padding: 0px 0px 8px;
    font-size: 14px;
  }
`;

const des = css`
  color: var(--black-1);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;

  span {
    color: var(--primary);
    font-size: 28px;
    font-weight: 700;
    line-height: 130%;
  }

  @media (max-width: 1520px) {
    font-size: 18px;
    span {
      font-size: 26px;
    }
  }

  @media (max-width: 1280px) {
    font-size: 16px;
    span {
      font-size: 23px;
    }
  }

  @media (max-width: 1024px) {
    font-size: 18px;
    span {
      font-size: 26px;
    }
  }

  @media (max-width: 768px) {
    font-size: 16px;
    span {
      font-size: 22px;
    }
  }

  @media (max-width: 500px) {
    font-size: 15px;
    font-weight: 500;
    span {
      font-size: 19px;
    }
  }

  @media (max-width: 375px) {
    font-size: 14px;
    font-weight: 500;
    span {
      font-size: 17px;
    }
  }
`;

const pro_span = css`
  color: #2768e7 !important;
`;

const pro_p = css`
  padding: 4px 0 0;
  color: #454c5a;
  font-size: 16px;
  font-weight: 700;
  line-height: 160%; /* 25.6px */

  @media (max-width: 500px) {
    font-size: 15px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
  }
`;
