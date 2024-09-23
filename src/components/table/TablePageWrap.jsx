/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useHeaderHeight } from "@hooks/useHeaderHeight";
import useIsMobile from "@hooks/useIsMobile";

export default function TablePageWrap({ children }) {
  const { isMobile } = useIsMobile();
  const { headerHeight } = useHeaderHeight();

  const ctn_pc = css`
    width: 100%;
    margin-top: ${headerHeight}px;
    box-sizing: border-box;
    padding: 160px 205px 216px 210px;
    @media (max-width: 1280px) {
      padding: 120px 160px 196px 160px;
    }
    @media (max-width: 1024px) {
      padding: 100px 100px 176px 100px;
    }
    @media (max-width: 767px) {
      padding: 80px 80px 156px 80px;
    }
  `;
  const ctn_mobile = css`
    width: 100%;
    margin-top: ${headerHeight}px;
    box-sizing: border-box;
    padding: 34px 20px 265px 20px;
  `;

  return <main css={isMobile === false ? ctn_pc : ctn_mobile}>{children}</main>;
}
