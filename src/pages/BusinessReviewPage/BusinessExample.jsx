/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
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
    padding: 0px 24px 24px 24px;
    gap: 14px;
    border-radius: 30px;
    background: var(--white, #fff);
    box-shadow: 0px 6px 33px 0px #ebebeb;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translateY(-8px);
    }
    @media (max-width: 1919px) {
      width: calc(360px * 0.9);
      height: calc(356px * 0.9);
      padding: 0px calc(24px * 0.9) calc(24px * 0.9) calc(24px * 0.9);
    }
    @media (max-width: 1800px) {
      width: calc(360px * 0.8);
      height: calc(356px * 0.8);
      padding: 0px calc(24px * 0.8) calc(24px * 0.8) calc(24px * 0.8);
    }
    @media (max-width: 1600px) {
      gap: 10px;
      width: calc(360px * 0.7);
      height: calc(356px * 0.7);
      padding: 0px calc(24px * 0.7) calc(24px * 0.7) calc(24px * 0.7);
    }
    @media (max-width: 700px) {
      width: 232px;
      height: 262px;
      padding: 0 20px 20px 20px;
    }
    @media (max-width: 350px) {
      width: 210px;
      height: 240px;
      padding: 0 16px 16px 16px;
      gap: 8px;
    }
  `;

  const img = css`
    position: absolute;
    z-index: 0;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 280px;
    object-fit: cover;
    @media (max-width: 1919px) {
      width: calc(280px * 0.9);
    }
    @media (max-width: 1800px) {
      width: calc(280px * 0.8);
    }
    @media (max-width: 1600px) {
      width: calc(280px * 0.7);
    }
    @media (max-width: 700px) {
      top: 20px;
      width: 186px;
    }
    @media (max-width: 350px) {
      top: 10px;
      width: 160px;
    }
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
    vertical-align: middle;
    white-space: nowrap;

    @media (max-width: 1600px) {
      width: 100%;
      font-size: 18px;
      line-height: 28px;
    }

    @media (max-width: 700px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 160px;
      height: 32px;
      padding: 5px 10px;
      font-size: 15px;
    }
  `;

  const info_ctn = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    @media (max-width: 350px) {
      flex-direction: column;
      gap: 4px;
    }
  `;

  const company_style = css`
    color: var(--black, #111);
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media (max-width: 700px) {
      font-size: 13px;
    }
  `;

  const tags_ctn = css`
    display: flex;
  `;

  const tag_style = css`
    color: var(--primary, #9627e7);
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    @media (max-width: 700px) {
      font-size: 12px;
    }
  `;

  return (
    <div css={card}>
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
  const [width, setWidth] = useState(0);
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

  function handleResizeWidth() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    handleResizeWidth();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResizeWidth);
    return () => {
      window.removeEventListener("resize", handleResizeWidth);
    };
  }, [width]);

  return (
    <div css={ctn}>
      <h3 css={section_title}>우수사례</h3>
      <div css={card_control_ctn}>
        <button type="button" className="disabled prev" css={control_button}>
          <ArrowLeft />
          <p>prev</p>
        </button>
        <div css={card_ctn}>
          {width > 1520 &&
            cardData
              .slice(0, 3)
              .map((card, idx) => (
                <ExampleCard
                  key={card.name + idx}
                  image={card.image}
                  name={card.name}
                  company={card.company}
                  tags={card.tags}
                />
              ))}
          {width <= 1520 &&
            width > 918 &&
            cardData
              .slice(0, 2)
              .map((card, idx) => (
                <ExampleCard
                  key={card.name + idx}
                  image={card.image}
                  name={card.name}
                  company={card.company}
                  tags={card.tags}
                />
              ))}
          {width <= 918 &&
            cardData
              .slice(0, 1)
              .map((card, idx) => (
                <ExampleCard
                  key={card.name + idx}
                  image={card.image}
                  name={card.name}
                  company={card.company}
                  tags={card.tags}
                />
              ))}
        </div>
        <button type="button" className="next" css={control_button}>
          <ArrowRight />
          <p>next</p>
        </button>
      </div>
    </div>
  );
}

const ctn = css`
  width: auto;
  height: 100%;
  box-sizing: border-box;
  padding: 120px 210px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("/assets/images/businessReview/cardCtnBg.png");

  @media (max-width: 1919px) {
    width: 100%;
    padding: 120px 210px;
  }
  @media (max-width: 1520px) {
    padding: 120px 210px;
  }
  @media (max-width: 1280px) {
    padding: 120px 100px;
  }
  @media (max-width: 1024px) {
    padding: 120px 65px;
  }
  @media (max-width: 768px) {
    padding: 120px 40px;
  }
  @media (max-width: 375px) {
    padding: 50px 20px 61px;
  }
`;

const section_title = css`
  color: var(--black, #111);
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 44px;

  @media (max-width: 375px) {
    font-size: 24px;
    margin-bottom: 34px;
  }
`;

const card_control_ctn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  @media (max-width: 1919px) {
    gap: 28px;
  }
  @media (max-width: 1800px) {
    gap: 24px;
  }
  @media (max-width: 450px) {
    gap: 9.5px;
  }
  @media (max-width: 350px) {
    gap: 8px;
  }
  @media (max-width: 320px) {
    position: relative;
  }
`;

const card_ctn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 44px;
  @media (max-width: 1919px) {
    gap: 40px;
  }
  @media (max-width: 1800px) {
    gap: 36px;
  }
`;

const control_button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
  font-family: "Godo", sans-serif;
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  color: var(--primary, #9627e7);
  text-decoration-line: underline;
  transition: transform 0.3s ease;
  svg {
    stroke: var(--primary, #9627e7);
  }
  &:hover {
    transform: translateY(-8px);
  }
  &.disabled {
    color: #343434;
    text-decoration: none;
    cursor: default;
    svg {
      stroke: #343434;
    }
  }
  @media (max-width: 1800px) {
    gap: 12px;
    font-size: 18px;
    svg {
      width: 34px;
      height: auto;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    &.prev {
      align-items: start;
    }
    &.next {
      align-items: end;
    }
    p {
      order: 1;
    }
    svg {
      order: 2;
      width: 31.5px;
      height: 16px;
    }
  }
  @media (max-width: 350px) {
    gap: 4px;
    font-size: 14px;
    svg {
      width: 20px;
      height: auto;
    }
  }
  @media (max-width: 320px) {
    position: absolute;
    top: 50%;
    z-index: 1;
    padding: 8px 10px;
    background-color: var(--white);
    box-shadow: 0px 6px 33px 0px #ebebeb;
    border-radius: 10px;
    p {
      display: none;
    }
    &.prev {
      left: 0;
    }
    &.next {
      right: 0;
    }
  }
`;
