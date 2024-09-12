/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function IntroSection1() {
  return (
    <section css={section_wrap}>
      <div css={banner_img}>
        <img
          src="/assets/images/companyIntroPage/introBanner.png"
          alt="gradient"
        />
      </div>
      <div css={gradient_img} />

      <div css={text_wrap}>
        <div>
          <h1>당신의 목표, 우리의 도전</h1>
          <p css={p_1}>
            아멘토벤처스는 당신의 성공을 위한 맞춤형 창업&비즈니스를
            디자인합니다.
          </p>
          <p css={p_2}>
            Your Goal, Our Challenge AmentoVentures designs customized <br />
            startups & businesses for your success.
          </p>
        </div>
      </div>
    </section>
  );
}

const section_wrap = css`
  height: 586px;
  position: relative;
  display: flex;

  @media (max-width: 1680px) {
    height: 486px;
  }

  @media (max-width: 1280px) {
    height: 406px;
  }

  @media (max-width: 1024px) {
    height: 386px;
  }
`;

const banner_img = css`
  width: 78.39%;
  height: 100%;

  img {
    width: 78.39%;
    height: 100%;
    object-fit: cover;
  }
`;

const gradient_img = css`
  width: 76%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;

  background: linear-gradient(
    90deg,
    rgba(254, 254, 255, 0) 21.12%,
    #f5f6f9 49.95%
  );

  @media (max-width: 1024px) {
    width: 86%;
  }
`;

const text_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: absolute;
  top: 50%;
  right: 210px;
  transform: translateY(-50%);

  // border: 1px solid red;

  h1 {
    color: var(--black-1);
    font-size: 55px;
    font-weight: 700;
    line-height: 120%; /* 66px */
  }

  @media (max-width: 1680px) {
    right: 110px;
    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 1520px) {
    right: 70px;
  }

  @media (max-width: 1280px) {
    text-align: end;
    right: 40px;
    h1 {
      font-size: 34px;
    }
  }

  @media (max-width: 1024px) {
    right: 40px;
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`;

const p_1 = css`
  color: #292929;
  font-size: 20px;
  font-weight: 600;
  line-height: 140%; /* 28px */
  padding: 24px 0 14px;

  // border: 1px solid;

  @media (max-width: 1024px) {
    // max-width: 350px;
    // word-break: keep-all;
    text-align: end;
    right: 0;
  }
`;

const p_2 = css`
  max-width: 588px;
  color: #732ea5;
  font-size: 17px;
  font-weight: 700;
`;
