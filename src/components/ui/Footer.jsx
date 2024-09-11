/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer css={footer}>
      <div css={ctn}>
        <div css={info}>
          <p>
            <span css={info_text}>대표이사: 박형미</span>
          </p>
          <p css={info_text_ctn}>
            <span css={info_text}>사업자 등록번호 : 246-86-02608</span>
            <span css={info_divider}></span>
            <span css={info_text}>
              통신판매신고번호 : 제 2024-서울영등포-1348
            </span>
          </p>
          <div css={info_with_title}>
            <p css={info_title}>office</p>
            <p css={info_content}>
              서울시 영등포구 양평동 2가 19-4 양평동오피스텔 201호
            </p>
          </div>
          <div css={info_with_title}>
            <p css={info_title}>contact</p>
            <div css={info_content_cnt}>
              <p css={info_content}>TEL : 070.7700.1555</p>
              <p css={info_content}>email : amentoventures@gmail.com</p>
              <p css={info_content}>
                평일 : 9:00 ~ 18:00 (11:30 ~ 13:00 점심시간)
              </p>
            </div>
          </div>
          <p>
            <Link to="/" css={info_link_ctn}>
              <span css={info_link}>개인정보처리방침</span>
            </Link>
            <span css={info_content}>개인정보관리책임자 : 박형미</span>
          </p>
        </div>
        <span css={divider}></span>
        <p css={copyright}>
          Copyright ⓒ 2024 주식회사 아멘토벤처스 All rights reserved
        </p>
      </div>
    </footer>
  );
}

const footer = css`
  width: 100%;
  background-color: #222222;
  color: var(--white);
  display: flex;
  justify-content: start;
  padding: 50px 100px;
  box-sizing: border-box;
  @media (max-width: 1199px) {
    padding: 40px 100px;
  }
  @media (max-width: 1024px) {
    padding: 36px 110px;
  }
  @media (max-width: 767px) {
    padding: 32px 64px;
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const ctn = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1199px) {
  }
  @media (max-width: 1024px) {
    gap: 16px;
  }
  @media (max-width: 767px) {
    gap: 14px;
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const info = css`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media (max-width: 1199px) {
    gap: 12px;
  }
  @media (max-width: 1024px) {
    gap: 10px;
  }
  @media (max-width: 767px) {
    gap: 8px;
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const info_text_ctn = css`
  display: flex;
  gap: 14px;
  align-items: center;
  @media (max-width: 1199px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const info_text = css`
  font-family: "Poppins", Poppins, sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 18.2px;
  letter-spacing: -0.14000000059604645px;
  opacity: 0.8;
  @media (max-width: 1199px) {
  }
  @media (max-width: 1024px) {
    font-size: 13px;
  }
  @media (max-width: 767px) {
    font-size: 12px;
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const info_divider = css`
  display: block;
  width: 1px;
  height: 10px;
  background-color: #aaaaaa;
`;

const info_with_title = css`
  display: flex;
`;

const info_title = css`
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.5px;
  text-align: left;
  text-transform: uppercase;
  width: 110px;
  margin-right: 20px;
  @media (max-width: 1199px) {
    margin-right: 16px;
    line-height: 20px;
  }
  @media (max-width: 1024px) {
    margin-right: 12px;
    line-height: 18px;
    font-size: 13px;
  }
  @media (max-width: 767px) {
    margin-right: 10px;
    line-height: 16px;
    font-size: 12px;
    width: 90px;
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const info_content_cnt = css`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 110px - 20px);
`;

const info_content = css`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.5px;
  text-align: left;
  opacity: 0.8;
  margin-right: 29px;
  position: relative;
  white-space: nowrap;
  &:not(:last-child):after {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -14px;
    content: "";
    display: block;
    width: 1px;
    height: 10px;
    background-color: #aaaaaa;
  }
  @media (max-width: 1199px) {
    line-height: 20px;
  }
  @media (max-width: 1024px) {
    font-size: 13px;
    line-height: 18px;
  }
  @media (max-width: 767px) {
    line-height: 16px;
    font-size: 12px;
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const info_link_ctn = css`
  display: inline-block;
  width: 110px;
  margin-right: 20px;
  @media (max-width: 1199px) {
    margin-right: 16px;
  }
  @media (max-width: 1024px) {
    margin-right: 12px;
  }
  @media (max-width: 767px) {
    width: 90px;
    margin-right: 10px;
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;
const info_link = css`
  display: inline-block;
  height: 21px;
  font-size: 14px;
  letter-spacing: -0.3199999928474426px;
  color: var(--white);
  text-decoration: none;
  border-bottom: 1px solid var(--white);
  @media (max-width: 1199px) {
    height: 20px;
  }
  @media (max-width: 1024px) {
    font-size: 13px;
    height: 18px;
  }
  @media (max-width: 767px) {
    height: 16px;
    font-size: 12px;
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const divider = css`
  width: 100%;
  border: 1px solid #313131;
`;

const copyright = css`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 300;
  line-height: 20.8px;
  letter-spacing: -0.5px;
  color: #666666;
  @media (max-width: 1199px) {
    line-height: 20px;
  }
  @media (max-width: 1024px) {
    font-size: 13px;
    line-height: 18px;
  }
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 16px;
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;
