/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function ServiceSection2() {
  return (
    <section css={section_wrap}>
      <h1>FRANCHISE</h1>
      <div css={grid_container}>
        <div css={grid_item}>
          <img
            src="/assets/images/servicePage/franchise-1.png"
            alt="franchise-1"
          />
          <p>
            가맹본부 설립을 위한
            <br />
            창업역량 검토
          </p>
        </div>
        <div css={grid_item}>
          <img
            src="/assets/images/servicePage/franchise-2.png"
            alt="franchise-1"
          />
          <p>법률</p>
        </div>
        <div css={grid_item}>
          <img
            src="/assets/images/servicePage/franchise-3.png"
            alt="franchise-1"
          />
          <p>세무, 회계</p>
        </div>
        <div css={grid_item}>
          <img
            src="/assets/images/servicePage/franchise-4.png"
            alt="franchise-1"
          />
          <p>지식재산권</p>
        </div>
        <div css={grid_item}>
          <img
            src="/assets/images/servicePage/franchise-5.png"
            alt="franchise-1"
          />
          <p>인사 및 노무</p>
        </div>
        <div css={grid_item}>
          <img
            src="/assets/images/servicePage/franchise-6.png"
            alt="franchise-1"
          />
          <p>
            경영 <span>(BM, 마케팅 등)</span>
          </p>
        </div>
      </div>
    </section>
  );
}

const section_wrap = css`
  width: 100%;
  background: #f5f6f9;
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  gap: 54px;

  h1 {
    color: var(--black-1);
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    line-height: normal;
  }

  @media (max-width: 1024px) {
    padding: 80px 0;
    h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 768px) {
    gap: 34px;
  }

  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

const grid_container = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 34px;
  justify-items: center;
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1300px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    padding: 0 20px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const grid_item = css`
  position: relative;
  background: #f5f5f5;
  width: auto;
  border-radius: 30px;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(17, 17, 17, 0) 0%,
    rgba(17, 17, 17, 0.5) 100%
  );

  img {
    display: block;
    width: 100%;
    height: auto;
    mix-blend-mode: multiply;
  }

  p {
    position: absolute;
    bottom: 50px;
    left: 50px;

    color: var(--white);
    font-size: 24px;
    font-weight: 700;
    line-height: 140%; /* 33.6px */

    span {
      font-weight: 500;
    }
  }

  @media (max-width: 1439px) and (min-width: 1200px) {
    p {
      font-size: 20px;
      bottom: 40px;
      left: 40px;
    }
  }

  @media (max-width: 1199px) {
    p {
      font-size: 18px;
      bottom: 35px;
      left: 35px;
    }
  }

  @media (max-width: 1024px) {
    p {
      font-size: 20px;
      bottom: 40px;
      left: 40px;
    }
  }

  @media (max-width: 767px) {
    p {
      font-size: 16px;
      bottom: 30px;
      left: 30px;
    }
  }

  @media (max-width: 620px) {
    p {
      font-size: 18px;
      bottom: 30px;
      left: 30px;
    }
  }

  @media (max-width: 375px) {
    p {
      font-size: 17px;
      bottom: 30px;
      left: 40px;
    }
  }
`;
