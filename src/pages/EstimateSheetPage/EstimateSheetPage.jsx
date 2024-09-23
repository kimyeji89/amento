/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { TablePageWrapTypeA } from "@components/table/TablePageWrap";
import InfoSection from "./InfoSection";
import ResultSection from "./ResultSection";
import TablePageTitle from "@components/table/TablePageTitle";

export default function EstimateSheetPage() {
  return (
    <TablePageWrapTypeA>
      <TablePageTitle title="견적서 (Quotation)" hasBorder={true} />
      <InfoSection />
      <ResultSection />
      <Link to={"/"} css={link_style}>
        <button type="button" css={button}>
          결제하기
        </button>
      </Link>
    </TablePageWrapTypeA>
  );
}

const link_style = css`
  text-decoration: none;
  color: var(--white, #fff);
`;
const button = css`
  display: flex;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 20px 90.5px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 80px;
  background: var(--primary, #9627e7);
  color: var(--white, #fff);
  leading-trim: both;
  font-family: Pretendard;
  text-edge: cap;
  font-size: 17px;
  font-weight: 700;
  line-height: 160%;
  @media (max-width: 375px) {
    padding: 15px 90.5px;
    line-height: normal;
  }
`;
