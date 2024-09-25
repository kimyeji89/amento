/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState, useRef } from "react";
import { ReactComponent as ArrowLeft } from "@svgs/businessReview/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "@svgs/businessReview/arrowRight.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

function ExampleCard({ image, name, company, tags }) {
  const card = css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    width: 360px;
    max-width: 360px;
    height: 356px;
    box-sizing: border-box;
    padding: 0px 24px 24px 24px;
    gap: 14px;
    border-radius: 30px;
    background: var(--white, #fff);
    box-shadow: 0px 6px 33px 0px #ebebeb;
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
    @media (max-width: 1650px) {
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
    @media (max-width: 1650px) {
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
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    padding: 6px 36px;
    flex-shrink: 0;
    border-radius: 26px;
    height: 44px;
    background: #4c00ff;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    white-space: nowrap;

    @media (max-width: 1700px) {
      width: 100%;
      padding: 10px 0;
      height: auto;
      font-size: 18px;
    }

    @media (max-width: 700px) {
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
    white-space: nowrap;
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

export default function BusinessExample({ slideDataArr }) {
  const [width, setWidth] = useState(0);
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleSlideChange(swiper) {
    setCurrentIndex(swiper.activeIndex);
  }

  function handleGoPrevSlide() {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  }

  function handleGoNextSlide() {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  }

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
        <button
          type="button"
          className={
            currentIndex > 0
              ? "prev swiper-button-prev"
              : "prev swiper-button-prev disabled"
          }
          css={control_button}
          onClick={handleGoPrevSlide}
        >
          <ArrowLeft />
          <p>prev</p>
        </button>
        <Swiper
          css={swiper}
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={36}
          slidesPerView={1}
          // centeredSlides={true}
          loop={true}
          onSlideChange={handleSlideChange}
          breakpoints={{
            910: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1550: {
              slidesPerView: 3,
              spaceBetween: 44,
            },
          }}
        >
          {slideDataArr.map((card, idx) => (
            <SwiperSlide key={card.name + idx}>
              <ExampleCard
                image={card.image}
                name={card.name}
                company={card.company}
                tags={card.tags}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          type="button"
          className={
            currentIndex < slideDataArr.length - 1
              ? "prev swiper-button-next"
              : "prev swiper-button-next disabled"
          }
          css={control_button}
          onClick={handleGoNextSlide}
        >
          <p>next</p>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

const swiper = css`
  min-width: 232px;
  @media (max-width: 375px) {
    min-width: 210px;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

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
    position: relative;
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

  &.swiper-button-prev {
    width: auto;
    height: auto;
    margin-top: 0;
    z-index: 1;
    position: static;
    svg {
      width: auto;
      height: auto;
      * {
        stroke: var(--primary, #9627e7);
      }
    }
    &:after {
      display: none;
    }
    &.disabled {
      color: #343434;
      text-decoration: none;
      cursor: default;
      svg {
        * {
          stroke: #343434;
        }
      }
    }
  }
  &.swiper-button-next {
    width: auto;
    height: auto;
    margin-top: 0;
    z-index: 1;
    position: static;
    svg {
      width: auto;
      height: auto;
      * {
        stroke: var(--primary, #9627e7);
      }
    }
    &:after {
      display: none;
    }
    &.disabled {
      color: #343434;
      text-decoration: none;
      cursor: default;
      svg {
        * {
          stroke: #343434;
        }
      }
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
    &.swiper-button-prev svg {
      order: 2;
      width: 31.5px;
      height: 16px;
    }
    &.swiper-button-next svg {
      order: 2;
      width: 31.5px;
      height: 16px;
    }
  }
  @media (max-width: 375px) {
    gap: 4px;
    font-size: 14px;
    &.swiper-button-prev svg {
      width: 20px;
      height: auto;
    }
    &.swiper-button-next svg {
      width: 20px;
      height: auto;
    }
  }
  @media (max-width: 350px) {
    p {
      display: none;
    }
    &.swiper-button-prev {
      position: absolute;
      top: 50%;
      left: 0;
      z-index: 5;
      padding: 8px 10px;
      background-color: var(--white);
      box-shadow: 0px 6px 33px 0px #ebebeb;
      border-radius: 10px;
    }
    &.swiper-button-next {
      position: absolute;
      top: 50%;
      right: 0;
      z-index: 5;
      padding: 8px 10px;
      background-color: var(--white);
      box-shadow: 0px 6px 33px 0px #ebebeb;
      border-radius: 10px;
    }
  }
`;
