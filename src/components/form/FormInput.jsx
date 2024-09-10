/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as DeleteInputValue } from "@svgs/deleteInputValue.svg";
import { useState } from "react";

export default function FormInput({ label, placeholder }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div css={input_wrap}>
      <label css={label_style}>{label}</label>
      <input
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        css={input_style}
      />
      {inputValue && (
        <DeleteInputValue onClick={clearInput} css={delete_icon} />
      )}
    </div>
  );
}

const input_wrap = css`
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
`;

const input_style = css`
  border: 1px solid #ededed;
  padding: 18px 15px;
  border-radius: 10px;
  color: #181818;
  font-size: 15px;
  font-weight: 400;
  line-height: 17.9px;
`;

const delete_icon = css`
  position: absolute;
  bottom: 16px;
  right: 14px;
  cursor: pointer;
`;
