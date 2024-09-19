/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";

export default function ServiceSection1() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [showBr, setShowBr] = useState(window.innerWidth >= 1025);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      setShowBr(window.innerWidth >= 1025);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section css={section_wrap}>
      <img
        src={
          isMobile
            ? "/assets/images/servicePage/serviceGradientMo.png"
            : "/assets/images/servicePage/serviceGradient.png"
        }
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
                  사업계획서 및 {showBr && <br />}
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
                {showBr && <br />}
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
                  인증 및 정책에 따른 {showBr && <br />}
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
  overflow: hidden;
`;

const gradient_img = css`
  position: absolute;
  width: calc(100% - 100px);
  height: 380px;
  left: 100px;
  z-index: -1;
  overflow: hidden;

  @media (max-width: 1919px) {
    height: 350px;
  }

  @media (max-width: 1439px) {
    height: 300px;
    width: calc(100% - 50px);
    left: 50px;
  }

  @media (max-width: 1240px) {
    height: 250px;
  }

  @media (max-width: 1024px) {
    height: 250px;
    width: calc(100% - 30px);
    left: 30px;
  }

  @media (max-width: 768px) {
    width: calc(100% - 20px);
    left: 20px;
  }

  @media (max-width: 500px) {
    // left: 20px;
    // height: 189px;
  }

  @media (max-width: 375px) {
    left: 20px;
    height: 189px;
  }
`;

const content_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 120px 180px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  h1 {
    color: var(--black-1);
    font-family: Poppins;
    font-size: 40px;
    font-weight: 700;
    line-height: 120%;
  }

  @media (max-width: 1919px) {
    padding: 100px 90px;
  }

  @media (max-width: 1439px) {
    padding: 90px 40px;
  }

  @media (max-width: 1119px) {
    padding: 60px 20px;
  }

  @media (max-width: 1024px) {
    padding: 80px 20px;
    text-align: center;
    h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 24px;
    }
  }
`;

const content_container = css`
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 375px) {
    width: 100%;
    gap: 34px;
  }
`;

const content_box = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 100%;

  div:first-of-type {
    background-color: var(--primary);

    p {
      color: var(--white);
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const content = css`
  display: flex;
  flex-direction: row;
  justify-content: first;
  align-items: center;
  align-content: center;
  gap: 40px;

  width: 100%;
  padding: 30px 50px;
  box-sizing: border-box;

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
    flex-grow: 1;

    span {
      font-weight: 700;
    }
  }

  @media (max-width: 1440px) {
    img {
      width: 115px;
      height: 110px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 1239px) {
    padding: 20px 25px;
    img {
      width: 110px;
      height: 105px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 1024px) {
    padding: 25px 120px;

    img {
      width: 157.5px;
      height: 150px;
    }

    p {
      // text-align: center;
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px 50px;
    gap: 24px;

    img {
      width: 100px;
      height: auto;
    }

    p {
      font-size: 16px;
      word-break: keep-all;
    }
  }

  @media (max-width: 375px) {
    gap: 24px;
    padding: 24px 50px;
    max-width: 335px;

    img {
      width: 100px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 375px) {
    gap: 24px;
    padding: 24px 50px;

    img {
      width: 100px;
    }

    p {
      font-size: 14px;
    }
  }
`;
