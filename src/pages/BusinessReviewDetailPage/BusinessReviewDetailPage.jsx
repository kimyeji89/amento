/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PostTitle from "@components/post/PostTitle";
import PostTextBox from "@components/post/PostTextBox";
import post from "@data/businessReviewData.json";
import CommentInput from "@components/post/CommentInput";
import Button from "@components/ui/Button";
import PageTitle from "@components/ui/PageTitle";

export default function BusinessReviewDetailPage() {
  return (
    <div css={page_wrap}>
      <PageTitle title="사업후기" hasBorder />
      <div css={content_wrap}>
        <PostTitle
          title={post[0].title}
          writer={post[0].writer}
          date={post[0].date}
          views={post[0].views}
        />
        <PostTextBox text={post[0].text} />
        <CommentInput isBlIcon />
        <div css={btn_wrap}>
          <Button label="답글 달기" />
          <Button label="리스트로 이동" link="/businessReview2" isWhite />
        </div>
      </div>
    </div>
  );
}

const page_wrap = css`
  padding: 90px 0 0 0;
`;

const content_wrap = css`
  padding: 124px 210px 158px;
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
