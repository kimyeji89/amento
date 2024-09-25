/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as CalendarIcon } from "@svgs/joinDetailPage/calendar.svg";
import { useState } from "react";

export default function FormDatePicker({ label, isSearchBar }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.trim();
    setInputValue(value);
  };

  return (
    <div css={input_wrap}>
      <label css={label_style}>{label}</label>
      <input
        type="date"
        value={inputValue}
        placeholder={isSearchBar ? "2024.01.01" : "Select a date"}
        onChange={handleChange}
        css={input_style(inputValue, isSearchBar)}
      />
      <CalendarIcon css={calendar_icon(isSearchBar)} />
    </div>
  );
}

const input_wrap = css`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 14px;
  width: 100%;

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

  @media (max-width: 375px) {
    font-size: 15px;
  }
`;

const input_style = (inputValue, isSearchBar) => css`
  min-height: 20px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  font-family: Pretendard;

  padding: ${isSearchBar ? "15px 14px" : "19px 15px"};

  border: 1px solid #d9d9d9;
  background-color: #fff;
  height: 100%;
  border-radius: ${isSearchBar ? "10px" : "5px"};
  color: ${isSearchBar ? "#6a6a6a" : "#181818"};
  font-size: 15px;
  font-weight: 400;
  line-height: 17.9px;
  text-align: start;

  @media (max-width: 430px) {
    font-size: 12px;
    padding: ${isSearchBar ? "10px 6px" : "13px 14px"};
  }

  @media (max-width: 375px) {
    font-size: 12px;
    padding: ${isSearchBar ? "10px 14px" : "15px 13px"};
  }

  @media (max-width: 360px) {
    font-size: 11px;
    padding: ${isSearchBar ? "10px 4px" : "15px 13px"};
  }

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    bottom: 18px;
    right: 14px;
    background: url(../../images/calendar.svg);
    background-repeat: no-repeat;
    z-index: 10;
    cursor: pointer;

    @media (max-width: 375px) {
      bottom: 13px;
    }
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

  // Safari에서 왼쪽 정렬
  &::-webkit-date-and-time-value {
    text-align: left;
  }
`;

const calendar_icon = (isSearchBar) => css`
  position: absolute;
  bottom: ${isSearchBar ? "14px" : "18px"};
  right: 14px;

  @media (max-width: 430px) {
    width: ${isSearchBar ? "20px" : ""};
    height: ${isSearchBar ? "20px" : ""};
    bottom: ${isSearchBar ? "12px" : ""};
    right: ${isSearchBar ? "8px" : "14px"};
  }

  // @media (max-width: 520px) {
  //   right: ${isSearchBar ? "8px" : "14px"};
  // }

  @media (max-width: 375px) {
    bottom: ${isSearchBar ? "12px" : "13px"};
  }
`;
