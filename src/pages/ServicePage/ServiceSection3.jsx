/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";

export default function ServiceSection3() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section css={section_wrap}>
      <h1>조직도</h1>
      <div>
        <img
          src={
            isMobile
              ? "/assets/images/servicePage/organizationMo.png"
              : "/assets/images/servicePage/organization.png"
          }
          alt="organization"
        />
        {isMobile && (
          <img
            src="/assets/images/servicePage/organizationMo2.png"
            alt="organization"
          />
        )}
      </div>
    </section>
  );
}

const section_wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 44px;
  padding: 120px 30px;
  margin: 0 auto;
  max-width: 960px;

  h1 {
    color: var(--black-1);
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    line-height: normal;
  }

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1024px) {
    padding: 80px 15px;

    h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
    }
  }

  @media (max-width: 375px) {
    padding: 80px 30px;
    h1 {
      font-size: 24px;
    }
  }
`;
