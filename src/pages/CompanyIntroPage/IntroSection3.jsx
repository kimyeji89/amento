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
          <img src="/assets/images/graph.png" alt="graph" />
          <p css={number}>01</p>
          <p css={des}>
            창업 및 기업가의 미래를 <br />
            설계하고 성장을 지원하는 <br />
            전문 창업 플랫폼
          </p>
        </div>
        <div css={box_2}>
          <img src="/assets/images/graph.png" alt="graph" />
          <p css={number}>02</p>
          <p css={des}>
            창업 및 가맹본부 설립의 경험을 <br />
            갖춘 전문가 지원 <br />
            (경영, 법률, 세무, 지식재산권 등)
          </p>
        </div>
        <div css={box_3}>
          <img src="/assets/images/graph.png" alt="graph" />
          <p css={number}>03</p>
          <p css={des}>
            창업에 대한 비즈니스모델 수립 및 <br />
            최적화된 전략을 설계 및 지원
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

  img {
    width: 126px;
    height: 120px;
  }
`;

const box_1 = css`
  background: #f2e8fa;
`;

const box_2 = css`
  background: #e4e8ff;
`;

const box_3 = css`
  background: #e5def2;
`;

const number = css`
  color: var(--primary, #9627e7);
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
`;
