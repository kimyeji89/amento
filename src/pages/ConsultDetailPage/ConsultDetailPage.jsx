/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useHeaderHeight } from "@hooks/useHeaderHeight";
import PostTitle from "@components/post/PostTitle";
import PostTextBox from "@components/post/PostTextBox";
import post from "@data/consultDetailData.json";
import CommentInput from "@components/post/CommentInput";
import Button from "@components/ui/Button";

export default function ConsultDetailPage() {
  const { headerHeight } = useHeaderHeight();

  const page_wrap = css`
    padding: ${headerHeight + 160}px 210px;

    @media (max-width: 1520px) {
      padding: ${headerHeight + 120}px 140px;
    }

    @media (max-width: 1280px) {
      padding: ${headerHeight + 120}px 100px;
    }

    @media (max-width: 1024px) {
      padding: ${headerHeight + 80}px 65px;
    }

    @media (max-width: 768px) {
      padding: ${headerHeight + 34}px 20px;
    }

    @media (max-width: 375px) {
      padding: ${headerHeight + 34}px 20px;
    }
  `;

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
