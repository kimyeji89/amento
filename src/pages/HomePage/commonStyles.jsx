/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

export const float = keyframes`
  0% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(-50%,-60%);
  }
  100% {
    transform: translateY(-50%, -50%);
  }`;

export const br_desktop = css`
  @media (max-width: 1919px) {
    display: block;
  }
  @media (max-width: 375px) {
    display: none;
  }
`;

export const br_mobile = css`
  @media (min-width: 376px) {
    display: none;
  }
  @media (max-width: 375px) {
    display: block;
  }
`;

export const text_bottom = css`
  display: flex;
  gap: 24px;
  flex-wrap: nowrap;
  flex-direction: row;

  color: #292929;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
  word-break: keep-all;

  .separate {
    font-size: 44px;
    color: transparent;
  }

  .high_light {
    color: #ec0d0d;
    font-weight: 700;
    line-height: 140%;
  }

  @media (max-width: 1919px) {
    font-size: 19px;
    .separate {
      font-size: 42px;
    }
  }
  @media (max-width: 1440px) {
    font-size: 18px;
    .separate {
      font-size: 36px;
    }
  }
  @media (max-width: 1280px) {
    font-size: 17px;
    .separate {
      font-size: 32px;
    }
  }
  @media (max-width: 1024px) {
    font-size: 16px;
    .separate {
      font-size: 28px;
    }
  }
  @media (max-width: 950px) {
    justify-content: center;
    text-align: center;
    .separate {
      display: none;
    }
  }
  @media (max-width: 375px) {
    text-align: left;
  }
`;

export const text_block = css`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 80px;
  background: #f6eaff;
  color: var(--primary, #9627e7);
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  @media (max-width: 1919px) {
    font-size: 19px;
  }
  @media (max-width: 1440px) {
    font-size: 18px;
  }
  @media (max-width: 1280px) {
    font-size: 17px;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
  }
`;
export const text_top = css`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 34px;
  word-break: keep-all;
  @media (max-width: 1919px) {
    font-size: 23px;
  }
  @media (max-width: 1440px) {
    font-size: 22px;
  }
  @media (max-width: 1280px) {
    flex-direction: column;
    justify-content: start;
    align-items: start;
    font-size: 21px;
  }
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 950px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    margin-bottom: 24px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
  @media (max-width: 375px) {
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    align-items: start;
    font-size: 14px;
  }
`;

export const text_mid = css`
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 34px;
  white-space: wrap;
  word-break: keep-all;
  .separate {
    text-transform: uppercase;
  }

  @media (max-width: 1919px) {
    font-size: 42px;
  }
  @media (max-width: 1440px) {
    font-size: 36px;
    margin-bottom: 24px;
  }
  @media (max-width: 1280px) {
    font-size: 32px;
  }
  @media (max-width: 1024px) {
    font-size: 28px;
  }
  @media (max-width: 950px) {
    font-size: 32px;
    margin-bottom: 16px;
    text-align: center;
  }
  @media (max-width: 767px) {
    font-size: 28px;
  }
  @media (max-width: 499px) {
    font-size: 24px;
  }
  @media (max-width: 375px) {
    text-align: left;
  }
`;

export const question = css`
  display: flex;
  gap: 14px;
  color: var(--black, #111);
  margin-bottom: 10px;
  word-break: keep-all;
  @media (max-width: 950px) {
    display: inline-flex;
    justify-content: center;
    gap: 4px;
    flex-direction: column;
  }
  @media (min-width: 376px) {
    .separate_mobile {
      display: none;
    }
    .separate_desktop {
      display: inline;
    }
  }
  @media (max-width: 375px) {
    flex-direction: row;
    justify-content: start;
    align-items: start;
    gap: 14px;
    .separate_mobile {
      display: block;
    }
    .separate_desktop {
      display: none;
    }
  }
`;

export const answer = css`
  display: flex;
  gap: 14px;
  color: var(--primary, #9627e7);
  word-break: keep-all;
  @media (max-width: 950px) {
    justify-content: center;
    gap: 8px;
    flex-direction: column;
  }
  @media (min-width: 376px) {
    .separate_mobile {
      display: none;
    }
    .separate_desktop {
      display: inline;
    }
  }
  @media (max-width: 375px) {
    flex-direction: row;
    justify-content: start;
    align-items: start;
    gap: 14px;
    .separate_mobile {
      display: block;
    }
    .separate_desktop {
      display: none;
    }
  }
`;

export const white = css`
  color: var(--white);
`;

export const center = css`
  justify-content: center;
  align-items: center;
`;
