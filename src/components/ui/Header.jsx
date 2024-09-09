/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { ReactComponent as UserDefault } from "@svgs/userDefault.svg";
import { ReactComponent as UserSelected } from "@svgs/userSelected.svg";
import { ReactComponent as ChevDown } from "@svgs/chevDown.svg";
import { ReactComponent as ChevUp } from "@svgs/chevUp.svg";
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
            <p className="text">AMENTO VENTURES</p>
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
                <UserDefault />
                <p>
                  <span className="user_name" css={user_name}>
                    amento
                  </span>
                  <span className="user_call">님</span>
                </p>
                <ChevDown />
              </>
            ) : (
              <>
                <UserSelected />
                <p>
                  <span className="user_name" css={user_name_selected}>
                    amento
                  </span>
                  <span className="user_call" css={user_call_selected}>
                    님
                  </span>
                </p>
                <ChevUp />
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
    p {
      display: none;
    }
    img {
      width: 200px;
      height: 48px;
    }
  }
`;

const nav = css`
  ul {
    display: flex;
    gap: 80px;
  }
`;

const link = css`
  font-size: 17px;
  line-height: 20.29px;
  text-decoration: none;
  color: #2c2825;
`;

const nav_link = css`
  font-size: 20px;
  font-weight: 500;
  line-height: 23.87px;
  text-align: left;
  text-decoration: none;
  color: #454545;
`;

const user = css`
  display: flex;
  align-items: center;
  gap: 30px;
  position: relative;
`;

const user_button = css`
  display: flex;
  align-items: center;
  gap: 8px;
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
`;

const user_menu = css`
  position: absolute;
  top: calc(100% + 30px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 15px;
  padding: 24px 34px;
  box-sizing: border-box;
  background-color: var(--primary);
  color: #ffffff;
`;

const user_link = css`
  color: #ffffff;
  font-size: 17px;
  font-weight: 400;
  line-height: 20.29px;
  text-align: center;
  text-decoration: none;
  &.selected {
    text-decoration: underline;
    font-weight: 700;
  }
`;
