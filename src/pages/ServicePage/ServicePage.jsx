/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useHeaderHeight } from "@hooks/useHeaderHeight";
import PageTitle from "@components/ui/PageTitle";
import ServiceSection1 from "./ServiceSection1";
import ServiceSection2 from "./ServiceSection2";
import ServiceSection3 from "./ServiceSection3";

export default function ServicePage() {
  const { headerHeight } = useHeaderHeight();

  const page_wrap = css`
    padding-top: ${headerHeight}px;
  `;
  return (
    <div css={page_wrap}>
      <PageTitle title="서비스" />
      <ServiceSection1 />
      <ServiceSection2 />
      <ServiceSection3 />
    </div>
  );
}
