/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InfoTable from "./InfoTable";
import { ReactComponent as Pdf } from "@svgs/businessReview/pdf.svg";

export default function InfoSection() {
  return (
    <section css={section1_ctn}>
      <div css={ctn}>
        {data.map((data, idx) => (
          <InfoTable data={data} key={idx + data.th} />
        ))}
      </div>
      <button type="button" css={pdf_button}>
        <Pdf />
        <p css={button_text}>PDF 다운로드</p>
      </button>
    </section>
  );
}

const data = [
  {
    th: "(주) 0000귀중",
    tr: [
      { small: "받으실 분", big: "" },
      { small: "견적일자", big: "" },
      { small: "납품조건", big: "" },
      { small: "지불조건", big: "" },
      { small: "유효기간", big: "" },
      { small: "부가세", big: "" },
    ],
  },
  {
    th: "공급자",
    tr: [
      { small: "등록번호", big: "555-87-1111" },
      { small: "상호", big: "(주)아멘토벤처스" },
      { small: "대표자명", big: "" },
      { small: "업태", big: "" },
      { small: "종목", big: "" },
      { small: "전화", big: "" },
    ],
  },
];

const section1_ctn = css`
  margin-bottom: 20px;
  @media (max-width: 1024px) {
    margin-bottom: 48px;
  }
`;

const ctn = css`
  display: flex;
  gap: 34px;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 375px) {
    gap: 10px;
  }
`;

const pdf_button = css`
  display: flex;
  box-sizing: border-box;
  padding: 15px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 86px;
  border: 1.6px solid #ddd;
  background: var(--white, #fff);
  margin-left: auto;
`;

const button_text = css`
  color: #444;
  text-align: center;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 700;
  @media (max-width: 1280px) {
    font-size: 16px;
  }
`;
