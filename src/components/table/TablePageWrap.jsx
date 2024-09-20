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
    padding: 160px 205px 160px 210px;
    /* 임시 */
    min-height: 100vh;
  `;
  const ctn_mobile = css`
    width: 100%;
    margin-top: ${headerHeight}px;
    box-sizing: border-box;
    padding: 160px 205px 160px 210px;
    /* 임시 */
    min-height: 100vh;
  `;

  return <main css={isMobile === false ? ctn_pc : ctn_mobile}>{children}</main>;
}
