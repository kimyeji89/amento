/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function ServiceSection1() {
  return (
    <section css={section_wrap}>
      <img
        src="/assets/images/servicePage/serviceGradient.png"
        alt="serviceGradient"
        css={gradient_img}
      />
      <div css={content_wrap}>
        <div css={content_container}>
          <h1>START UP</h1>
          <div css={content_box}>
            <div css={content}>
              <img
                src="/assets/images/servicePage/handshake.png"
                alt="handshake"
              />
              <p>
                일반창업, 기술창업, 소상공인 창업,
                <br />
                소셜벤처 등을 지원
              </p>
            </div>
            <div css={content}>
              <img src="/assets/images/servicePage/money.png" alt="money" />
              <p>
                <span>자금조달</span>
                <br />
                (투자, 대출, 정부지원사업 등)
              </p>
            </div>
            <div css={content}>
              <img
                src="/assets/images/servicePage/documents.png"
                alt="documents"
              />
              <p>
                <span>
                  사업계획서 및<br />
                  IR 컨설팅
                </span>
              </p>
            </div>
            <div css={content}>
              <img src="/assets/images/servicePage/graph2.png" alt="graph2" />
              <p>
                <span>정부지원사업 로드맵 설계</span>
                <br />
                (성장지원)
              </p>
            </div>
            <div css={content}>
              <img
                src="/assets/images/servicePage/pitching.png"
                alt="pitching"
              />
              <p>
                <span>피칭</span>
                <br />
                (사업계획서, IR, R&D 등)
              </p>
            </div>
            <div css={content}>
              <img
                src="/assets/images/servicePage/certificate.png"
                alt="certificate"
              />
              <p>
                <span>
                  인증 및 정책에 따른
                  <br />
                  경영계획 설계 등
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const section_wrap = css`
  position: relative;
`;

const gradient_img = css`
  position: absolute;
  width: calc(100% - 100px);
  height: 380px;
  left: 100px;
  z-index: -1;
`;

const content_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 120px 180px;
  margin: 0 auto;

  h1 {
    color: var(--black-1);
    font-family: Poppins;
    font-size: 40px;
    font-weight: 700;
    line-height: 120%;
  }

  @media (max-width: 1919px) and (min-width: 1440px) {
    /* 일반 데스크탑을 위한 스타일 */
  }

  @media (max-width: 1439px) and (min-width: 1200px) {
    /* 작은 데스크탑을 위한 스타일 */
  }
`;

const content_container = css`
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 1300px;
  margin: 0 auto;
`;

const content_box = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  div:first-of-type {
    background-color: var(--primary);

    p {
      color: var(--white);
    }
  }

  @media (max-width: 1919px) and (min-width: 1440px) {
  }

  @media (max-width: 1439px) and (min-width: 1200px) {
    // grid-template-columns: repeat(1, 1fr);
  }
`;

const content = css`
  display: flex;
  justify-content: first;
  align-items: center;
  padding: 30px 50px;

  width: 100%;
  box-sizing: border-box;
  align-items: center;
  align-content: center;
  gap: 40px;
  flex-shrink: 0;
  flex-wrap: wrap;

  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 6px 33px 0px rgba(153, 52, 225, 0.12);
  transition: background-color 0.3s ease;

  img {
    width: 157.5px;
    height: 150px;
    flex-shrink: 0;
  }

  p {
    color: var(--black-1);
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;

    span {
      font-weight: 700;
    }
  }

  @media (max-width: 1919px) and (min-width: 1440px) {
    padding: 20px 35px;

    img {
      width: 140px;
      height: 135px;
      flex-shrink: 0;
    }
  }

  @media (max-width: 1439px) and (min-width: 1200px) {
    padding: 10px 25px;
    gap: 40px;

    img {
      width: 120px;
      height: 110px;
      flex-shrink: 0;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 140%;
    }
  }
`;
