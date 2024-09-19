/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useHeaderHeight } from "@hooks/useHeaderHeight";
import useIsMobile from "@hooks/useIsMobile";

export function PageWrap({ children, pb = "0" }) {
  const { isMobile } = useIsMobile();
  const { headerHeight } = useHeaderHeight();
  let pt = isMobile ? "80" : "160";

  const page_wrap = (pt, pb) => css`
    width: 500px;
    padding: ${pt}px 0 ${pb}px;
    margin: ${headerHeight}px auto 0;
    box-sizing: border-box;

    @media (max-width: 1024px) {
      width: 90%;
    }

    @media (max-width: 375px) {
      width: 100%;
      padding: ${pt}px 20px 333px;
    }
  `;

  return <div css={page_wrap(pt, pb)}>{children}</div>;
}

export function PageWrapWide({ children, pb = "0" }) {
  const { isMobile } = useIsMobile();
  const { headerHeight } = useHeaderHeight();
  let pt = isMobile ? "80" : "160";

  const page_wrap_wide = (pt, pb) => css`
    width: 800px;
    padding: ${pt}px 0 ${pb}px;
    margin: ${headerHeight}px auto 0;
    box-sizing: border-box;

    @media (max-width: 1024px) {
      width: 90%;
    }

    @media (max-width: 375px) {
      width: 100%;
      padding: ${pt}px 20px 333px;
    }
  `;

  return <div css={page_wrap_wide(pt, pb)}>{children}</div>;
}
