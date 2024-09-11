/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { ReactComponent as CheckPurple } from "@svgs/HomePage/checkPurple.svg";
import { ReactComponent as ChevRight } from "@svgs/HomePage/chevRight.svg";
import partnerImageData from "@data/partnerImageData.json";

export default function HomePage() {
  return (
    <main css={ctn}>
      <section css={section1}>
        <div css={section1_text_ctn}>
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
            <span className="bold"> 가장 적합한 방법을 제안드려요.</span>
          </p>
        </div>
        <div css={section1_img_ctn}>
          <img
            src="/assets/images/homePage/section1main.png"
            alt="section1main"
          />
          <img
            src="/assets/images/homePage/section1Float1.png"
            alt="section1Float1"
            className="section1_float1"
          />
          <img
            src="/assets/images/homePage/section1Float2.png"
            alt="section1Float2"
            className="section1_float2"
          />
          <img
            src="/assets/images/homePage/section1Float3.png"
            alt="section1Float3"
            className="section1_float3"
          />
          <img
            src="/assets/images/homePage/section1bg.png"
            alt="section1bg"
            className="bg"
          />
        </div>
      </section>
      <section css={section2}>
        <div css={section2_img_ctn}>
          <img
            src="/assets/images/homePage/section2main.png"
            alt="section2main"
            className="main"
          />
          <img
            src="/assets/images/homePage/section2Float1.png"
            alt="section2Float1"
            className="section2_float1"
          />
          <img
            src="/assets/images/homePage/section2Float2.png"
            alt="section2Float2"
            className="section2_float2"
          />
          <img
            src="/assets/images/homePage/section2Float3.png"
            alt="section2Float3"
            className="section2_float3"
          />
          <img
            src="/assets/images/homePage/section2Float4.png"
            alt="section2Float4"
            className="section2_float4"
          />
          <span className="bg"></span>
        </div>
        <div css={section2_text_ctn}>
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
            <span className="bold"> 가장 적합한 방법을 제안드려요.</span>
          </p>
        </div>
      </section>
      <section css={section3}>
        <div css={section3_text_ctn}>
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
            <span className="bold"> 가장 적합한 방법을 제안드려요.</span>
          </p>
        </div>
        <div css={section3_img_ctn}>
          <img
            src="/assets/images/homePage/section3main.png"
            alt="section3main"
            className="main"
          />
          <img
            src="/assets/images/homePage/section3float1.png"
            alt="section3float1"
            className="section3_float1"
          />
          <span className="bg"></span>
        </div>
      </section>
      <section css={section4} className="section4">
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
        <img
          src="/assets/images/homePage/section4rightBottom.png"
          alt="section4rightBottom"
          className="section4_right_bottom"
        />
      </section>
      <section css={section5} className="section5">
        <p css={section5_title}>
          프렌차이즈 시작,
          <br />
          어디서부터 해야할지 막막하신가요?
        </p>
        <ul css={section5_card_ctn}>
          <li css={section5_card}>
            <img
              src="/assets/images/homePage/section5case1.png"
              alt="section5case1"
            />
            <div className="info">
              <div className="check_ctn">
                <CheckPurple />
              </div>
              <p>
                <span>직영점 성공 뒤, 가맹본부 설립이</span> <br />
                <span className="high_light">쉽지 않으신가요?</span>
              </p>
            </div>
          </li>
          <li css={section5_card}>
            <img
              src="/assets/images/homePage/section5case2.png"
              alt="section5case2"
            />
            <div className="info">
              <div className="check_ctn">
                <CheckPurple />
              </div>
              <p>
                <span>운영중인 가맹본부, 예상치 못한 문제로</span> <br />
                <span className="high_light">어려움이 있으신가요?</span>
              </p>
            </div>
          </li>
          <li css={section5_card}>
            <img
              src="/assets/images/homePage/section5case3.png"
              alt="section5case3"
            />
            <div className="info">
              <div className="check_ctn">
                <CheckPurple />
              </div>
              <p>
                <span>맛은 자신 있지만, 프랜차이즈화가</span> <br />
                <span className="high_light">복잡하신가요?</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section css={section6} className="section6">
        <div css={section6_ctn}>
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
            <span className="text">상담신청</span>
            <ChevRight />
            <p className="badge">
              <span>지금바로</span>
            </p>
          </button>
        </div>
      </section>
      <section css={section7} className="section7">
        <div className="text_ctn">
          <p className="title">Meet our Edu Partner & Experience</p>
          <p className="desc">
            2015년부터 현재까지 파트너와의 지속적인 관계를 통해
            <br />
            창업&비즈니스 교육 및 멘토링, 심사 등에 참여하여 다양한 경험을 통한
            전문성을 이어가고 있습니다.
          </p>
        </div>
        <div className="partner_ctn">
          {partnerImageData.map((item) => (
            <img src={item.image} alt="partner" key={item.image} />
          ))}
        </div>
      </section>
    </main>
  );
}

const ctn = css`
  margin-top: 90px;
  overflow: hidden;
`;

const section1 = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 990px;
  background: linear-gradient(180deg, #fefeff 0%, #f5f6f9 100%);
`;

const section1_text_ctn = css`
  position: absolute;
  top: 276px;
  right: calc(50% + 202px);
`;

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-16px);
  }
  100% {
    transform: translateY(0);
  }`;

const section1_img_ctn = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: calc(50% + 106px);
  .bg {
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .section1_float1 {
    position: absolute;
    width: 177px;
    object-fit: cover;
    top: -29px;
    left: 0;
    animation: ${float} 3s ease-in-out infinite;
  }
  .section1_float2 {
    width: 363px;
    object-fit: cover;
    position: absolute;
    top: -73px;
    right: -94px;
    animation: ${float} 3s 0.5s ease-in-out infinite;
  }
  .section1_float3 {
    width: 174px;
    object-fit: cover;
    position: absolute;
    top: 226px;
    right: 633px;
    animation: ${float} 3s 0.2s ease-in-out infinite;
    border-radius: 30px;
    box-shadow: 0px 50px 80px 0px rgba(0, 0, 0, 0.1);
  }
`;

const section2 = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 990px;
  background: linear-gradient(180deg, #fefeff 0%, #f5f6f9 100%);
`;

const section2_img_ctn = css`
  position: absolute;
  top: 312px;
  right: calc(50% + 133px);
  .main {
    position: relative;
    z-index: 2;
  }
  .bg {
    display: block;
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 680px;
    height: 680px;
    border-radius: 680px;
    background: linear-gradient(180deg, #ffcfeb 0.04%, #9da6f6 84.59%);
    filter: blur(100px);
  }
  .section2_float1 {
    position: absolute;
    z-index: 1;
    top: -84px;
    left: -22px;
    animation: ${float} 3s 0.3s ease-in-out infinite;
  }
  .section2_float2 {
    position: absolute;
    z-index: 1;
    top: -97px;
    right: -83px;
    width: 181px;
    height: 155px;
    animation: ${float} 3s ease-in-out infinite;
  }
  .section2_float3 {
    position: absolute;
    z-index: 1;
    top: 127px;
    right: -33px;
    animation: ${float} 3s 0.8s ease-in-out infinite;
  }
  .section2_float4 {
    position: absolute;
    z-index: 1;
    bottom: -35px;
    right: -7px;
    animation: ${float} 3s 0.4s ease-in-out infinite;
  }
`;

const section2_text_ctn = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: calc(50% + 124px);
`;

const section3 = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 990px;
  background: linear-gradient(180deg, #fefeff 0%, #f5f6f9 100%);
`;

const section3_text_ctn = css`
  position: absolute;
  top: 276px;
  right: calc(50% + 202px);
`;

const section3_img_ctn = css`
  position: absolute;
  top: 232px;
  left: calc(50% - 95px);
  .main {
    position: relative;
    z-index: 1;
  }
  .bg {
    display: block;
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 680px;
    height: 680px;
    border-radius: 680px;
    background: linear-gradient(180deg, #ffcfeb 0.04%, #9da6f6 84.59%);
    filter: blur(100px);
  }
  .section3_float1 {
    position: absolute;
    z-index: 2;
    width: 177px;
    object-fit: cover;
    top: 362px;
    left: 260px;
    animation: ${float} 3s ease-in-out infinite;
  }
`;

const section4 = css`
  display: flex;
  align-items: end;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 1080px;
  background-color: #05040a;
  .section4_right_bottom {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const section5 = css`
  display: flex;
  flex-direction: column;
  gap: 73px;
  align-items: center;
  justify-content: center;
  padding: 164px 0 160px 0;
  background-color: var(--white);
`;

const section6 = css`
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

const section5_card_ctn = css`
  display: flex;
  gap: 34px;
`;

const section5_card = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 24px;
  font-weight: 600;
  line-height: 33.6px;
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
    line-height: 33.6px;
    color: var(--primary);
  }
`;

const section5_title = css`
  font-size: 55px;
  font-weight: 700;
  line-height: 77px;
  text-align: center;
`;

const section6_ctn = css`
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
    line-height: 160%;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: #292929;
  }
  .high_light {
    color: var(--primary);
    font-weight: 800;
  }
`;

const section7 = css`
  display: flex;
  flex-direction: column;
  gap: 84px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  padding: 160px 0;
  background-color: var(--white);
  .text_ctn {
    .title {
      margin-bottom: 20px;
      color: var(--black, #111);
      text-align: center;
      font-size: 55px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .desc {
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      color: #292929;
    }
  }
  .partner_ctn {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;
    max-width: 1500px;
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
  white-space: nowrap;
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
  .text {
    color: var(--primary, #9627e7);
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  .badge {
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
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  animation: ${float} 3s ease-in-out infinite;
`;
