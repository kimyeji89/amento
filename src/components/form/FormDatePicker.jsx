/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as CalendarIcon } from "@svgs/joinDetailPage/calendar.svg";
import { useState } from "react";

export default function FormDatePicker({ label }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div css={input_wrap}>
      <label css={label_style}>{label}</label>
      <input
        type="date"
        value={inputValue}
        onChange={handleChange}
        css={input_style(inputValue)}
      />
      <CalendarIcon css={calendar_icon} />
    </div>
  );
}

const input_wrap = css`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 14px;

  input {
    placeholder: none;
  }

  input[type="date"]::before {
    content: attr(data-placeholder);
    width: 100%;
  }

  input[type="date"]:focus::before,
  input[type="date"]:valid::before {
    display: none;
  }
`;

const label_style = css`
  font-size: 17px;
  font-weight: 800;
  line-height: 20.4px;
  color: #3c3c3c;
`;

const input_style = (inputValue) => css`
  border: 1px solid #ededed;
  padding: 18px 15px;
  border-radius: 10px;
  color: #181818;
  font-size: 15px;
  font-weight: 400;
  line-height: 17.9px;

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    bottom: 16px;
    right: 14px;
    background: url(../../images/calendar.svg);
    background-repeat: no-repeat;
    z-index: 10;
    cursor: pointer;
  }

  &::-webkit-datetime-edit-text {
    -webkit-appearance: none;
    display: ${inputValue ? "inline" : "none"};
  }
  &::-webkit-datetime-edit-month-field {
    -webkit-appearance: none;
    display: ${inputValue ? "inline" : "none"};
  }
  &::-webkit-datetime-edit-day-field {
    -webkit-appearance: none;
    display: ${inputValue ? "inline" : "none"};
  }
  &::-webkit-datetime-edit-year-field {
    -webkit-appearance: none;
    display: ${inputValue ? "inline" : "none"};
  }
`;

const calendar_icon = css`
  position: absolute;
  bottom: 16px;
  right: 14px;
`;
