/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function IntroSection3() {
  return (
    <section css={section_wrap}>
      <div css={box}>
        <p>실전형 창업%비즈니스 전문가의</p>
        <p>원스톱 지원 상담</p>
      </div>
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
          <p css={number}>02</p>
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
`;

const box = css`
  padding: 40px;
  display: flex;
  margin-bottom: 60px;
  width: 337px;
  height: 131px;
  padding: 0;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  border-radius: 20px;
  background: var(--white);
  box-shadow: 0px 6px 33px 0px #e0d4e9;

  & > :first-child {
    color: #732ea5;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }

  & > :nth-child(2) {
    color: var(--black-1);
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }
`;

const box_wrap = css`
  display: flex;
  gap: 34px;

  div {
    width: 477px;
    height: 347px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
  }
`;

const box_1 = css`
  background: #f2e8fa;

  img {
    width: 146px;
    height: 134px;
  }
`;

const box_2 = css`
  background: #e4e8ff;

  img {
    width: 137px;
    height: 134px;
  }
`;

const box_3 = css`
  background: #e5def2;

  img {
    width: 126px;
    // height: 144px;
  }
`;

const number = css`
  color: var(--primary);
  text-align: center;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 700;
  line-height: normal;

  padding: 24px 0 14px;
`;

const des = css`
  color: var(--black-1);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 28px */

  span {
    color: var(--primary);
    font-size: 28px;
    font-weight: 700;
    line-height: 130%;
  }
`;

const pro_span = css`
  color: #2768e7 !important;
`;

const pro_p = css`
  color: #454c5a;
  font-size: 16px;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  padding: 4px 0 0;
`;
