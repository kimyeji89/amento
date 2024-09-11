/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as ArrowImg } from "@svgs/companyIntroPage/arrow.svg";

export default function IntroSection2() {
  return (
    <section css={section_wrap}>
      <div css={container}>
        <h2>ABOUT</h2>
        <p css={des}>
          아멘토벤처스는 창업과 프랜차이즈 전문가들이 직접 창업자를 상담하고
          지원하는 <br /> “전문가 협업기업”으로 최적화된 창업 비즈니스 성공을
          위한 “프로젝트 FC” 솔루션을 제공합니다.
        </p>
        <div css={box}>
          <p>신뢰성을 기반으로 함께 참여하는</p>
          <p>아멘토벤처스, 프로젝트 FC</p>
        </div>
        <ArrowImg alt="arrow" />
        <img
          src="/assets/images/companyIntroPage/amentoAbout.png"
          alt="amentoAbout"
          css={about_img}
        />
        <p css={des_2}>
          새롭고 고도화된 창업과 가맹본부 설립을 지원하여
          <br /> <span>시장 및 환경에서 경쟁우위를 통한 성장을 적극 지원</span>
          합니다.
        </p>
      </div>
    </section>
  );
}

const section_wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 0;
`;

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: var(--black-1);
    text-align: center;
    font-family: Poppins;
    font-size: 40px;
    font-weight: 700;
    line-height: normal;
  }
`;

const des = css`
  padding: 54px 0 44px;
  color: var(--black-1);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const box = css`
  display: flex;
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

const des_2 = css`
  padding: 34px 0 0;
  color: var(--black-1);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  span {
    color: var(--primary);
    font-size: 20px;
    font-weight: 700;
  }
`;

const about_img = css`
  width: 595px;
`;
