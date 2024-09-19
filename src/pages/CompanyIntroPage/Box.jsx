/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Box({ firstText, secondText }) {
  return (
    <div css={box}>
      <p>{firstText}</p>
      <p>{secondText}</p>
    </div>
  );
}

const box = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  max-width: 337px;
  width: 337px;
  height: 131px;
  border-radius: 20px;
  box-shadow: 0px 6px 33px 0px #e0d4e9;

  background: var(--white);

  & > :first-child {
    color: #732ea5;
    text-align: center;
    font-size: 20px;
    font-weight: 600;

    @media (max-width: 1280px) {
      font-size: 18px;
    }

    @media (max-width: 1024px) {
      font-size: 16px;
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  & > :nth-child(2) {
    color: var(--black-1);
    text-align: center;
    font-size: 24px;
    font-weight: 700;

    @media (max-width: 1280px) {
      font-size: 22px;
    }

    @media (max-width: 1024px) {
      font-size: 20px;
    }

    @media (max-width: 768px) {
      font-size: 17px;
    }
  }

  @media (max-width: 1024px) {
    width: 310px;
    height: 120px;
    gap: 18px;
  }

  @media (max-width: 768px) {
    width: 290px;
    height: 100px;
  }

  @media (max-width: 375px) {
    width: 261px;
    height: 84px;
    gap: 14px;
  }
`;
