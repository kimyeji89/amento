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

      <div css={vertical_line}></div>

      <div css={calendar}>
        <FormDatePicker isSearchBar />
        <span>~</span>
        <FormDatePicker isSearchBar />
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
  justify-content: space-between;
  align-items: center;

  margin: 34px 0 0 0;
  padding: 24px 58.5px;
  border-top: 1px solid #000;
  background: #f7f0ff;

  @media (max-width: 1680px) {
    padding: 20px 20px;
  }

  @media (max-width: 1440px) {
    gap: 0px;
    padding: 20px 10px;
  }

  @media (max-width: 1280px) {
    flex-direction: column;
    gap: 10px;
    padding: 20px 20px;
  }

  @media (max-width: 1024px) {
    padding: 10px 10px;
  }

  @media (max-width: 375px) {
    padding: 10px 10px;
  }
`;

const period = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;

  span {
    color: #131313;
    font-size: 20px;
    font-weight: 600;
    line-height: normal;
  }

  @media (max-width: 1440px) {
    gap: 6px;
    padding: 0 10px 0 0;
    span {
      font-size: 18px;
    }
  }

  @media (max-width: 1280px) {
    padding: 0;
    width: 100%;
    span {
      display: none;
    }
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

  & .button:last-child {
    border-radius: 0px 10px 10px 0px;
    border-right: none;
  }

  @media (max-width: 1280px) {
    width: 100%;
  }

  @media (max-width: 430px) {
    button {
      width: 63px;
      height: 40px;
      font-size: 13px;
    }
  }
`;

const vertical_line = css`
  width: 1px;
  height: 28px;
  margin: 0 20px;
  background: #cecece;

  @media (max-width: 1440px) {
    display: none;
  }
`;

const calendar = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-grow: 1;
  max-height: 50px;

  color: #131313;
  font-size: 15px;
  font-weight: 600;
  line-height: normal;

  div {
    gap: 0;
  }

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const button_wrap = css`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 0 0 0 24px;

  button {
    display: flex;
    flex-direction: row;
    width: 120px;
    height: 50px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 10px;

    font-size: 17px;
    font-weight: 700;
    line-height: normal;
  }

  @media (max-width: 1680px) {
    button {
      width: 100px;
    }
  }

  @media (max-width: 1440px) {
    padding: 0 0 0 16px;
  }

  @media (max-width: 1280px) {
    width: 100%;
    padding: 0px;
    button {
      width: 100%;
    }
  }

  @media (max-width: 430px) {
    button {
      width: 100%;
      height: 40px;
      gap: 5px;
      font-size: 15px;
    }
  }
`;

const search_btn = css`
  background: #111;
  color: #fff;

  @media (max-width: 1280px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const reset_btn = css`
  background: #fff;
  color: #111;
`;
