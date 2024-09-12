/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
export default function FormLink({
  link1 = "/joinTos",
  label1 = "회원가입",
  link2,
  label2,
  hasBorder,
}) {
  return (
    <div css={link_wrap}>
      <div css={link_lhs}>
        <Link to={link1}>
          <div css={link_btn(hasBorder)}>{label1}</div>
        </Link>
        {label2 && (
          <>
            <div css={div_line}></div>
            <Link to={link2}>
              <p css={p_style}>{label2}</p>
            </Link>
          </>
        )}
      </div>
      <div css={link_rhs}>
        <Link to="/findId">
          <p css={p_style}>아이디 찾기</p>
        </Link>
        <div css={div_line}></div>
        <Link to="/changePw">
          <p css={p_style}>비밀번호 변경</p>
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

const link_lhs = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const link_btn = (hasBorder) => css`
  border-bottom: ${hasBorder ? "1px solid var(--primary)" : "none"};
  color: var(--primary);
  font-weight: 700;
`;

const link_rhs = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const div_line = css`
  width: 1px;
  height: 10px;
  background-color: #d9d9d9;
`;

const p_style = css`
  color: #5f5f5f;
`;
