/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as CheckGray } from "@svgs/processCatePage/checkGray.svg";
import { ReactComponent as CheckPrimary } from "@svgs/processCatePage/checkPrimary.svg";

export default function CategoryCard({
  category,
  categoryText,
  descText,
  img,
  onClick,
}) {
  return (
    <div
      className="category_card"
      css={category_card}
      data-category={categoryText}
      onClick={onClick}
    >
      <img src={img} alt="categoryText.cate1" />
      <div className="info" css={info}>
        {category !== categoryText ? (
          <CheckGray css={svg} />
        ) : (
          <CheckPrimary css={svg} />
        )}
        <p css={title}>{categoryText}</p>
        {category === categoryText && <p className="desc">{descText}</p>}
      </div>
    </div>
  );
}

const info = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  z-index: 1;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const svg = css`
  margin-bottom: 2px;
`;

const title = css`
  color: var(--black, #111);
  text-align: center;
  white-space: nowrap;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
`;

const category_card = css`
  position: relative;
  width: 320px;
  height: 200px;
  border-radius: 20px;
  cursor: pointer;

  &.selected {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    filter: drop-shadow(0px 6px 33px #e0d4e9);
    img {
      filter: blur(15px);
    }
    .desc {
      color: var(--primary, #9627e7);
      font-family: Pretendard;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-align: center;
    }
    &::before {
      content: "";
      display: block;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;
      z-index: 1;
      border-radius: 20px;
      box-shadow: 0 0 0 1px var(--primary, #9627e7) inset;
    }
  }
`;
