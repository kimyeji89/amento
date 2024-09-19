/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { ReactComponent as CheckOff } from "@svgs/processDetailPage/checkOff.svg";
import { ReactComponent as CheckOn } from "@svgs/processDetailPage/checkOn.svg";

export default function CheckBoxInput({
  name,
  id,
  label,
  onClick,
  formData,
  isBig,
}) {
  return (
    <>
      <label
        htmlFor={id}
        onClick={onClick}
        className={isBig && "big"}
        css={label_css}
      >
        {formData[name][id] ? <CheckOn /> : <CheckOff />}
        <span
          className="text"
          dangerouslySetInnerHTML={{ __html: label.replace(/\n/g, "<br/>") }}
        ></span>
      </label>
      <input type="checkbox" name={name} id={id} css={input} />
    </>
  );
}

const label_css = css`
  cursor: pointer;
  display: flex;
  width: 183px;
  height: 50px;
  box-sizing: border-box;
  padding: 20px 14px;
  align-items: center;
  gap: 6px;
  border-radius: 5px;
  box-shadow: 0 0 0 1px #cecece inset;
  background: #fff;
  .text {
    color: var(--black, #111);
    text-align: left;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  &.big {
    height: 100%;
    padding: 16.5px 14px;
  }
  &.selected {
    position: relative;
    border-radius: 5px;
    box-shadow: 0 0 0 1px var(--primary, #9627e7) inset;
    background: #fff;
    &:after {
      position: absolute;
      display: block;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      content: "";
      box-shadow: 0px 6px 15px 0px rgba(224, 212, 233, 0.5);
    }
    .text {
      color: var(--primary, #9627e7);
      font-weight: 700;
    }
  }
  @media (max-width: 1024px) {
    width: fit-content;
  }
`;

const input = css`
  display: none;
`;
