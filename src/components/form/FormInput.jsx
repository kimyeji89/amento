/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as DeleteInputValue } from "@svgs/sidePopUp/deleteInputValue.svg";
import { useState } from "react";

export default function FormInput({
  label,
  placeholder,
  required,
  isDetailForm,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div css={input_wrap}>
      <label css={label_style}>
        {label}
        {required && <span css={required_mark}>*</span>}
      </label>
      <input
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        css={input_style(isDetailForm)}
      />
      {inputValue && (
        <DeleteInputValue onClick={clearInput} css={delete_icon} />
      )}
    </div>
  );
}

const input_wrap = css`
  width: 100%;
  min-width: 0;
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 14px;
`;

const label_style = css`
  font-size: 17px;
  font-weight: 800;
  line-height: 20.4px;
  color: #3c3c3c;

  @media (max-width: 375px) {
    font-size: 15px;
  }
`;

const required_mark = css`
  color: var(--primary, #9627e7);
  font-size: 17px;
  font-weight: 600;
`;

const input_style = (isDetailForm) => css`
  border: 1px solid ${isDetailForm ? "#D9D9D9" : "#ededed"};
  padding: 20px 15px;
  border-radius: ${isDetailForm ? "5px" : "10px"};
  color: #181818;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;

  @media (max-width: 375px) {
    font-size: 14px;
    padding: 15px 15px;
  }
`;

const delete_icon = css`
  position: absolute;
  bottom: 16px;
  right: 14px;
  cursor: pointer;

  @media (max-width: 375px) {
    bottom: 13px;
  }
`;
