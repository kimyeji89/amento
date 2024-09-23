/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useHeaderHeight } from "@hooks/useHeaderHeight";
import PageTitle from "@components/ui/PageTitle";
import TablePageTitle from "@components/table/TablePageTitle";
import TablePageForm from "@components/table/TablePageForm";
import TablePageTable from "@components/table/TablePageTable";
import BusinessExample from "./BusinessExample";

export default function BusinessReviewPage2() {
  const { headerHeight } = useHeaderHeight();

  const page_wrap = css`
    padding-top: ${headerHeight}px;
  `;

  return (
    <div css={page_wrap}>
      <PageTitle title="사업후기" hasBorder />
      <BusinessExample />
      <div css={table_ctn}>
        <TablePageTitle title="사업후기" />
        <TablePageForm />
        <TablePageTable buttonLink="/" detailLink="/businessReviewDetail" />
      </div>
    </div>
  );
}

const table_ctn = css`
  box-sizing: border-box;
  padding: 120px 210px 176px;
  @media (max-width: 1280px) {
    padding: 120px 160px 166px;
  }
  @media (max-width: 1024px) {
    padding: 100px 100px 176px 100px;
  }
  @media (max-width: 767px) {
    padding: 80px 80px 156px 80px;
  }
  @media (max-width: 375px) {
    padding: 34px 20px 267px 20px;
  }
`;
