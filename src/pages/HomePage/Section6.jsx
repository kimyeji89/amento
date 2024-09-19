/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { br_mobile, br_desktop } from "./commonStyles";
import { ReactComponent as ChevRight } from "@svgs/homePage/chevRight.svg";
import { ReactComponent as ChevRightMobile } from "@svgs/homePage/chevRightMobile.svg";

export default function Section6() {
  return (
    <section css={ctn} className="section6">
      <div css={inner_ctn}>
        <p className="title" css={title}>
          혼자서 모든걸
          <br css={br_mobile} className="br_mobile" />
          해결하려 하지 마세요.
        </p>
        <p className="content" css={content}>
          전문가의 도움으로 문제를 하나씩 풀어가세요.
          <br css={br_desktop} /> 가맹본부 설립에 필요한 법적 절차부터 운영
          시스템까지. <br css={br_desktop} /> 상담을 예약하고, 프랜차이즈로
          성공하세요. <br css={br_desktop} />
          <span className="high_light">성공의 파트너, 바로 여기 있습니다.</span>
        </p>
        <button type="button" css={counsel_button}>
          <span className="text" css={button_text}>
            상담신청
          </span>
          <ChevRight className="chev_right_pc" css={chev_right_pc} />
          <ChevRightMobile
            className="chev_right_mobile"
            css={chev_right_mobile}
          />
          <p className="badge" css={badge}>
            <span>지금바로</span>
          </p>
        </button>
      </div>
    </section>
  );
}

const ctn = css`
  margin: 0 auto;
  padding: 160px 100px;
  box-sizing: border-box;
  width: 100%;
  background-color: #e0d6f6;
  background-image: url("/assets/images/homePage/section6.png");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 499px) {
    height: auto;
    padding: 80px 40px;
    background-position: 40% 100%;
    background-color: #edf0ff;
  }
  @media (max-width: 375px) {
    height: auto;
    padding: 80px 20px;
    background-position: 40% 100%;
    background-color: #edf0ff;
  }
`;

const inner_ctn = css`
  display: flex;
  gap: 54px;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 767px) {
    gap: 32px;
  }
  @media (max-width: 375px) {
    gap: 20px;
  }
`;

const title = css`
  font-family: "Noto Sans", Noto Sans, sans-serif;
  font-size: 44px;
  font-weight: 700;
  line-height: 120%;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 32px;
    text-align: center;
    line-height: 120%;
  }
  @media (max-width: 375px) {
    font-size: 24px;
    text-align: center;
    line-height: 120%;
  }
`;

const content = css`
  display: flex;
  flex-direction: column;
  line-height: 160%;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #292929;
  word-break: keep-all;
  .high_light {
    color: var(--primary);
    font-weight: 800;
  }
  @media (max-width: 767px) {
    font-size: 18px;
  }
  @media (max-width: 375px) {
    margin-bottom: 18px;
    font-size: 14px;
  }
`;

const counsel_button_animation = keyframes`
 0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }`;

const chev_right_pc = css`
  display: block;
  @media (max-width: 375px) {
    display: none;
  }
`;

const chev_right_mobile = css`
  display: none;

  @media (max-width: 375px) {
    display: block;
  }
`;
const button_text = css`
  color: var(--primary, #9627e7);
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  @media (max-width: 767px) {
    font-size: 18px;
  }
  @media (max-width: 375px) {
    font-size: 17px;
  }
  @media (max-width: 320px) {
    font-size: 16px;
  }
`;

const badge = css`
  width: auto;
  position: absolute;
  display: inline-flex;
  top: calc(-9px);
  left: -39.11px;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 80px;
  background: #b027ff;
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  @media (max-width: 767px) {
    font-size: 14px;
    white-space: nowrap;
  }
  @media (max-width: 375px) {
    padding: 6px 14px;
    max-width: 70px;
    left: calc(100% - 70px);
    top: -14px;
    right: 0;
    font-size: 12px;
    white-space: nowrap;
  }
  @media (max-width: 320px) {
    padding: 6px 14px;
    max-width: 70px;
    left: calc(100% - 70px);
    top: -20px;
    right: 0;
    font-size: 12px;
    white-space: nowrap;
  }
`;
const counsel_button = css`
  position: relative;
  display: flex;
  height: 80px;
  padding: 20px 56px;
  border-radius: 80px;
  background: #fff;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  gap: 10px;
  animation: ${counsel_button_animation} 3s ease-in-out infinite;
  @media (max-width: 767px) {
    height: 60px;
    padding: 20px 60px;
  }
  @media (max-width: 375px) {
    height: 50px;
    padding: 20px 44px;
  }
`;
