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
  `;

  const category = css`
    width: 18%;
  `;

  const title = css`
    width: 34%;
  `;

  const th_td = css`
    height: 55px;
    box-sizing: border-box;
    padding: 10px 14px;
    border-bottom: 1px solid var(--stroke, #e8e8e8);
    font-size: 17px;
    line-height: calc(55px - 20px);
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
  `;

  const icon_button = css`
    cursor: pointer;
  `;

  function handlePageChange(e) {
    [...e.target.parentNode.children].forEach((li) => {
      li.classList.remove("selected");
    });
    e.target.classList.add("selected");
    setCurrentPage(Number(e.target.textContent));
  }

  return (
    <div css={ctn}>
      <ChevLeft css={icon_button} />
      <ul css={pagination_list}>
        {pageToShow.map((page, idx) => (
          <li
            css={pagination_item}
            onClick={handlePageChange}
            key={idx + page}
            className={currentPage === page ? "selected" : ""}
          >
            {page}
          </li>
        ))}
      </ul>
      <ChevRight css={icon_button} />
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
  `;
  const button = css`
    display: flex;
    width: 200px;
    height: 60px;
    box-sizing: border-box;
    padding: 20px;
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
    line-height: 160%;
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
    margin-top: 20px;
  `;

  const table_control_ctn = css`
    display: flex;
    justify-content: center;
    position: relative;
    margin-top: 59px;
    width: 100%;
  `;
  return (
    <div css={ctn}>
      <Table />
      <div css={table_control_ctn}>
        <TablePagination />
        <TableWriteButton link={link} />
      </div>
    </div>
  );
}
