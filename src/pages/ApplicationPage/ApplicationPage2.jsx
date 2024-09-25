/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useHeaderHeight } from "@hooks/useHeaderHeight";
import PageTitle from "@components/ui/PageTitle";
import TablePageForm from "@components/table/TablePageForm";
import TablePageTitle from "@components/table/TablePageTitle";
import PosterCard from "./PosterCard";

export default function ApplicationPage2() {
  const { headerHeight } = useHeaderHeight();

  const page_wrap = css`
    padding-top: ${headerHeight}px;
  `;

  const content_wrap = css`
    padding: 120px 210px;

    h1 {
      color: var(--black, #111);
      font-size: 40px;
      font-weight: 700;
      line-height: normal;
    }

    @media (max-width: 1520px) {
      padding: 120px 140px 353px;
    }

    @media (max-width: 1280px) {
      padding: 120px 100px 353px;
    }

    @media (max-width: 1024px) {
      padding: 60px 65px 353px;
    }

    @media (max-width: 768px) {
      padding: 60px 40px 353px;
    }

    @media (max-width: 375px) {
      padding: 60px 20px 353px;
    }
  `;

  return (
    <div css={page_wrap}>
      <PageTitle title="설명회 신청" hasBorder />
      <div css={content_wrap}>
        <TablePageTitle title="프로그램" hasBorder={false} />

        <div css={search_bar}>
          <div css={page}>
            전체 : <span>0</span> (1/1페이지)
          </div>
          <TablePageForm />
        </div>

        <PosterCard />
      </div>
    </div>
  );
}

const search_bar = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;

  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 0 54px 0;
  }
`;

const page = css`
  position: absolute;
  bottom: 0;
  left: 0;

  box-sizing: border-box;

  color: var(--black, #111);
  font-size: 17px;
  font-weight: 400;
  line-height: normal;

  span {
    color: #0055d4;
  }
`;
