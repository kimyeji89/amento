/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PostTitle from "@components/post/PostTitle";
import WriteInputText from "@components/post/WriteInputText";
import Button from "@components/ui/Button";
import TitleInput from "./TitleInput";
import SelectBox from "./SelectBox";

export default function ConsultWritePage() {
  return (
    <div css={page_wrap}>
      <PostTitle
        title="상담신청"
        writer={"primary"}
        date={"2024.08.08"}
        views={"3"}
        isPost={false}
      />
      <div css={form_container}>
        <SelectBox />
        <TitleInput />
        <WriteInputText />
      </div>

      <div css={btn_wrap}>
        <Button label="작성하기" />
        <Button label="취소" link="/consultHistory" isWhite />
      </div>
    </div>
  );
}

const page_wrap = css`
  padding: 250px 210px 353px;

  @media (max-width: 1280px) {
    padding: 250px 100px 353px;
  }

  @media (max-width: 1024px) {
    padding: 250px 65px 353px;
  }

  @media (max-width: 768px) {
    padding: 250px 20px 353px;
  }
`;

const form_container = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  align-self: stretch;

  padding: 24px 0 0 0;
`;

const btn_wrap = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 14px;
  width: 494px;
  margin: 0 auto;
  padding: 84px 0 0;

  a {
    flex-grow: 1;
    flex-basis: 0;
  }

  @media (max-width: 1024px) {
    width: 100%;
    gap: 10px;
    padding: 44px 0 0;
  }
`;
