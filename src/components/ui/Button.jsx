/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

export default function Button({ label, link, onClick }) {
  return (
    <Link to={link} css={link_style}>
      <div css={button_wrap} onClick={onClick}>
        <p>{label}</p>
      </div>
    </Link>
  );
}

const link_style = css`
  text-decoration: none;
`;

const button_wrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  padding: 20px;
  background: var(--primary);
  border-radius: 64px;

  p {
    color: var(--white);
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
  }
`;
