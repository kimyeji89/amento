/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function BoxWrap({ title, children, isBoxCol }) {
  return (
    <div css={wrap}>
      <h3>{title}</h3>
      <Box isBoxCol={isBoxCol}>{children}</Box>
    </div>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  h3 {
    color: var(--black, #111);
    text-overflow: ellipsis;
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
  }

  @media (max-width: 500px) {
    gap: 10px;
    h3 {
      font-size: 18px;
    }
  }
`;

function Box({ children, isBoxCol }) {
  return <div css={box(isBoxCol)}>{children}</div>;
}

const box = (isBoxCol) => css`
  display: flex;
  padding: 34px 38px;
  flex-direction: ${isBoxCol ? "column" : "row"};
  align-items: flex-start;
  gap: ${isBoxCol ? "24px" : "34px"};
  align-self: stretch;

  border-radius: 10px;
  border: 1px solid var(--stroke, #e8e8e8);
  background: #fff;

  @media (max-width: 500px) {
    padding: 20px;
    gap: ${isBoxCol ? "15px" : "10px"};
  }
`;
