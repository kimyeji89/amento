/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useHeaderHeight } from "@hooks/useHeaderHeight";
import TablePageTitle from "@components/table/TablePageTitle";
import SearchBar from "./SearchBar";
import PayItem from "./PayItem";
import LoadMoreBtn from "./LoadMoreBtn";
import payHistoryData from "@data/payHistoryData";

export default function PayHistoryPage() {
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

    @media (max-width: 320px) {
      padding: ${headerHeight + 34}px 10px;
    }
  `;

  return (
    <div css={page_wrap}>
      <TablePageTitle title="결제내역" />
      <SearchBar />

      <div css={item_wrap}>
        {payHistoryData.map((item, index) => (
          <PayItem
            key={index}
            category={item.category}
            product={item.product}
            date={item.date}
            des={item.des}
            img={item.img}
          />
        ))}
      </div>

      <LoadMoreBtn />
    </div>
  );
}

const item_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 44px 0 34px 0;

  @media (max-width: 768px) {
    gap: 20px;
    padding: 34px 0;
  }
`;
