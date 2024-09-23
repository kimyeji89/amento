/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import TablePageWrap from "@components/table/TablePageWrap";
import TablePageTitle from "@components/table/TablePageTitle";
import GrayTable from "./GrayTable";
import PurpleTable from "./PurpleTable";
import { ReactComponent as Pdf } from "@svgs/businessReview/pdf.svg";

export default function EstimateSheetPage() {
  const grayTableData = [
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
  return (
    <TablePageWrap>
      <div css={title_style}>
        <TablePageTitle title="견적서 (Quotation)" />
      </div>
      <section css={section1_ctn}>
        <div css={gray_table_ctn}>
          {grayTableData.map((data, idx) => (
            <GrayTable data={data} key={idx + data.th} />
          ))}
        </div>
        <button type="button" css={pdf_button}>
          <Pdf />
          <p css={button_text}>PDF 다운로드</p>
        </button>
      </section>
      <section css={section2_ctn}>
        <h3 css={section_title}>아래와 같이 견적합니다. (천원단위 절삭)</h3>
        <PurpleTable />
      </section>
      <Link to={"/"} css={link_style}>
        <button type="button" css={button}>
          결제하기
        </button>
      </Link>
    </TablePageWrap>
  );
}

const title_style = css`
  padding-bottom: 24px;
  margin-bottom: 34px;
  border-bottom: 1px solid #000;

  @media (max-width: 1024px) {
    padding-bottom: 0px;
    margin-bottom: 24px;
  }
`;

const section1_ctn = css`
  margin-bottom: 20px;
  @media (max-width: 1024px) {
    margin-bottom: 48px;
  }
`;

const gray_table_ctn = css`
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

const section2_ctn = css`
  margin-bottom: 44px;
  @media (max-width: 375px) {
    margin-bottom: 34px;
  }
`;

const section_title = css`
  margin-bottom: 24px;
  color: var(--black, #111);
  font-size: 24px;
  font-weight: 700;
  word-break: keep-all;
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const link_style = css`
  text-decoration: none;
  color: var(--white, #fff);
`;
const button = css`
  display: flex;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 20px 90.5px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 80px;
  background: var(--primary, #9627e7);
  color: var(--white, #fff);
  leading-trim: both;
  font-family: Pretendard;
  text-edge: cap;
  font-size: 17px;
  font-weight: 700;
  line-height: 160%;
  @media (max-width: 375px) {
    padding: 15px 90.5px;
    line-height: normal;
  }
`;
