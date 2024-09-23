/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as ArrowLeft } from "@svgs/businessReview/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "@svgs/businessReview/arrowRight.svg";

function ExampleCard({ image, name, company, tags }) {
  const card = css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    width: 360px;
    height: 356px;
    box-sizing: border-box;
    padding: 0px 58px 24px 58pxz;
    gap: 14px;
    border-radius: 30px;
    background: var(--white, #fff);
    box-shadow: 0px 6px 33px 0px #ebebeb;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: translateY(-8px);
    }
  `;

  const img_area = css`
    width: 100%;
  `;

  const img = css`
    position: absolute;
    z-index: 0;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 280px;
    object-fit: cover;
  `;

  const name_tag = css`
    position: relative;
    box-sizing: border-box;
    padding: 6px 36px;
    flex-shrink: 0;
    border-radius: 26px;
    background: #4c00ff;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 160% */
  `;

  const info_ctn = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
  `;

  const company_style = css`
    color: var(--black, #111);
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `;

  const tags_ctn = css`
    display: flex;
  `;

  const tag_style = css`
    color: var(--primary, #9627e7);
    text-align: center;
    font-size: 14px;
    font-weight: 700;
  `;

  return (
    <div css={card}>
      <div css={img_area}></div>
      <img src={image} alt="exampleCard" css={img} />
      <p css={name_tag}>{name}</p>
      <div css={info_ctn}>
        <p css={company_style}>{company}</p>
        <div css={tags_ctn}>
          {tags.map((tag, idx) => (
            <p key={tag + idx} css={tag_style}>
              #{tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BusinessExample() {
  const cardData = [
    {
      image: "/assets/images/businessReview/exampleCard.png",
      name: "OO코퍼레이션 대표자",
      company: "(주)00000",
      tags: ["음식", "가맹본부", "예비"],
    },
    {
      image: "/assets/images/businessReview/exampleCard.png",
      name: "OO코퍼레이션 대표자",
      company: "(주)00000",
      tags: ["음식", "가맹본부", "예비"],
    },
    {
      image: "/assets/images/businessReview/exampleCard.png",
      name: "OO코퍼레이션 대표자",
      company: "(주)00000",
      tags: ["음식", "가맹본부", "예비"],
    },
  ];
  return (
    <div css={ctn}>
      <h3 css={section_title}>우수사례</h3>
      <div css={card_control_ctn}>
        <button type="button" className="disabled" css={control_button}>
          <ArrowLeft />
          <p>prev</p>
        </button>
        <div css={card_ctn}>
          {cardData.map((card, idx) => (
            <ExampleCard
              key={card.name + idx}
              image={card.image}
              name={card.name}
              company={card.company}
              tags={card.tags}
            />
          ))}
        </div>
        <button type="button" css={control_button}>
          <ArrowRight />
          <p>next</p>
        </button>
      </div>
    </div>
  );
}

const ctn = css`
  width: 100%;
  max-height: 688px;
  box-sizing: border-box;
  padding: 120px 210px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("/assets/images/businessReview/cardCtnBg.png");
`;

const section_title = css`
  color: var(--black, #111);
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 44px;
`;

const card_control_ctn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 30px;
`;

const card_ctn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 44px;
`;

const control_button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
  font-family: "Godo B";
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--primary, #9627e7);
  text-decoration-line: underline;
  svg {
    stroke: var(--primary, #9627e7);
  }
  &.disabled {
    color: #343434;
    text-decoration: none;
    cursor: default;
    svg {
      stroke: #343434;
    }
  }
`;
