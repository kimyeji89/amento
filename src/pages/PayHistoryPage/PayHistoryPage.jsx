/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useHeaderHeight } from "@hooks/useHeaderHeight";
import TablePageTitle from "@components/table/TablePageTitle";
import SearchBar from "./SearchBar";

export default function PayHistoryPage() {
  const { headerHeight } = useHeaderHeight();

  const page_wrap = css`
    padding: ${headerHeight + 160}px 210px;

    @media (max-width: 1280px) {
      padding: ${headerHeight + 120}px 100px;
    }

    @media (max-width: 1024px) {
      padding: ${headerHeight + 120}px 65px;
    }

    @media (max-width: 430px) {
      padding: ${headerHeight + 120}px 20px;
    }
  `;
  return (
    <div css={page_wrap}>
      <TablePageTitle title="결제내역" />
      <SearchBar />
    </div>
  );
}
