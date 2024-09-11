/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as CheckGray } from "@svgs/ProcessCatePage/checkGray.svg";
import { ReactComponent as CheckPrimary } from "@svgs/ProcessCatePage/checkPrimary.svg";

export default function ProcessCatePage() {
  const [category, setCategory] = useState("");

  const categoryText = {
    cate1: "예비 가맹본부 준비",
    cate2: "가맹본부 설립 희망",
    cate3: "가맹본부 사업 전환",
    cate4: "가맹본부 운영 컨설팅",
  };

  function handleChangeCategory(e) {
    setCategory(e.currentTarget.dataset.category);
    document.querySelectorAll(".category_card").forEach((card) => {
      card.classList.remove("selected");
    });
    if (e.currentTarget.classList.contains(category)) {
      e.currentTarget.classList.remove("selected");
    } else {
      e.currentTarget.classList.add("selected");
    }
  }

  return (
    <main css={ctn}>
      <h2 className="page_title">컨설팅 프로세스</h2>
      <div css={category_card_ctn}>
        <div
          className="category_card"
          css={category_card}
          data-category={categoryText.cate1}
          onClick={handleChangeCategory}
        >
          <img
            src="/assets/images/processCate/cate1.png"
            alt="categoryText.cate1"
          />
          <div className="info">
            {category !== categoryText.cate1 ? <CheckGray /> : <CheckPrimary />}
            <p className="title">{categoryText.cate1}</p>
            {category === categoryText.cate1 && (
              <p className="desc">직영점 1년 미만, 미운영</p>
            )}
          </div>
        </div>
        <div
          className="category_card"
          css={category_card}
          data-category={categoryText.cate2}
          onClick={handleChangeCategory}
        >
          <img src="/assets/images/processCate/cate2.png" alt="cate2" />
          <div className="info">
            {category !== categoryText.cate2 ? <CheckGray /> : <CheckPrimary />}
            <p className="title">{categoryText.cate2}</p>
            {category === categoryText.cate2 && (
              <p className="desc">직영점 1년 미만, 미운영</p>
            )}
          </div>
        </div>
        <div
          className="category_card"
          css={category_card}
          data-category={categoryText.cate3}
          onClick={handleChangeCategory}
        >
          <img src="/assets/images/processCate/cate3.png" alt="cate3" />
          <div className="info">
            {category !== categoryText.cate3 ? <CheckGray /> : <CheckPrimary />}
            <p className="title">{categoryText.cate3}</p>
            {category === categoryText.cate3 && (
              <p className="desc">직영점 1년 미만, 미운영</p>
            )}
          </div>
        </div>
        <div
          className="category_card"
          css={category_card}
          data-category={categoryText.cate4}
          onClick={handleChangeCategory}
        >
          <img src="/assets/images/processCate/cate4.png" alt="cate4" />
          <div className="info">
            {category !== categoryText.cate4 ? <CheckGray /> : <CheckPrimary />}
            <p className="title">{categoryText.cate4}</p>
            {category === categoryText.cate4 && (
              <p className="desc">직영점 1년 미만, 미운영</p>
            )}
          </div>
        </div>
      </div>
      {category === "" ? (
        <button type="button" css={next_button_disabled}>
          next
        </button>
      ) : (
        <Link to="/processDetail" css={next_button}>
          <button type="button">next</button>
        </Link>
      )}
    </main>
  );
}

const ctn = css`
  display: flex;
  flex-direction: column;
  gap: 34px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 90px auto 0;
  padding: 160px 0 212px 0;
  .page_title {
    color: var(--black, #111);
    text-align: center;
    font-size: 55px;
    font-weight: 700;
  }
`;

const category_card_ctn = css`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  max-width: 664px;
`;

const category_card = css`
  position: relative;
  width: 320px;
  height: 200px;
  border-radius: 20px;
  cursor: pointer;
  .info {
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
    svg {
      margin-bottom: 2px;
    }
    .title {
      color: var(--black, #111);
      text-align: center;
      white-space: nowrap;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px;
    }
  }
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

const next_button_disabled = css`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 664px;
  border-radius: 80px;
  background: #cecece;
  height: 50px;
  box-sizing: border-box;
  font-family: Poppins;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  color: #fff;
`;

const next_button = css`
  display: block;
  width: 100%;
  max-width: 664px;
  text-decoration: none;
  button {
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    border-radius: 80px;
    background: var(--primary);
    display: flex;
    height: 50px;
    box-sizing: border-box;
    font-family: Poppins;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: #fff;
  }
`;
