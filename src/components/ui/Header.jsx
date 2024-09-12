/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { ReactComponent as UserDefault } from "@svgs/header/userDefault.svg";
import { ReactComponent as UserSelected } from "@svgs/header/userSelected.svg";
import { ReactComponent as ChevDown } from "@svgs/header/chevDown.svg";
import { ReactComponent as ChevUp } from "@svgs/header/chevUp.svg";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleChangeOpen(e) {
    setIsOpen(!isOpen);
  }

  return (
    <header css={header}>
      <div css={ctn}>
        <div className="logo" css={logo}>
          <Link to="/">
            <h1 className="text">AMENTO VENTURES</h1>
            <img src="/assets/images/logoPicture.png" alt="logo" />
          </Link>
        </div>
        <nav className="nav" css={nav}>
          <ul>
            <li>
              <Link to="/" css={nav_link}>
                <p>회사소개</p>
              </Link>
            </li>
            <li>
              <Link to="/" css={nav_link}>
                <p>서비스</p>
              </Link>
            </li>
            <li>
              <Link to="/" css={nav_link}>
                <p>설명회 신청</p>
              </Link>
            </li>
            <li>
              <Link to="/" css={nav_link}>
                <p>창업 컨설팅</p>
              </Link>
            </li>
            <li>
              <Link to="/" css={nav_link}>
                <p>사업후기</p>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="user" css={user}>
          <button type="button" css={user_button} onClick={handleChangeOpen}>
            {isOpen === false ? (
              <>
                <UserDefault css={user_icon} />
                <p>
                  <span className="user_name" css={user_name}>
                    amento
                  </span>
                  <span className="user_call">님</span>
                </p>
                <ChevDown css={chev_icon} />
              </>
            ) : (
              <>
                <UserSelected css={user_icon} />
                <p>
                  <span className="user_name" css={user_name_selected}>
                    amento
                  </span>
                  <span className="user_call" css={user_call_selected}>
                    님
                  </span>
                </p>
                <ChevUp css={chev_icon} />
              </>
            )}
          </button>
          {isOpen && (
            <ul className="user_menu" css={user_menu}>
              <li>
                <Link to="/" css={user_link}>
                  <p>회원정보 수정</p>
                </Link>
              </li>
              <li>
                <Link to="/" css={user_link}>
                  <p>상담내역</p>
                </Link>
              </li>
              <li>
                <Link to="/" css={user_link}>
                  <p>견적서</p>
                </Link>
              </li>
              <li>
                <Link to="/" css={user_link} className="selected">
                  <p>결제내역</p>
                </Link>
              </li>
              <li>
                <Link to="/" css={user_link}>
                  <p>Q&A</p>
                </Link>
              </li>
            </ul>
          )}

          <span className="divider" css={divider}></span>
          <Link to="/" css={link}>
            <p>회원가입</p>
          </Link>
        </div>
      </div>
    </header>
  );
}

const header = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
  box-shadow: 0px 4px 20px 0px #0000001a;
  background-color: var(--white);
  @media (max-width: 1919px) {
    box-sizing: border-box;
    padding: 0 40px;
  }
  @media (max-width: 1280px) {
    height: 80px;
  }
  @media (max-width: 1024px) {
    height: 70px;
  }
  @media (max-width: 767px) {
    height: 60px;
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const ctn = css`
  display: flex;
  width: 1500px;
  justify-content: space-between;
  align-items: center;
`;

const logo = css`
  height: 48px;
  a {
    display: flex;
    height: 100%;
    h1 {
      display: none;
    }
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 1280px) {
    height: 36px;
  }
  @media (max-width: 1024px) {
    height: 30px;
  }
  @media (max-width: 767px) {
    height: 26px;
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const nav = css`
  ul {
    display: flex;
    gap: 80px;
  }
  @media (max-width: 1280px) {
    ul {
      gap: 24px;
    }
  }
  @media (max-width: 1024px) {
    ul {
      gap: 20px;
    }
  }
  @media (max-width: 767px) {
    ul {
      gap: 16px;
    }
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const nav_link = css`
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  text-decoration: none;
  color: #454545;
  white-space: nowrap;
  @media (max-width: 1280px) {
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 950px) {
    font-size: 15px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const link = css`
  font-size: 17px;
  text-decoration: none;
  color: #2c2825;
  @media (max-width: 1280px) {
    font-size: 16px;
  }
  @media (max-width: 950px) {
    font-size: 15px;
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

const user = css`
  display: flex;
  align-items: center;
  gap: 30px;
  position: relative;
  @media (max-width: 1280px) {
    gap: 24px;
  }
  @media (max-width: 1024px) {
    gap: 16px;
  }
  @media (max-width: 950px) {
    gap: 8px;
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

const user_button = css`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  font-size: 17px;
  @media (max-width: 1280px) {
    font-size: 16px;
  }
  @media (max-width: 1024px) {
    gap: 6px;
  }
  @media (max-width: 950px) {
    font-size: 15px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
    gap: 4px;
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const user_icon = css`
  @media (max-width: 1280px) {
  }
  @media (max-width: 1024px) {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 950px) {
    display: none;
  }
`;

const chev_icon = css`
  @media (max-width: 1280px) {
  }
  @media (max-width: 1024px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 767px) {
    width: 18px;
    height: 18px;
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const user_name = css`
  font-weight: 700;
`;

const user_name_selected = css`
  ${user_name};
  color: var(--primary);
`;

const user_call_selected = css`
  color: var(--primary);
`;

const divider = css`
  display: block;
  width: 1px;
  height: 12px;
  background-color: #2c2825;
  opacity: 0.3;
  @media (max-width: 1280px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 767px) {
    height: 10px;
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const user_menu = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 30px);
  left: -8px;
  width: calc(100% - 104px);
  gap: 20px;
  box-sizing: border-box;
  padding: 24px 34px;
  border-radius: 15px;
  background-color: var(--primary);
  color: #ffffff;
  @media (max-width: 1280px) {
    top: calc(100% + 25px);
    width: calc(100% - 48px - 55px + 16px);
    padding: 24px 24px;
  }
  @media (max-width: 1024px) {
    top: calc(100% + 24px);
    width: calc(100% - 32px - 48px + 16px);
    padding: 22px 20px;
    gap: 16px;
  }
  @media (max-width: 767px) {
    top: calc(100% + 20px);
    width: calc(100% - 16px - 48px + 16px);
    padding: 20px 16px;
    gap: 14px;
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;

const user_link = css`
  color: #ffffff;
  font-size: 17px;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  &.selected {
    text-decoration: underline;
    font-weight: 700;
  }
  @media (max-width: 1280px) {
    font-size: 16px;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 374px) {
  }
  @media (max-width: 320px) {
  }
`;
