/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useHeaderHeight } from "@hooks/useHeaderHeight";
import TablePageTitle from "@components/table/TablePageTitle";
import PayProduct from "./PayProduct";
import { PayInfo, RefundInfo } from "./PayInfo";

export default function PayHistoryDetailPage() {
  const { headerHeight } = useHeaderHeight();

  const page_wrap = css`
    padding: ${headerHeight + 160}px 210px;
    background: #f6f7fa;

    @media (max-width: 1520px) {
      padding: ${headerHeight + 120}px 140px;
    }

    @media (max-width: 1280px) {
      padding: ${headerHeight + 120}px 100px;
    }

    @media (max-width: 1024px) {
      padding: ${headerHeight + 80}px 65px;
    }

    @media (max-width: 768px) {
      padding: ${headerHeight + 34}px 40px;
    }

    @media (max-width: 375px) {
      padding: ${headerHeight + 34}px 20px;
    }
  `;

  return (
    <div css={page_wrap}>
      <TablePageTitle title="결제 상세" hasBorder={false} />

      <div css={line} />

      <div css={box_wrap}>
        <PayProduct />
        <PayInfo />
        <RefundInfo />
      </div>
    </div>
  );
}

const line = css`
  width: 100%;
  height: 1px;
  margin: 24px 0 0 0;
  background: #000;
`;

const box_wrap = css`
  padding: 34px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
