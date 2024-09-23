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
        <TablePageTitle title="리스트" />
        <TablePageForm />
        <TablePageTable link="/" />
      </div>
    </div>
  );
}

const table_ctn = css`
  box-sizing: border-box;
  padding: 120px 210px 176px;
`;
