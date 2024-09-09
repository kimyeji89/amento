/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PageTitle from "@components/ui/PageTitle";
import InProgress from "@components/ui/InProgress";

export default function ApplicationPage() {
  return (
    <div css={page_wrap}>
      <PageTitle title="설명회 신청" hasBorder />
      <InProgress />
    </div>
  );
}

const page_wrap = css`
  padding: 90px 0 0 0;
`;
