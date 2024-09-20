/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import posterData from "@data/posterImageData.json";

export default function PosterCard() {
  return (
    <div css={card_wrap}>
      {posterData.map((poster, index) => (
        <div key={index} css={poster_card}>
          <img src={poster.image} alt={poster.title} />
        </div>
      ))}
    </div>
  );
}

const card_wrap = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
  gap: 26px;

  padding: 19px 0 0 0;

  @media (max-width: 1520px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

const poster_card = css`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
