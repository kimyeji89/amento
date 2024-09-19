/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useHeaderHeight } from "@hooks/useHeaderHeight";
import PageTitle from "@components/ui/PageTitle";
import InProgress from "@components/ui/InProgress";

export default function ConsultingPage() {
  const { headerHeight } = useHeaderHeight();

  const page_wrap = css`
    padding-top: ${headerHeight}px;
  `;

  return (
    <div css={page_wrap}>
      <PageTitle title="창업 컨설팅" hasBorder />
      <InProgress />
    </div>
  );
}
