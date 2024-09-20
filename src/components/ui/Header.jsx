/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useLocationControl from "@hooks/useLocationControl";
import useIsMobile from "@hooks/useIsMobile";
import { useHeaderHeight } from "@hooks/useHeaderHeight";
import { ReactComponent as UserDefault } from "@svgs/header/userDefault.svg";
import { ReactComponent as UserSelected } from "@svgs/header/userSelected.svg";
import { ReactComponent as ChevDown } from "@svgs/header/chevDown.svg";
import { ReactComponent as ChevUp } from "@svgs/header/chevUp.svg";
import { ReactComponent as Menu } from "@svgs/header/menu.svg";
import { ReactComponent as Close } from "@svgs/header/close.svg";

export default function Header() {
  const { isMobile } = useIsMobile();
  const { checkLocation } = useLocationControl();
  const { headerRef } = useHeaderHeight();
  const [isDesktopUserOpen, setIsDesktopUserOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileUserOpen, setIsMobileUserOpen] = useState(false);

  function handleOpenDesktopUser(e) {
    setIsDesktopUserOpen(!isDesktopUserOpen);
  }

  function handleOpenMobileMenu(e) {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function handleOpenMobileUser(e) {
    setIsMobileUserOpen(!isMobileUserOpen);
  }

  return (
    <>
      {isMobile === false && (
        <header css={header} className="desktop_menu header" ref={headerRef}>
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
                  <Link to="/companyIntro" css={nav_link}>
                    <p>회사소개</p>
                  </Link>
                </li>
                <li>
                  <Link to="/consulting" css={nav_link}>
                    <p>창업 컨설팅</p>
                  </Link>
                </li>
                <li>
                  <Link to="/service" css={nav_link}>
                    <p>가맹사업 서비스</p>
                  </Link>
                </li>
                <li>
                  <Link to="/application" css={nav_link}>
                    <p>설명회 신청</p>
                  </Link>
                </li>
                <li>
                  <Link to="/businessReview" css={nav_link}>
                    <p>사업후기</p>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="user" css={user}>
              <button
                type="button"
                css={user_button}
                onClick={handleOpenDesktopUser}
              >
                {isDesktopUserOpen === false ? (
                  <>
                    <UserDefault css={user_icon} />
                    <p css={user_text}>
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
              {isDesktopUserOpen && (
                <ul className="user_menu" css={user_menu}>
                  <li>
                    <Link
                      to="/editUser"
                      css={user_link}
                      className={checkLocation(["/editUser"]) && "selected"}
                    >
                      <p>회원정보 수정</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/consultHistory"
                      css={user_link}
                      className={
                        checkLocation(["/consultHistory"]) && "selected"
                      }
                    >
                      <p>상담내역</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/estimateSheet"
                      css={user_link}
                      className={
                        checkLocation(["/estimateSheet"]) && "selected"
                      }
                    >
                      <p>견적서</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/payHistory"
                      css={user_link}
                      className={checkLocation(["/payHistory"]) && "selected"}
                    >
                      <p>결제내역</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/QnA"
                      css={user_link}
                      className={checkLocation(["/QnA"]) && "selected"}
                    >
                      <p>Q&A</p>
                    </Link>
                  </li>
                </ul>
              )}

              <span className="divider" css={divider}></span>
              <Link to="/joinTos" css={link}>
                <p>회원가입</p>
              </Link>
            </div>
          </div>
        </header>
      )}
      {isMobile === true && (
        <header
          css={mobile_header}
          className="mobile_menu header"
          ref={headerRef}
        >
          <div css={mobile_ctn}>
            <div className="logo" css={logo}>
              <Link to="/">
                <h1 className="text">AMENTO VENTURES</h1>
                <img src="/assets/images/logoPicture.png" alt="logo" />
              </Link>
            </div>
            {isMobileMenuOpen ? (
              <Close onClick={handleOpenMobileMenu} />
            ) : (
              <Menu css={mobile_menu_button} onClick={handleOpenMobileMenu} />
            )}
          </div>
          {isMobileMenuOpen && (
            <div css={mobile_menu_ctn}>
              <div className="user" css={user}>
                <button
                  type="button"
                  css={mobile_user_button}
                  onClick={handleOpenMobileUser}
                >
                  <UserDefault css={mobile_user_icon} />
                  <p css={user_text}>
                    <span className="user_name" css={user_name}>
                      amento
                    </span>
                    <span className="user_call">님</span>
                  </p>
                  {isMobileUserOpen === false ? (
                    <ChevDown css={chev_icon} />
                  ) : (
                    <ChevUp css={chev_icon} />
                  )}
                </button>
              </div>
              {isMobileUserOpen && (
                <ul css={mobile_user_menu}>
                  <li>UX/UI</li>
                  <li>Branding</li>
                  <li>Charactor</li>
                  <li>Contents</li>
                  <li>Photography</li>
                </ul>
              )}
              <nav>
                <ul css={mobile_menu}>
                  <li>
                    <Link to="/companyIntro" onClick={handleOpenMobileMenu}>
                      <p>회사소개</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/consulting" onClick={handleOpenMobileMenu}>
                      <p>창업 컨설팅</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/service" onClick={handleOpenMobileMenu}>
                      <p>가맹사업 서비스</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/application" onClick={handleOpenMobileMenu}>
                      <p>설명회 신청</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/businessReview" onClick={handleOpenMobileMenu}>
                      <p>사업후기</p>
                    </Link>
                  </li>
                </ul>
              </nav>
              <button css={mobile_logout_button}>로그아웃</button>
            </div>
          )}
        </header>
      )}
    </>
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
    height: fit-content;
    padding: 18px 10px;
  }
`;

const ctn = css`
  display: flex;
  width: 1500px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1919px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }
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
    height: 32px;
  }
  @media (max-width: 1024px) {
    height: 30px;
  }
  @media (max-width: 767px) {
    height: 26px;
  }
  @media (max-width: 375px) {
    height: 30px;
  }
  @media (max-width: 320px) {
  26px;
  }
`;

const nav = css`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 80px;
  }
  @media (max-width: 1919px) {
    ul {
      gap: 40px;
    }
  }
  @media (max-width: 1280px) {
    ul {
      gap: 20px;
    }
  }
  @media (max-width: 1024px) {
    ul {
      gap: 18px;
    }
  }
  @media (max-width: 767px) {
    ul {
      gap: 16px;
    }
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 375px) {
    display: none;
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
  @media (max-width: 375px) {
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
  @media (max-width: 375px) {
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
    gap: 14px;
  }
  @media (max-width: 1024px) {
    gap: 12px;
  }
  @media (max-width: 950px) {
    gap: 8px;
  }
  @media (max-width: 767px) {
    gap: 8px;
  }
  @media (max-width: 499px) {
  }
  @media (max-width: 375px) {
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
    gap: 7px;
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
`;

const user_text = css`
  color: var(--2C2825, #2c2825);
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
`;

/* mobile */

const mobile_menu_button = css`
  @media (max-width: 375px) {
    display: block;
  }
`;

const mobile_ctn = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const mobile_header = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 66px;
  box-shadow: 0px 4px 20px 0px #0000001a;
  background-color: var(--white);
  box-sizing: border-box;
  padding: 10px 20px;
  justify-content: space-between;
`;

const mobile_menu_ctn = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 66px;
  left: 0;
  right: 0;
  width: 100%;
  height: calc(100vh - 66px);
  box-sizing: border-box;
  padding: 34px;
  background-color: var(--white);
  overflow-y: scroll;
`;

const mobile_user_menu = css`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 14px 40px 0;
  color: #454545;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 200%;
`;

const mobile_menu = css`
  display: flex;
  flex-direction: column;
  gap: 44px;
  box-sizing: border-box;
  padding: 34px 0;

  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  a {
    text-decoration: none;
    color: #222;
  }
`;

const mobile_logout_button = css`
  display: flex;
  height: 40px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid var(--primary, #9627e7);
  background: #fff;
  color: var(--primary, #9627e7);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const mobile_user_icon = css`
  width: 30px;
  height: 30px;
`;

const mobile_user_button = css`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 20px;
  gap: 8px;
`;
