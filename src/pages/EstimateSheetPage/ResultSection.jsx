/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ResultTable from "./ResultTable";

export default function ResultSection() {
  return (
    <section css={ctn}>
      <h3 css={section_title}>아래와 같이 견적합니다. (천원단위 절삭)</h3>
      <ResultTable />
    </section>
  );
}

const ctn = css`
  margin-bottom: 44px;
  @media (max-width: 375px) {
    margin-bottom: 84px;
  }
`;

const section_title = css`
  margin-bottom: 24px;
  color: var(--black, #111);
  font-size: 24px;
  font-weight: 700;
  word-break: keep-all;
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
