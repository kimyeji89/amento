/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CategoryCard from "./CategoryCard";

export default function ProcessCatePage() {
  const [category, setCategory] = useState("");

  const categoryText = {
    cate1: {
      category: "예비 가맹본부 준비",
      desc: "사업(직영점 등) 1년 미만 or 미운영",
    },
    cate2: {
      category: "가맹본부 설립 희망",
      desc: "직영점 1년 이상",
    },
    cate3: {
      category: "가맹본부 사업 전환",
      desc: "가맹본부 또는 가맹점 1년 이상 운영",
    },
    cate4: {
      category: "가맹본부 운영 컨설팅",
      desc: "가맹본부 운영중",
    },
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
      <h2 css={page_title}>컨설팅 프로세스</h2>
      <div css={category_card_ctn}>
        <CategoryCard
          category={category}
          categoryText={categoryText.cate1.category}
          descText={categoryText.cate1.desc}
          img="/assets/images/processCate/cate1.png"
          onClick={handleChangeCategory}
        />
        <CategoryCard
          category={category}
          categoryText={categoryText.cate2.category}
          descText={categoryText.cate2.desc}
          img="/assets/images/processCate/cate2.png"
          onClick={handleChangeCategory}
        />
        <CategoryCard
          category={category}
          categoryText={categoryText.cate3.category}
          descText={categoryText.cate3.desc}
          img="/assets/images/processCate/cate3.png"
          onClick={handleChangeCategory}
        />
        <CategoryCard
          category={category}
          categoryText={categoryText.cate4.category}
          descText={categoryText.cate4.desc}
          img="/assets/images/processCate/cate4.png"
          onClick={handleChangeCategory}
        />
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
  }
`;

const page_title = css`
  color: var(--black, #111);
  text-align: center;
  font-size: 55px;
  font-weight: 700;
`;

const category_card_ctn = css`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  max-width: 664px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    padding: 10px 20px;
    width: 100%;
    height: 50px;
    border-radius: 80px;
    background: var(--primary);
    color: #fff;
    font-family: Poppins;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
  }
`;
