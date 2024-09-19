/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { br_desktop, br_mobile } from "./commonStyles";
import { ReactComponent as CheckPurple } from "@svgs/homePage/checkPurple.svg";

function Card({ img, alt, textDefault, textHighLight }) {
  return (
    <li css={card}>
      <img src={img} alt={alt} />
      <div className="info">
        <div className="check_ctn">
          <CheckPurple />
        </div>
        <p css={card_text}>
          <span>{textDefault}</span>
          <span className="high_light">{textHighLight}</span>
        </p>
      </div>
    </li>
  );
}

export default function Section5() {
  return (
    <section css={ctn} className="ctn">
      <p css={title}>
        프랜차이즈 시작,
        <br css={br_desktop} className="br_desktop" />
        어디서부터 <br css={br_mobile} />
        해야할지 막막하신가요?
      </p>
      <ul css={card_ctn}>
        <Card
          img="/assets/images/homePage/section5case1.png"
          alt="section5case1"
          textDefault="직영점 성공 뒤, 가맹본부 설립이"
          textHighLight="쉽지 않으신가요?"
        />
        <Card
          img="/assets/images/homePage/section5case2.png"
          alt="section5case2"
          textDefault="운영중인 가맹본부, 예상치 못한 문제로"
          textHighLight="어려움이 있으신가요?"
        />
        <Card
          img="/assets/images/homePage/section5case3.png"
          alt="section5case3"
          textDefault="맛은 자신 있지만, 프랜차이즈화가"
          textHighLight="복잡하신가요?"
        />
      </ul>
    </section>
  );
}

const ctn = css`
  display: flex;
  flex-direction: column;
  gap: 73px;
  align-items: center;
  justify-content: center;
  padding: 164px 0 160px 0;
  background-color: var(--white);
  @media (max-width: 1919px) {
    padding: 140px 80px;
  }
  @media (max-width: 767px) {
    padding: 80px;
  }
  @media (max-width: 499px) {
    padding: 80px 40px;
    gap: 48px;
  }
  @media (max-width: 375px) {
    padding: 80px 20px;
    gap: 24px;
  }
`;

const card_ctn = css`
  display: flex;
  justify-content: center;
  gap: 34px;
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: 375px) {
    gap: 20px;
  }
`;

const card = css`
  width: 100%;
  max-width: 477px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 24px;
  font-weight: 600;
  line-height: 130%;
  .check_ctn {
    box-sizing: border-box;
    padding-top: 5px;
  }
  .info {
    display: flex;
    gap: 10px;
  }
  .high_light {
    font-weight: 800;
    line-height: 130%;
    color: var(--primary);
  }
  @media (max-width: 1440px) {
    font-size: 23px;
  }
  @media (max-width: 1280px) {
    font-size: 22px;
  }
  @media (max-width: 1024px) {
    font-size: 21px;
  }
  @media (max-width: 950px) {
    font-size: 20px;
  }
  @media (max-width: 375px) {
    font-size: 15px;
    gap: 14px;
    .check_ctn {
      box-sizing: border-box;
      padding-top: 2px;
      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

const card_text = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-wrap: wrap;
`;

const title = css`
  font-size: 55px;
  font-weight: 700;
  line-height: 130%;
  text-align: center;
  word-break: keep-all;
  @media (max-width: 1919px) {
    font-size: 48px;
  }
  @media (max-width: 1440px) {
    font-size: 44px;
  }
  @media (max-width: 1280px) {
    font-size: 42px;
  }
  @media (max-width: 1024px) {
    font-size: 40px;
  }
  @media (max-width: 950px) {
    font-size: 38px;
  }
  @media (max-width: 767px) {
    font-size: 32px;
  }
  @media (max-width: 499px) {
    font-size: 28px;
  }
  @media (max-width: 375px) {
    width: 100%;
    font-size: 24px;
    text-align: left;
    br.br_desktop {
      display: none;
    }
  }
`;
