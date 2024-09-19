/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function PostTitle({
  title,
  writer,
  date,
  views,
  isPost = true,
}) {
  return (
    <div css={title_wrap}>
      <h1>
        {isPost && <>제목 : </>}
        {title}
      </h1>
      <div css={des_wrap}>
        <div css={detail_wrap}>
          <span className="detail">작성자</span>
          <span>{writer}</span>
        </div>
        <div css={detail_wrap}>
          <span className="detail">작성일</span>
          <span>{date}</span>
        </div>
        <div css={detail_wrap}>
          <span className="detail">조회수</span>
          <span>{views}</span>
        </div>
      </div>
    </div>
  );
}

const title_wrap = css`
  position: relative;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #000;
  height: auto;

  h1 {
    color: #3c3c3c;
    font-size: 30px;
    font-weight: 700;
    line-height: normal;
  }
`;

const des_wrap = css`
  display: flex;
  justify-content: end;
  gap: 14px;
`;

const detail_wrap = css`
  display: flex;
  gap: 10px;

  padding: 4px 0 20px;

  font-size: 15px;
  font-weight: 500;
  line-height: normal;
  color: #3c3c3c;

  .detail {
    color: #959595;
  }
`;
