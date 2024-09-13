/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PostTitle from "@components/post/PostTitle";
import WriteInputText from "@components/post/WriteInputText";
import Button from "@components/ui/Button";

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
      <WriteInputText />

      <div css={btn_wrap}>
        <Button label="작성하기" />
        <Button label="취소" link="/consultHistory" isWhite />
      </div>
    </div>
  );
}

const page_wrap = css`
  padding: 250px 210px 353px;
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
`;
