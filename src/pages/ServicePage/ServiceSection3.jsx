/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function ServiceSection3() {
  return (
    <section css={section_wrap}>
      <h1>조직도</h1>
      <img
        src="/assets/images/servicePage/organization.png"
        alt="organization"
      />
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
  width: 100%;
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
`;
