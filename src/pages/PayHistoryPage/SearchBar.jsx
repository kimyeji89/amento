/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { ReactComponent as SearchIcon } from "@svgs/pageHistoryPage/searchWhite.svg";
import FormDatePicker from "../../components/form/FormDatePicker";

export default function SearchBar() {
  const [selected, setSelected] = useState("오늘");

  const buttons = ["오늘", "1주일", "1개월", "3개월", "6개월"];

  return (
    <div css={search_wrap}>
      <div css={period}>
        <span>기간</span>
        <div css={btn_group}>
          {buttons.map((button) => (
            <button
              key={button}
              className={`button ${selected === button ? "selected" : ""}`}
              onClick={() => setSelected(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
      <div css={calendar}>
        <FormDatePicker />
        <span>~</span>
        <FormDatePicker />
      </div>
      <div css={button_wrap}>
        <button css={search_btn}>
          <div>검색</div>
          <SearchIcon />
        </button>
        <button css={reset_btn}>검색 초기화</button>
      </div>
    </div>
  );
}

const search_wrap = css`
  display: flex;

  margin: 34px 0 0 0;
  padding: 24px 20px;
  border-top: 1px solid #000;
  background: #f7f0ff;
`;

const period = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border: 1px solid red;

  span {
    color: #131313;
    font-size: 20px;
    font-weight: 600;
    line-height: normal;
  }
`;

const btn_group = css`
  display: flex;
  border-radius: 10px 10px 10px 10px;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #cecece;

  button {
    flex: 1;
    padding: 5px 17px;
    width: 70px;
    height: 50px;
    border: none;
    cursor: pointer;
    text-align: center;
    background-color: white;
    border-right: 1px solid #cecece;
    color: #111;

    font-size: 15px;
    font-weight: 500;
    line-height: normal;
  }

  & .selected {
    background-color: #9b51e0;
    color: white;
    font-weight: 700;
  }

  &. .button:first-child {
    border-radius: 10px 0px 0px 10px;
  }

  &. .button:last-child {
    border-radius: 0px 10px 10px 0px;
    border-right: none;
  }

  &. .button:last-child {
    border-right: none;
  }
`;

const calendar = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: 1px solid blue;
`;

const button_wrap = css`
  display: flex;
  flex-direction: row;
  gap: 10px;
  border: 1px solid green;
`;

const search_btn = css`
  display: flex;
  flex-direction: row;
  width: 120px;
  height: 50px;
  //   padding: 20px 34px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 10px;
  background: #111;

  color: #fff;
  font-size: 17px;
  font-weight: 700;
  line-height: normal;
`;

const reset_btn = css`
  display: flex;
  width: 120px;
  height: 50px;
  //   padding: 20px 34px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 10px;
  border: 1px solid #bcbcbc;
  background: #fff;

  color: #111;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
