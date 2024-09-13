/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { ReactComponent as CheckPurple } from "@svgs/homePage/checkPurple.svg";
import { ReactComponent as ChevRight } from "@svgs/homePage/chevRight.svg";

export default function HomePage() {
  return (
    <main css={ctn}>
      <section css={section1}>
        <div css={section1_text_ctn}>
          <p css={text_top}>
            예비 가맹본부 준비
            <span css={text_block}>사업(직영점 등) 1년 미만 or 미운영</span>
          </p>
          <div css={text_mid}>
            <div css={question}>
              <p className="separate">q.</p>
              <p>
                프랜차이즈 가맹본부, <br />
                어떻게 준비해야 할까요?
              </p>
            </div>
            <div css={answer}>
              <p className="separate">a.</p>
              <p>
                전문가가 맞춤형으로 직접 <br /> 설계해드립니다.
              </p>
            </div>
          </div>
          <div css={text_bottom}>
            <p className="separate">n.</p>
            <p>
              예비 가맹본부에게 필수적인 레서피, 지식재산권
              <br /> (상표, 디자인,특허 등), 세무, 회계, 법률 등 <br />
              <span className="high_light"> 최적화된 방법을 제안드립니다.</span>
            </p>
          </div>
        </div>
        <div css={section1_img_ctn}>
          <img
            src="/assets/images/homePage/section1main.png"
            alt="section1main"
            css={section1_img_main}
          />
          <img
            src="/assets/images/homePage/section1Float1.png"
            alt="section1Float1"
            css={section1_img_float1}
          />
          <img
            src="/assets/images/homePage/section1Float2.png"
            alt="section1Float2"
            css={section1_img_float2}
          />
          <img
            src="/assets/images/homePage/section1Float3.png"
            alt="section1Float3"
            css={section1_img_float3}
          />
          <span className="bg" css={section1_img_bg}></span>
        </div>
      </section>
      <section css={section2}>
        <div css={section2_img_ctn}>
          <div css={section2_img_inner_ctn}>
            <img
              src="/assets/images/homePage/section2main.png"
              alt="section2main"
              css={section2_img_main}
            />
            <img
              src="/assets/images/homePage/section2Float1.png"
              alt="section2Float1"
              css={section2_img_float1}
            />
            <img
              src="/assets/images/homePage/section2Float2.png"
              alt="section2Float2"
              css={section2_img_float2}
            />
            <img
              src="/assets/images/homePage/section2Float3.png"
              alt="section2Float3"
              css={section2_img_float3}
            />
            <img
              src="/assets/images/homePage/section2Float4.png"
              alt="section2Float4"
              css={section2_img_float4}
            />
            <span css={section2_img_bg}></span>
          </div>
        </div>
        <div css={section2_text_ctn}>
          <p css={text_top}>
            가맹본부 설립 희망<span css={text_block}>직영점 1년 이상</span>
          </p>
          <div css={text_mid}>
            <div css={question}>
              <p className="separate">q.</p>
              <p>
                현재하고 있는 사업, 가맹본부 <br />
                설립으로 시작할 수 있을까요?
              </p>
            </div>
            <div css={answer}>
              <p className="separate">a.</p>
              <p>
                전문가가 직접 분석 및 진단하여
                <br /> 최적화된 솔루션을 제공해드립니다.
              </p>
            </div>
          </div>
          <div css={text_bottom}>
            <p className="separate">n.</p>
            <p>
              신속한 가맹본부 설립에 필요한 레서피, 지식재산권(상품, 디자인,
              <br />
              특허 등), 세무, 회계, 법률 등
              <span className="high_light"> 원스톱으로 진행해드립니다.</span>
            </p>
          </div>
        </div>
      </section>
      <section css={section3}>
        <div css={section3_text_ctn}>
          <p css={text_top}>
            가맹본부 사업 전환
            <span css={text_block}>가맹본부 또는 가맹점 1년 이상 운영</span>
          </p>
          <div css={text_mid}>
            <div css={question}>
              <p className="separate">q.</p>
              <p>
                지금하고 있는 가맹사업이 잘 안돼요.
                <br /> 어떻게 하면 좋을까요?
              </p>
            </div>
            <div css={answer}>
              <p className="separate">a.</p>
              <p>
                전문가가 직접 현장 방문하여
                <br /> 고민을 해결해드립니다.
              </p>
            </div>
          </div>
          <div css={text_bottom}>
            <p className="separate">n.</p>
            <p>
              가맹본부 전환에 필요한 레서피, 브랜딩, 지식재산권 <br />
              (상표, 디자인, 특허등), 세무, 회계, 법 마케팅 등
              <br />
              <span className="high_light">
                &nbsp;최적화된 솔루션을 제안드립니다.
              </span>
            </p>
          </div>
        </div>
        <div css={section3_img_ctn}>
          <img
            src="/assets/images/homePage/section3main.png"
            alt="section3main"
            css={section3_img_main}
          />
          <img
            src="/assets/images/homePage/section3float1.png"
            alt="section3float1"
            css={section3_img_float1}
          />
          <span css={section3_img_bg}></span>
        </div>
      </section>
      <section css={section4} className="section4">
        <div css={section4_text_ctn}>
          <p css={[text_top_center]}>
            <span>가맹본부 운영 컨설팅</span>
            <span css={text_block}>가맹본부 운영중</span>
          </p>
          <div css={text_mid}>
            <div css={[question, white, center]}>
              <p>Q. 우리 프랜차이즈, 어떻게 하면 더 성공할 수 있을까요?</p>
            </div>
            <div css={[answer, center]}>
              <p>
                A. 전문가가 가맹본부의 현향을 직접 진단 및 분석하여 개선방안을
                제공해 드립니다.
              </p>
            </div>
          </div>
          <p css={[text_bottom_no_separate, white]}>
            <span>
              운영중인 가맹본부에 필요한 레서피, 브랜딩, 마케팅, 지식재산권 등
            </span>
            <br />
            <span className="high_light">
              &nbsp; 최적화된 성장 솔루션을 제안드립니다.
            </span>
          </p>
        </div>
        <img
          src="/assets/images/homePage/section4.png"
          alt="section4"
          css={section5_img}
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
              <p css={section5_card_text}>
                <span>직영점 성공 뒤, 가맹본부 설립이</span>
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
              <p css={section5_card_text}>
                <span>운영중인 가맹본부, 예상치 못한 문제로</span>
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
              <p css={section5_card_text}>
                <span>맛은 자신 있지만, 프랜차이즈화가</span>
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
            <span> 전문가의 도움으로 문제를 하나씩 풀어가세요.</span>
            <span>가맹본부 설립에 필요한 법적 절차부터 운영 시스템까지.</span>
            <span> 상담을 예약하고, 프렌차이즈로 성공하세요.</span>
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
    </main>
  );
}

const float = keyframes`
  0% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(-50%,-60%);
  }
  100% {
    transform: translateY(-50%, -50%);
  }`;

const white = css`
  color: var(--white);
`;

const ctn = css`
  margin-top: 90px;
  overflow: hidden;
  @media (max-width: 1919px) {
    br {
      display: none;
    }
  }
  @media (max-width: 1024px) {
    margin-top: 80px;
  }
  @media (max-width: 950px) {
    margin-top: 70px;
  }
  @media (max-width: 767px) {
    margin-top: 60px;
  }
`;

const section1 = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  padding: 308px 160px 308px 210px;
  width: 100%;
  background: linear-gradient(180deg, #fefeff 0%, #f5f6f9 100%);
  @media (max-width: 1919px) {
    padding: 240px 140px;
    gap: 80px;
  }
  @media (max-width: 1440px) {
    padding: 220px 120px;
  }
  @media (max-width: 1280px) {
    padding: 200px 80px;
  }
  @media (max-width: 1024px) {
    padding: 160px 100px;
    gap: 40px;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    gap: 80px;
    padding: 160px 80px;
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const section1_text_ctn = css`
  width: 100%;
  height: auto;
  @media (max-width: 950px) {
    text-align: center;
  }
`;

const section1_img_ctn = css`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 950px) {
    width: 70%;
  }
`;

const section1_img_main = css`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

const section1_img_bg = css`
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
  @media (max-width: 1919px) {
    width: 98%;
    height: 98%;
  }
  @media (max-width: 1440px) {
    width: 96%;
    height: 96%;
  }
  @media (max-width: 1280px) {
    width: 94%;
    height: 94%;
  }
  @media (max-width: 1024px) {
    width: 90%;
    height: 90%;
  }
  @media (max-width: 950px) {
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const section1_img_float1 = css`
  position: absolute;
  top: calc(50% - 35%);
  left: calc(50% - 35%);
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 100%;
  max-width: 20%;
  height: auto;
  object-fit: cover;
  animation: ${float} 3s ease-in-out infinite;
  @media (max-width: 1919px) {
    max-width: 19%;
    left: calc(50% - 32%);
  }
  @media (max-width: 1440px) {
    max-width: 18%;
  }
  @media (max-width: 1280px) {
    max-width: 18.5%;
  }
  @media (max-width: 1024px) {
    max-width: 18%;
  }
  @media (max-width: 950px) {
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const section1_img_float2 = css`
  position: absolute;
  top: calc(50% - 32%);
  left: calc(50% + 36%);
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 50%;
  height: auto;
  object-fit: cover;
  z-index: 2;
  animation: ${float} 3s 0.5s ease-in-out infinite;
  @media (max-width: 1919px) {
    max-width: 46%;
    top: calc(50% - 31%);
    left: calc(50% + 33%);
  }
  @media (max-width: 1440px) {
    max-width: 44%;
    left: calc(50% + 32%);
  }
  @media (max-width: 1280px) {
    max-width: 43%;
    top: calc(50% - 30%);
  }
  @media (max-width: 1024px) {
    max-width: 42.5%;
  }
  @media (max-width: 950px) {
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const section1_img_float3 = css`
  position: absolute;
  top: calc(50%);
  left: calc(50% - 52%);
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 23%;
  height: auto;
  object-fit: cover;
  z-index: 2;
  animation: ${float} 3s 0.2s ease-in-out infinite;
  border-radius: 30px;
  box-shadow: 0px 50px 80px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 1919px) {
    max-width: 20%;
    top: calc(50% - 1.5%);
    left: calc(50% - 50%);
  }
  @media (max-width: 1440px) {
    max-width: 19%;
    top: calc(50% - 1.5%);
    border-radius: 20px;
  }
  @media (max-width: 1280px) {
    max-width: 18.5%;
    border-radius: 16px;
  }
  @media (max-width: 1024px) {
    max-width: 18%;
    border-radius: 14px;
  }
  @media (max-width: 950px) {
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const section2 = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 308px 210px;
  width: 100%;
  background: linear-gradient(180deg, #fefeff 0%, #f5f6f9 100%);
  @media (max-width: 1919px) {
    padding: 240px 180px;
    gap: 100px;
  }
  @media (max-width: 1440px) {
    padding: 220px 120px;
    gap: 100px;
  }
  @media (max-width: 1280px) {
    padding: 200px 80px;
  }
  @media (max-width: 1024px) {
    padding: 160px 100px;
    gap: 100px;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    gap: 160px;
    padding: 160px 80px;
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const section2_img_ctn = css`
  width: 100%;
  position: relative;
  @media (max-width: 1919px) {
    display: flex;
    align-items: center;
    justify-content: start;
  }
  @media (max-width: 1440px) {
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 950px) {
    order: 2;
    width: 70%;
  }
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const section2_img_inner_ctn = css`
  height: 100%;
  width: auto;
  position: relative;
`;

const section2_img_main = css`
  position: relative;
  z-index: 2;
  height: auto;
  width: 100%;
  max-width: 617px;
  @media (max-width: 1919px) {
  }
  @media (max-width: 1440px) {
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 950px) {
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const section2_img_bg = css`
  display: block;
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
  max-width: 680px;
  max-height: 680px;
  border-radius: 50%;
  background: linear-gradient(180deg, #ffcfeb 0.04%, #9da6f6 84.59%);
  filter: blur(100px);
  @media (max-width: 1919px) {
    width: 90%;
  }
`;

const section2_img_float1 = css`
  position: absolute;
  top: calc(50% - 45%);
  left: calc(50% - 35%);
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 100%;
  max-width: 26%;
  animation: ${float} 3s 0.3s ease-in-out infinite;
  @media (max-width: 1919px) {
    max-width: 34%;
    top: calc(50% - 42%);
    left: calc(50% - 30%);
  }
  @media (max-width: 1440px) {
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 950px) {
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const section2_img_float2 = css`
  position: absolute;
  top: calc(50% - 60%);
  right: calc(50% - 43%);
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 20%;
  height: auto;
  z-index: 1;
  animation: ${float} 3s ease-in-out infinite;
  @media (max-width: 1919px) {
    max-width: 28%;
    top: calc(50% - 55%);
    right: calc(50% - 75%);
  }
  @media (max-width: 1440px) {
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 950px) {
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const section2_img_float3 = css`
  position: absolute;
  top: calc(50% - 7%);
  right: calc(50% - 41%);
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 20%;
  z-index: 1;
  animation: ${float} 3s 0.8s ease-in-out infinite;
  @media (max-width: 1919px) {
    max-width: 24%;
    top: calc(50% - 5%);
    right: calc(50% - 68%);
  }
  @media (max-width: 1440px) {
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 950px) {
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const section2_img_float4 = css`
  position: absolute;
  top: calc(50% + 38%);
  right: calc(50% - 35%);
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 100%;
  max-width: 30%;
  animation: ${float} 3s 0.4s ease-in-out infinite;
  @media (max-width: 1919px) {
    max-width: 36%;
    top: calc(50% + 40%);
    right: calc(50% - 60%);
  }
  @media (max-width: 1440px) {
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 950px) {
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const section2_text_ctn = css`
  width: 100%;
  max-width: 662px;
  @media (max-width: 950px) {
    order: 1;
    text-align: center;
  }
`;

const section3 = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 308px 0;
  width: 100%;

  background: linear-gradient(180deg, #fefeff 0%, #f5f6f9 100%);
  @media (max-width: 1919px) {
    padding: 240px 0;
  }
  @media (max-width: 1440px) {
    padding: 220px 0;
  }
  @media (max-width: 1280px) {
    padding: 200px 0;
  }
  @media (max-width: 1024px) {
    padding: 160px 0;
  }
  @media (max-width: 950px) {
    flex-direction: column;
    gap: 100px;
    padding: 160px 80px;
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const section3_text_ctn = css`
  box-sizing: border-box;
  padding: 0 82px 0 210px;
  width: 100%;
  @media (max-width: 1919px) {
    padding: 0 82px 0 160px;
  }
  @media (max-width: 1440px) {
    padding: 0 82px 0 120px;
  }
  @media (max-width: 1280px) {
    padding: 0 60px 0 80px;
  }
  @media (max-width: 1024px) {
    padding: 0 60px 0 80px;
  }
  @media (max-width: 950px) {
    padding: 0;
  }
`;

const section3_img_ctn = css`
  position: relative;
  width: 100%;
  height: auto;
  @media (max-width: 1919px) {
    box-sizing: border-box;
    padding-right: 20px;
  }
  @media (max-width: 950px) {
    width: 90%;
  }
`;

const section3_img_main = css`
  position: relative;
  width: 100%;
  height: auto;
  z-index: 1;
`;

const section3_img_bg = css`
  display: block;
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 680px;
  height: 680px;
  border-radius: 50%;
  background: linear-gradient(180deg, #ffcfeb 0.04%, #9da6f6 84.59%);
  filter: blur(100px);
  @media (max-width: 1919px) {
    width: 100%;
    height: 100%;
  }
`;

const section3_img_float1 = css`
  position: absolute;
  width: 100%;
  max-width: 28%;
  top: calc(50% + 20%);
  left: calc(50% - 18%);
  transform: translate(-50%, -50%);
  z-index: 2;
  object-fit: cover;
  animation: ${float} 3s ease-in-out infinite;
  @media (max-width: 1919px) {
    max-width: 27%;
    top: calc(50% + 24%);
  }
  @media (max-width: 1440px) {
    max-width: 26%;
    top: calc(50% + 26%);
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
  box-sizing: border-box;
  padding-top: 140px;
  background-color: #05040a;
  @media (max-width: 950px) {
    max-height: 900px;
  }
`;

const section4_text_ctn = css`
  position: absolute;
  top: 140px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 1280px) {
    padding: 0 100px;
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
  @media (max-width: 1919px) {
    padding: 140px 80px;
  }
`;

const section5_card_ctn = css`
  display: flex;
  justify-content: center;
  gap: 34px;
  width: 100%;
  flex-wrap: wrap;
`;

const section5_card = css`
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
`;

const section5_card_text = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-wrap: wrap;
`;

const section5_title = css`
  font-size: 55px;
  font-weight: 700;
  line-height: 130%;
  text-align: center;
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
`;

const section5_img = css`
  max-height: 907px;
  object-fit: cover;
  @media (max-width: 950px) {
    max-height: 600px;
  }
`;

const section6 = css`
  margin: 0 auto;
  padding: 160px 100px;
  box-sizing: border-box;
  width: 100%;
  height: 748px;
  background-color: #e0d6f6;
  background-image: url("/assets/images/homePage/section6.png");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
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
    display: flex;
    flex-direction: column;
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
    font-size: 15px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  animation: ${counsel_button_animation} 3s ease-in-out infinite;
`;

const text_top = css`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 34px;
  word-break: keep-all;
  @media (max-width: 1919px) {
    font-size: 23px;
  }
  @media (max-width: 1440px) {
    font-size: 22px;
  }
  @media (max-width: 1280px) {
    flex-direction: column;
    justify-content: start;
    align-items: start;
    font-size: 21px;
  }
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 950px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    margin-bottom: 24px;
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const text_top_center = css`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 34px;
  word-break: keep-all;
  @media (max-width: 1919px) {
    font-size: 23px;
  }
  @media (max-width: 1440px) {
    font-size: 22px;
  }
  @media (max-width: 1280px) {
    font-size: 21px;
  }
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 950px) {
    font-size: 19px;
    margin-bottom: 24px;
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const text_mid = css`
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 34px;
  white-space: wrap;
  word-break: keep-all;
  .separate {
    text-transform: uppercase;
  }

  @media (max-width: 1919px) {
    font-size: 42px;
  }
  @media (max-width: 1440px) {
    font-size: 36px;
    margin-bottom: 24px;
  }
  @media (max-width: 1280px) {
    font-size: 32px;
  }
  @media (max-width: 1024px) {
    font-size: 28px;
  }
  @media (max-width: 950px) {
    font-size: 32px;
    margin-bottom: 16px;
    text-align: center;
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const question = css`
  display: flex;
  gap: 14px;
  color: var(--black, #111);
  margin-bottom: 10px;
  word-break: keep-all;
  @media (max-width: 950px) {
    display: inline-flex;
    justify-content: center;
    gap: 4px;
    flex-direction: column;
  }
`;

const center = css`
  justify-content: center;
  align-items: center;
`;

const answer = css`
  display: flex;
  gap: 14px;
  color: var(--primary, #9627e7);
  word-break: keep-all;
  @media (max-width: 950px) {
    justify-content: center;
    gap: 8px;
    flex-direction: column;
  }
`;

const text_bottom_no_separate = css`
  color: #292929;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
  word-break: keep-all;
  .high_light {
    color: #ec0d0d;
    font-weight: 700;
    line-height: 140%;
  }

  @media (max-width: 1919px) {
    font-size: 19px;
  }
  @media (max-width: 1440px) {
    font-size: 18px;
  }
  @media (max-width: 1280px) {
    font-size: 17px;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 950px) {
    justify-content: center;
    text-align: center;
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const text_bottom = css`
  display: flex;
  gap: 24px;
  flex-wrap: nowrap;
  flex-direction: row;

  color: #292929;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
  word-break: keep-all;

  .separate {
    font-size: 44px;
    color: transparent;
  }

  .high_light {
    color: #ec0d0d;
    font-weight: 700;
    line-height: 140%;
  }

  @media (max-width: 1919px) {
    font-size: 19px;
    .separate {
      font-size: 42px;
    }
  }
  @media (max-width: 1440px) {
    font-size: 18px;
    .separate {
      font-size: 36px;
    }
  }
  @media (max-width: 1280px) {
    font-size: 17px;
    .separate {
      font-size: 32px;
    }
  }
  @media (max-width: 1024px) {
    font-size: 16px;
    .separate {
      font-size: 28px;
    }
  }
  @media (max-width: 950px) {
    justify-content: center;
    text-align: center;
    .separate {
      display: none;
    }
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const text_block = css`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 80px;
  background: #f6eaff;
  color: var(--primary, #9627e7);
  font-size: 20px;
  font-weight: 700;
  @media (max-width: 1919px) {
    font-size: 19px;
  }
  @media (max-width: 1440px) {
    font-size: 18px;
  }
  @media (max-width: 1280px) {
    font-size: 17px;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 950px) {
    font-size: 16px;
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;
