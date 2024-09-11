/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as CheckOff } from "@svgs/checkOff.svg";
import { ReactComponent as CheckOn } from "@svgs/checkOn.svg";

export default function ProcessDetailPage() {
  return (
    <main css={ctn}>
      <h2 className="page_title">예비 가맹본부 준비 (직영점 1년 미만)</h2>
      <form className="form" css={form_ctn}>
        <div css={input_ctn}>
          <p className="group">창업컨설팅</p>
          <label htmlFor="창업컨설팅">
            <CheckOff />
            <span className="text">가맹본부 설계</span>
          </label>
          <input type="checkbox" name="창업컨설팅" id="창업컨설팅" />
          <label htmlFor="창업컨설팅">
            <CheckOff />
            <span className="text">가맹본부 설계</span>
          </label>
          <input type="checkbox" name="창업컨설팅" id="창업컨설팅" />
          <label htmlFor="창업컨설팅">
            <CheckOff />
            <span className="text">가맹본부 설계</span>
          </label>
          <input type="checkbox" name="창업컨설팅" id="창업컨설팅" />
          <label htmlFor="창업컨설팅">
            <CheckOff />
            <span className="text">가맹본부 설계</span>
          </label>
          <input type="checkbox" name="창업컨설팅" id="창업컨설팅" />
        </div>
      </form>
    </main>
  );
}

const ctn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 90px auto 0;
  padding: 80px 220px 266px 220px;
  .page_title {
    width: 100%;
    margin-bottom: 54px;
    color: var(--black, #111);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
  }
`;

const form_ctn = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const input_ctn = css`
  display: flex;

  .group {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150.5px;
    height: 50px;
    box-sizing: border-box;
    padding: 20px;
    gap: 6px;
    border-radius: 5px;
    background: var(--primary, #9627e7);
    margin-right: 24px;
    color: var(--white, #fff);
    text-align: center;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }
  label {
    display: flex;
    width: 183px;
    height: 50px;
    box-sizing: border-box;
    padding: 20px 14px;
    align-items: center;
    gap: 6px;
    border-radius: 5px;
    border: 1px solid #cecece;
    background: #fff;
    .text {
      color: var(--black, #111);
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
  label:not(:last-child) {
    margin-right: 12px;
  }
  input {
    display: none;
  }
`;
