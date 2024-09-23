/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ChevLeft } from "@svgs/common/chevLeft.svg";
import { ReactComponent as ChevRight } from "@svgs/common/chevRight.svg";

function Table() {
  const tableData = [
    {
      no: 1,
      category: "후기",
      title: "사업후기입니다.",
      user: "Primary",
      date: "2024.08.08",
      view: 50,
    },
    {
      no: 2,
      category: "후기",
      title: "사업후기입니다.",
      user: "Primary",
      date: "2024.08.08",
      view: 50,
    },
    {
      no: 3,
      category: "후기",
      title: "사업후기입니다.",
      user: "Primary",
      date: "2024.08.08",
      view: 50,
    },
    {
      no: 4,
      category: "후기",
      title: "사업후기입니다.",
      user: "Primary",
      date: "2024.08.08",
      view: 50,
    },
    {
      no: 5,
      category: "후기",
      title: "사업후기입니다.",
      user: "Primary",
      date: "2024.08.08",
      view: 50,
    },
    {
      no: 6,
      category: "후기",
      title: "사업후기입니다.",
      user: "Primary",
      date: "2024.08.08",
      view: 50,
    },
    {
      no: 7,
      category: "후기",
      title: "사업후기입니다.",
      user: "Primary",
      date: "2024.08.08",
      view: 50,
    },
    {
      no: 8,
      category: "후기",
      title: "사업후기입니다.",
      user: "Primary",
      date: "2024.08.08",
      view: 50,
    },
    {
      no: 9,
      category: "후기",
      title: "사업후기입니다.",
      user: "Primary",
      date: "2024.08.08",
      view: 50,
    },
  ];
  const reversedData = [...tableData].reverse();

  const table = css`
    width: 100%;
    border-collapse: collapse;
    text-align: center;
  `;

  const small_cell = css`
    width: 12%;

    @media (max-width: 375px) {
      min-width: 80px;
    }
  `;

  const category = css`
    width: 18%;

    @media (max-width: 375px) {
      min-width: 140px;
    }
  `;

  const title = css`
    width: 34%;
    @media (max-width: 375px) {
      min-width: 226px;
    }
  `;

  const th_td = css`
    height: 55px;
    box-sizing: border-box;
    padding: 10px 14px;
    border-bottom: 1px solid var(--stroke, #e8e8e8);
    font-size: 17px;
    line-height: calc(55px - 20px);
    white-space: nowrap;
    overflow: ellipsis;
    word-break: keep-all;
    @media (max-width: 1280px) {
      height: 50px;
      padding: 8px 12px;
      font-size: 16px;
      line-height: calc(50px - 16px);
    }
    @media (max-width: 1024px) {
      height: 48px;
      padding: 6px 12px;
      font-size: 15px;
      line-height: calc(48px - 12px);
    }
    @media (max-width: 767px) {
      height: 42px;
      line-height: calc(42px - 12px);
    }
    @media (max-width: 375px) {
      height: 40px;
      padding: 10px 14px;
      line-height: calc(40px - 20px);
    }
  `;

  const th = css`
    background: #f7f0ff;
    color: #131313;
    font-weight: 700;
  `;

  const td = css`
    background: var(--white, #ffffff);
    color: #444;
    font-weight: 500;
  `;

  return (
    <table css={table}>
      <thead>
        <tr>
          <th css={[th_td, th, small_cell]}>No</th>
          <th css={[th_td, th, category]}>구분</th>
          <th css={[th_td, th, title]}>제목</th>
          <th css={[th_td, th, small_cell]}>작성자</th>
          <th css={[th_td, th, small_cell]}>작성일</th>
          <th css={[th_td, th, small_cell]}>조회수</th>
        </tr>
      </thead>
      <tbody>
        {reversedData.map((data, idx) => (
          <tr key={data.title + idx}>
            <td css={[th_td, td]}>{data.no}</td>
            <td css={[th_td, td]}>{data.category}</td>
            <td css={[th_td, td]}>{data.title}</td>
            <td css={[th_td, td]}>{data.user}</td>
            <td css={[th_td, td]}>{data.date}</td>
            <td css={[th_td, td]}>{data.view}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function TablePagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageToShow = [1, 2, 3, 4, 5];

  const ctn = css`
    display: flex;
    align-items: center;
    gap: 24px;
  `;

  const pagination_list = css`
    display: flex;
    align-items: center;
    gap: 4px;
  `;

  const pagination_item = css`
    display: flex;
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    padding: 7px 13px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    cursor: pointer;
    color: #000;
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    &.selected {
      color: var(--white, #ffffff);
      border-radius: 40px;
      background: var(--primary, #9627e7);
    }
    @media (max-width: 375px) {
      font-size: 13px;
    }z
  `;

  const icon_button = css`
    cursor: pointer;
  `;

  function handleChangePage(e) {
    setCurrentPage(Number(e.target.textContent));
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNextPage() {
    if (currentPage < pageToShow.length) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div css={ctn}>
      <ChevLeft css={icon_button} onClick={handlePrevPage} />
      <ul css={pagination_list}>
        {pageToShow.map((page, idx) => (
          <li
            css={pagination_item}
            onClick={handleChangePage}
            key={idx + page}
            className={currentPage === page ? "selected" : ""}
          >
            {page}
          </li>
        ))}
      </ul>
      <ChevRight css={icon_button} onClick={handleNextPage} />
    </div>
  );
}

function TableWriteButton({ link }) {
  const link_style = css`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    text-decoration: none;
    color: var(--white, #fff);
    @media (max-width: 768px) {
      position: static;
      top: 0;
      transform: none;
    }
  `;
  const button = css`
    display: flex;
    box-sizing: border-box;
    padding: 20px;
    width: 200px;
    height: 60px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 80px;
    background: var(--primary, #9627e7);
    color: var(--white, #fff);
    leading-trim: both;
    text-edge: cap;
    font-size: 17px;
    font-weight: 700;
    line-height: 100%;
    @media (max-width: 1280px) {
      padding: 16px;
      width: 160px;
      height: 52px;
      font-size: 16px;
    }
    @media (max-width: 1024px) {
      padding: 14px;
      width: 140px;
      height: 42px;
      font-size: 14px;
    }
  `;
  return (
    <Link to={link} css={link_style}>
      <button type="button" css={button}>
        글쓰기
      </button>
    </Link>
  );
}

export default function TablePageTable({ link }) {
  const ctn = css`
    width: 100%;
    height: 100%;
    margin-top: 20px;
  `;

  const table_ctn = css`
    @media (max-width: 700px) {
      overflow: scroll;
    }
  `;

  const table_control_ctn = css`
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 59px;
    width: 100%;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 32px;
      margin-top: 32px;
    }
  `;
  return (
    <div css={ctn}>
      <div css={table_ctn}>
        <Table />
      </div>
      <div css={table_control_ctn}>
        <TablePagination />
        <TableWriteButton link={link} />
      </div>
    </div>
  );
}
