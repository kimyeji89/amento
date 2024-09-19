/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useHeaderHeight } from "@hooks/useHeaderHeight";
import PageTitle from "@components/ui/PageTitle";
import InProgress from "@components/ui/InProgress";

export default function BusinessReviewPage() {
  const { headerHeight } = useHeaderHeight();

  const page_wrap = css`
    padding-top: ${headerHeight}px;
  `;
  return (
    <div css={page_wrap}>
      <PageTitle title="사업후기" hasBorder />
      <InProgress />
    </div>
  );
}
