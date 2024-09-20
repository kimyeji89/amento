/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PostTitle from "@components/post/PostTitle";
import PostTextBox from "@components/post/PostTextBox";
import post from "@data/consultDetailData.json";
import CommentInput from "@components/post/CommentInput";
import Button from "@components/ui/Button";

export default function ConsultDetailPage() {
  return (
    <div css={page_wrap}>
      <PostTitle
        title={post[0].title}
        writer={post[0].writer}
        date={post[0].date}
        views={post[0].views}
      />
      <PostTextBox text={post[0].text} />
      <CommentInput />

      <div css={btn_wrap}>
        <Button label="답글 달기" />
        <Button label="리스트로 이동" link="/consultHistory" isWhite />
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
