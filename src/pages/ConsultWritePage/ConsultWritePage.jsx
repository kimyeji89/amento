/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useHeaderHeight } from "@hooks/useHeaderHeight";
import PostTitle from "@components/post/PostTitle";
import WriteInputText from "@components/post/WriteInputText";
import TablePageTitle from "@components/table/TablePageTitle";
import Button from "@components/ui/Button";
import TitleInput from "./TitleInput";
import SelectBox from "./SelectBox";

export default function ConsultWritePage() {
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
      <TablePageTitle title="상담내역" hasBorder={false} />

      <div css={content_wrap}>
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
    </div>
  );
}

const content_wrap = css`
  padding: 40px 0 0 0;

  @media (max-width: 1024px) {
    padding: 0;
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
