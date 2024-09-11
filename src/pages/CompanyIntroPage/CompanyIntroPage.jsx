/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PageTitle from "@components/ui/PageTitle";
import IntroSection1 from "./IntroSection1";
import IntroSection2 from "./IntroSection2";
import IntroSection3 from "./IntroSection3";

export default function CompanyIntroPage() {
  return (
    <div css={page_wrap}>
      <PageTitle title={"회사소개"} />
      <IntroSection1 />
      <IntroSection2 />
      <IntroSection3 />
    </div>
  );
}

const page_wrap = css`
  padding: 90px 0 0 0;
`;
