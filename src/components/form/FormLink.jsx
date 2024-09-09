/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
export default function FormLink() {
  return (
    <div css={link_wrap}>
      <div css={link_lhs}>
        <Link to="/joinTos">
          <div css={link_btn}>회원가입</div>
        </Link>
      </div>
      <div css={link_rhs}>
        <Link to="/findId">
          <p>아이디 찾기</p>
        </Link>
        <div css={div_line}></div>
        <Link to="/findPw">
          <p>비밀번호 찾기</p>
        </Link>
      </div>
    </div>
  );
}

const link_wrap = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 0 0;

  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  color: #5f5f5f;

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

const link_lhs = css``;

const link_btn = css`
  border-bottom: 1px solid var(--primary);
  color: var(--primary);
  font-weight: 700;
`;

const link_rhs = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  p {
    color: #5f5f5f;
  }
`;

const div_line = css`
  width: 1px;
  height: 10px;
  background-color: #d9d9d9;
`;
