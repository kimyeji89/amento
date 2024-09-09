/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as Check } from "@svgs/check.svg";
import { ReactComponent as ChevRight } from "@svgs/chevRight.svg";

export default function HomePage() {
  return (
    <main css={ctn}>
      <section css={section_type1}>
        <div>
          <p css={text_top}>예비 가맹본부 준비 (직영점 1년 미만, 미운영)</p>
          <p css={text_mid}>
            <span>
              프랜차이즈 가맹본부, <br />
              어떻게 준비해야 할까요? <br />
            </span>
            <span className="high_light">시작은 함께 해요!</span>
          </p>
          <p css={text_bottom}>
            <span>
              비지니스 컨설팅부터 MVP 기능 정의, 지속 유지보수 가능한 개발 언어,
              <br />
              개발 플랫폼까지
            </span>
            <span className="bold">가장 적합한 방법을 제안드려요.</span>
          </p>
        </div>
        <div css={img_ctn}>
          <img src="/assets/images/homePage/section1.png" alt="section1" />
        </div>
      </section>
      <section css={section_type1}>
        <div css={img_ctn}>
          <img src="/assets/images/homePage/section1.png" alt="section1" />
        </div>
        <div>
          <p css={text_top}>가맹본부 설립 희망 (직영점 1년 이상)</p>
          <p css={text_mid}>
            <span>
              앞으로 프랜차이즈를
              <br />
              어떻게 설립하는게 좋을까요? <br />
            </span>
            <span className="high_light">우리가 도와드릴게요!</span>
          </p>
          <p css={text_bottom}>
            <span>
              비지니스 컨설팅부터 MVP 기능 정의, 지속 유지보수 가능한 개발 언어,
              <br />
              개발 플랫폼까지
            </span>
            <span className="bold">가장 적합한 방법을 제안드려요.</span>
          </p>
        </div>
      </section>
      <section css={section_type1}>
        <div>
          <p css={text_top}>가맹본부 사업 전환 (직영점 1년 이상)</p>
          <p css={text_mid}>
            <span>
              우리 음식점,
              <br />
              맛 하나는 최고잖아요? <br />
            </span>
            <span className="high_light">프렌차이즈로 키워볼까요?</span>
          </p>
          <p css={text_bottom}>
            <span>
              비지니스 컨설팅부터 MVP 기능 정의, 지속 유지보수 가능한 개발 언어,
              <br />
              개발 플랫폼까지
            </span>
            <span className="bold">가장 적합한 방법을 제안드려요.</span>
          </p>
        </div>
        <div css={img_ctn}>
          <img src="/assets/images/homePage/section1.png" alt="section1" />
        </div>
      </section>
      <section css={section_type2} className="section4">
        <div css={text_ctn}>
          <p css={text_top}>가맹본부 운영 컨설팅 (가맹본부 운영중)</p>
          <p css={text_mid}>
            <span>우리 프랜차이즈, 어떻게 하면 더 성공할 수 있을까요?</span>
            <br />
            <span className="high_light">같이 고민해봐요!</span>
          </p>
          <p css={text_bottom}>
            <span>
              비지니스 컨설팅부터 MVP 기능 정의, 지속 유지보수 가능한 개발 언어,
              개발 플랫폼까지
            </span>
            <span className="bold"> 가장 적합한 방법을 제안드려요.</span>
          </p>
        </div>
        <img
          src="/assets/images/homePage/section4.png"
          alt="section4"
          css={full_image}
        />
      </section>
      <section css={section_type3} className="section5">
        <p css={section_type3_title}>
          프렌차이즈 시작,
          <br />
          어디서부터 해야할지 막막하신가요?
        </p>
        <ul css={section_type3_card_ctn}>
          <li css={section_type3_card}>
            <img
              src="/assets/images/homePage/section5case1.png"
              alt="section5case1"
            />
            <div className="info">
              <Check />
              <p>
                <span>직영점 성공 뒤, 가맹본부 설립이</span> <br />
                <span className="high_light">쉽지 않으신가요?</span>
              </p>
            </div>
          </li>
          <li css={section_type3_card}>
            <img
              src="/assets/images/homePage/section5case2.png"
              alt="section5case2"
            />
            <div className="info">
              <Check />
              <p>
                <span>직영점 성공 뒤, 가맹본부 설립이</span> <br />
                <span className="high_light">쉽지 않으신가요?</span>
              </p>
            </div>
          </li>
          <li css={section_type3_card}>
            <img
              src="/assets/images/homePage/section5case3.png"
              alt="section5case3"
            />
            <div className="info">
              <Check />
              <p>
                <span>직영점 성공 뒤, 가맹본부 설립이</span> <br />
                <span className="high_light">쉽지 않으신가요?</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section css={section_type4} className="section6">
        <div css={section_type4_ctn}>
          <p className="title">혼자서 모든걸 해결하려 하지 마세요.</p>
          <p className="content">
            전문가의 도움으로 문제를 하나씩 풀어가세요. <br />
            법적 절차부터 운영 시스템까지. <br />
            상담을 예약하고, 프렌차이즈 성공을 향해 나아가세요. <br />
            <span className="high_light">
              성공의 파트너, 바로 여기 있습니다.
            </span>
          </p>
          <button type="button" css={counsel_button}>
            상담신청
            <ChevRight />
          </button>
        </div>
      </section>
    </main>
  );
}

const ctn = css`
  margin-top: 90px;
  overflow: hidden;
`;

const counsel_button = css``;

const section_type1 = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 990px;
  background: linear-gradient(180deg, #fefeff 0%, #f5f6f9 100%);
  gap: 195px;
`;

const section_type2 = css`
  display: flex;
  align-items: end;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 1080px;
  background-color: #05040a;
`;

const section_type3 = css`
  display: flex;
  flex-direction: column;
  gap: 73px;
  align-items: center;
  justify-content: center;
  padding: 164px 0 160px 0;
  background-color: var(--white);
`;

const section_type4 = css`
  margin: 0 auto;
  padding: 160px 0;
  box-sizing: border-box;
  width: 100%;
  height: 748px;
  background-color: #e0d6f6;
  background-image: url("/assets/images/homePage/section6.png");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

const section_type3_card_ctn = css`
  display: flex;
  gap: 34px;
`;

const section_type3_card = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 24px;
  font-weight: 600;
  line-height: 33.6px;
  .info {
    display: flex;
    gap: 10px;
  }
  .high_light {
    font-weight: 800;
    line-height: 33.6px;
    color: var(--primary);
  }
`;

const section_type3_title = css`
  font-size: 55px;
  font-weight: 700;
  line-height: 77px;
  text-align: center;
`;

const section_type4_ctn = css`
  display: flex;
  gap: 54px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .title {
    font-family: "Noto Sans", Noto Sans, sans-serif;
    font-size: 44px;
    font-weight: 700;
    line-height: 52.8px;
    text-align: center;
  }
  .content {
    font-size: 24px;
    font-weight: 600;
    line-height: 38.4px;
    text-align: center;
    color: #292929;
  }
  .high_light {
    color: var(--primary);
  }
`;

const text_ctn = css`
  position: absolute;
  top: 160px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--white);
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 1;
`;

const full_image = css`
  max-height: 907px;
  object-fit: cover;
`;

const text_top = css`
  font-size: 24px;
  font-weight: 700;
  line-height: 28.64px;
  margin-bottom: 34px;
`;

const text_mid = css`
  font-size: 55px;
  font-weight: 700;
  line-height: 66px;
  margin-bottom: 20px;
  span.high_light {
    color: var(--primary);
  }
`;

const text_bottom = css`
  font-size: 20px;
  font-weight: 300;
  line-height: 28px;
  span.bold {
    font-weight: 700;
  }
`;

const img_ctn = css`
  position: relative;
`;
