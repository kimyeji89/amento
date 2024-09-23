/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useHeaderHeight } from "@hooks/useHeaderHeight";
import PageTitle from "@components/ui/PageTitle";
import TablePageTitle from "@components/table/TablePageTitle";
import TablePageForm from "@components/table/TablePageForm";
import TablePageTable from "@components/table/TablePageTable";

export default function ConsultingPage2() {
  const { headerHeight } = useHeaderHeight();

  const page_wrap = css`
    padding-top: ${headerHeight}px;
  `;

  return (
    <div css={page_wrap}>
      <PageTitle title="창업 컨설팅" hasBorder={true} />
      <div css={ctn}>
        <TablePageTitle title="리스트" />
        <TablePageForm />
        <TablePageTable link="/" />
      </div>
    </div>
  );
}

const ctn = css`
  width: 100%;
  box-sizing: border-box;
  padding: 120px 210px 176px;
  @media (max-width: 1280px) {
    padding: 120px 140px 166px 140px;
  }
  @media (max-width: 1024px) {
    padding: 100px 100px 156px 100px;
  }
  @media (max-width: 767px) {
    padding: 80px 80px 146px 80px;
  }
  @media (max-width: 400px) {
    padding: 34px 20px 265px 20px;
  }
`;
