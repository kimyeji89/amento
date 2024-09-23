/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as SelectDownIcon } from "@svgs/consultWritePage/selectChevronDown.svg";

export default function SelectBox() {
  return (
    <div css={selectContainer}>
      <select css={select} defaultValue="">
        <option value="" disabled hidden>
          구분
        </option>
        <option>옵션1</option>
        <option>옵션2</option>
        <option>옵션3</option>
        <option>옵션4</option>
      </select>
      <SelectDownIcon css={icon} />
    </div>
  );
}

const selectContainer = css`
  position: relative;
  width: 148px;

  @media (max-width: 375px) {
    width: 100%;
  }
`;

const select = css`
  width: 100%;
  height: 50px;
  padding: 13px 20px;
  appearance: none; /* 기본 드롭다운 화살표 숨기기 */

  border-radius: 10px;
  border: 1px solid #cecece;

  background: #fff;
  font-size: 15px;
  color: #111;

  @media (max-width: 375px) {
    width: 100%;
    height: 40px;
    padding: 11px 20px;
    font-size: 13px;
  }
`;

const icon = css`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;
