/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function ConsultHistoryPage() {
  return (
    <main css={ctn}>
      <h2 css={page_title}>상담내역</h2>
      <form action="GET" css={table_search}>
        <label htmlFor="search">검색</label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="검색"
          css={search_bar}
        />
      </form>
    </main>
  );
}

const ctn = css`
  width: 100%;
  margin-top: 90px;
  min-height: calc(100vh - 90px - 332.5px);
  padding: 160px 210px;
  box-sizing: border-box;
`;

const page_title = css`
  color: var(--black, #111);
  font-size: 40px;
  font-weight: 700;
`;

const table_search = css`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 14px;
`;

const search_bar = css`
  display: flex;
  width: 314px;
  height: 50px;
  box-sizing: border-box;
  padding: 13px 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #cecece;
  background: var(--fff, #fff);
  color: var(--black, #111);
  font-size: 15px;
  font-weight: 500;
`;
