/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { ReactComponent as Search } from "@svgs/common/search.svg";
import { ReactComponent as ChevDown } from "@svgs/common/chevDown.svg";

function TablePageSearchBar() {
  const ctn = css`
    position: relative;
    height: 100%;
  `;

  const label = css`
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    cursor: pointer;
    @media (max-width: 1024px) {
      right: 16px;
    }
    @media (max-width: 768px) {
      right: 14px;
    }
  `;

  const label_text = css`
    display: none;
  `;

  const search_bar = css`
    display: flex;
    width: 314px;
    height: 50px;
    box-sizing: border-box;
    padding: 13px 20px;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #cecece;
    background: var(--fff, #fff);
    color: var(--black, #111);
    font-size: 15px;
    font-weight: 500;
    &::placeholder {
      color: var(--black, #111);
      font-family: Pretendard;
      font-size: 15px;
      font-weight: 500;
      opacity: 0.5;
    }
    @media (max-width: 1024px) {
      padding: 10px 16px;
      width: 280px;
      height: 42px;
      font-size: 14px;
      &::placeholder {
        font-size: 14px;
      }
    }
    @media (max-width: 768px) {
      padding: 10px 14px;
      width: 100%;
    }
  `;

  const search_icon = css`
    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  `;

  return (
    <div css={ctn}>
      <label htmlFor="search" css={label}>
        <span css={label_text}>검색</span>
        <Search css={search_icon} />
      </label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="검색"
        css={search_bar}
      />
    </div>
  );
}

function TablePageSelect() {
  const [viewOption, setViewOption] = useState(false);
  const [selected, setSelected] = useState("10개씩 보기");
  const optionData = ["10개씩 보기", "20개씩 보기", "30개씩 보기"];
  function handleViewOption() {
    setViewOption(!viewOption);
  }
  function handleSelectOption(e) {
    setSelected(e.currentTarget.innerText);
    setViewOption(!viewOption);
  }
  const select_box = css`
    display: flex;
    width: 148px;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: center;
    position: relative;
    border-radius: ${viewOption ? "10px 10px 0 0" : "10px"};
    box-shadow: 0 0 0 1px #cecece inset;
    background: var(--fff, #fff);
    @media (max-width: 767px) {
      width: 100%;
      max-width: 148px;
      min-width: 148px;
    }
    @media (max-width: 499px) {
      width: 100%;
      max-width: 100%;
      min-width: 100%;
    }
  `;
  const selected_option = css`
    display: flex;
    algin-align: center;
    position: relative;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    cursor: pointer;
    @media (max-width: 1024px) {
      height: 42px;
    }
  `;

  const value = css`
    box-sizing: border-box;
    padding: 16px 0 16px 20px;
    color: var(--black, #111);
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    @media (max-width: 1024px) {
      padding: 14px 0 14px 16px;
      font-size: 14px;
      line-height: 14px;
    }
    @media (max-width: 767px) {
      padding: 14px 0 14px 14px;
      font-size: 14px;
      line-height: 14px;
    }
  `;

  const chev_down = css`
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    @media (max-width: 1024px) {
      right: 16px;
    }
    @media (max-width: 767px) {
      right: 14px;
    }
  `;
  const options_ctn = css`
    width: 100%;
    height: auto;
  `;
  const options = css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50px - 1px);
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 16px 0;
    background-color: var(--white, #fff);
    box-shadow: 0 0 0 1px #cecece inset;
    border-radius: 0px 0px 10px 10px;
    @media (max-width: 1024px) {
      top: calc(42px - 1px);
      border-radius: 0px 0px 10px 10px;
    }
  `;

  const option = css`
    width: 100%;
    box-sizing: border-box;
    padding: 4px;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    @media (max-width: 1024px) {
      font-size: 15px;
    }
    @media (max-width: 767px) {
      font-size: 14px;
    }
    @media (max-width: 499px) {
      text-align: left;
      padding: 4px 0 4px 14px;
    }
  `;

  return (
    <div css={select_box}>
      <div css={selected_option} onClick={handleViewOption}>
        <p css={value}>{selected}</p>
        <ChevDown css={chev_down} />
      </div>
      {viewOption && (
        <div css={options_ctn}>
          <ul css={options}>
            {optionData.map((data, idx) => (
              <li css={option} onClick={handleSelectOption} key={idx + data}>
                {data}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function TablePageForm() {
  return (
    <form action="GET" css={form}>
      <TablePageSearchBar />
      <TablePageSelect />
    </form>
  );
}

const form = css`
  display: flex;
  justify-content: end;
  width: 100%;
  gap: 14px;
  @media (max-width: 768px) {
    gap: 8px;
  }
  @media (max-width: 499px) {
    flex-direction: column;
  }
`;
