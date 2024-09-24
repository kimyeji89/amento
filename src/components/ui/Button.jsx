/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

export default function Button({ label, link, onClick, isWhite }) {
  return (
    <Link to={link} css={link_style}>
      <div css={button_wrap(isWhite)} onClick={onClick}>
        <p>{label}</p>
      </div>
    </Link>
  );
}

const link_style = css`
  text-decoration: none;
  border-radius: 64px;
`;

const button_wrap = (isWhite) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-height: 60px;
  padding: 20px;
  background: ${isWhite ? "var(--white)" : "var(--primary)"};
  border-radius: 64px;
  border: ${isWhite ? "1px solid #BEBEBE" : ""};
  box-sizing: border-box;
  cursor: pointer;

  p {
    color: ${isWhite ? "#5C5C5C" : "var(--white)"};
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
  }

  @media (max-width: 375px) {
    max-height: 50px;
  }

  @media (max-width: 335px) {
    padding: 15px;
    p {
      font-size: 14px;
    }
  }
`;
