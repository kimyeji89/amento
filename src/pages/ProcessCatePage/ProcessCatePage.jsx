/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useHeaderHeight } from "@hooks/useHeaderHeight";
import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryCard";

export default function ProcessCatePage() {
  const { headerHeight } = useHeaderHeight();
  const [category, setCategory] = useState("");
  const [nextLink, setNextLink] = useState("");
  const navigate = useNavigate();

  const categoryText = {
    cate1: {
      category: "예비 가맹본부 준비",
      desc: "사업(직영점 등) 1년 미만 or 미운영",
      link: "/processDetail/1",
    },
    cate2: {
      category: "가맹본부 설립 희망",
      desc: "직영점 1년 이상",
      link: "/processDetail/2",
    },
    cate3: {
      category: "가맹본부 사업 전환",
      desc: "가맹본부 또는 가맹점 1년 이상 운영",
      link: "/processDetail/3",
    },
    cate4: {
      category: "가맹본부 운영 컨설팅",
      desc: "가맹본부 운영중",
      link: "/processDetail/4",
    },
  };

  function handleChangeCategory(e) {
    const selectedCategory = e.currentTarget.dataset.category; // 선택한 카테고리 가져오기
    const selectedLink = e.currentTarget.dataset.link; // 링크 가져오기

    setCategory(selectedCategory); // 카테고리 상태 업데이트
    setNextLink(selectedLink); // 해당 카테고리 링크 저장

    // 모든 카드에서 선택된 상태 제거
    document.querySelectorAll(".category_card").forEach((card) => {
      card.classList.remove("selected");
    });

    // 선택된 카드에만 'selected' 클래스 추가
    e.currentTarget.classList.add("selected");
  }

  function handleNextButtonClick() {
    if (nextLink) {
      navigate(nextLink);
    }
  }

  const ctn = css`
    display: flex;
    flex-direction: column;
    gap: 34px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin: ${headerHeight}px auto 0;
    padding: 160px 0 212px 0;
    width: 100%;

    @media (max-width: 1024px) {
      padding: 120px 80px;
    }
    @media (max-width: 768px) {
      padding: 80px 60px;
    }
    @media (max-width: 500px) {
      padding: 80px 50px;
    }
    @media (max-width: 375px) {
      gap: 20px;
      padding: 44px 48px;
    }
    @media (max-width: 320px) {
      padding: 40px 24px;
    }
  `;

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
          data-category="cate1"
          link={categoryText.cate1.link}
        />
        <CategoryCard
          category={category}
          categoryText={categoryText.cate2.category}
          descText={categoryText.cate2.desc}
          img="/assets/images/processCate/cate2.png"
          onClick={handleChangeCategory}
          data-category="cate2"
          link={categoryText.cate2.link}
        />
        <CategoryCard
          category={category}
          categoryText={categoryText.cate3.category}
          descText={categoryText.cate3.desc}
          img="/assets/images/processCate/cate3.png"
          onClick={handleChangeCategory}
          data-category="cate3"
          link={categoryText.cate3.link}
        />
        <CategoryCard
          category={category}
          categoryText={categoryText.cate4.category}
          descText={categoryText.cate4.desc}
          img="/assets/images/processCate/cate4.png"
          onClick={handleChangeCategory}
          data-category="cate4"
          link={categoryText.cate4.link}
        />
        {/* {category === "" ? (
          <button type="button" css={next_button_disabled}>
            next
          </button>
        ) : (
          <Link to={categoryText[category].link || "/"} css={next_button}>
            <button type="button">next</button>
          </Link>
        )} */}
        <button
          type="button"
          css={category === "" ? next_button_disabled : next_button}
          onClick={handleNextButtonClick} // 버튼 클릭 시 nextLink로 이동
          disabled={category === ""}
        >
          next
        </button>
      </div>
    </main>
  );
}

const page_title = css`
  color: var(--black, #111);
  text-align: center;
  font-size: 55px;
  font-weight: 700;
  @media (max-width: 1024px) {
    font-size: 48px;
  }
  @media (max-width: 767px) {
    font-size: 40px;
  }
  @media (max-width: 499px) {
    font-size: 34px;
  }
  @media (max-width: 375px) {
    color: var(--black, #111);
    font-size: 24px;
    line-height: 120%;
  }
`;

const category_card_ctn = css`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  align-items: center;
  max-width: 664px;
  width: 100%;
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

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  margin-top: 20px;
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

  @media (max-width: 823px) {
    max-width: 320px;
  }
`;
