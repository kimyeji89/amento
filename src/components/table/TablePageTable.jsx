/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

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
        {reversedData.map((data) => (
          <tr>
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
  `;

  function handlePageChange(e) {
    setCurrentPage(parseInt(e.currenTarget.innerText));
    e.currenTarget.classList.add("selected");
  }

  return (
    <ul css={pagination_list}>
      <li css={pagination_item} onClick={handlePageChange}>
        1
      </li>
    </ul>
  );
}

export default function TablePageTable() {
  return (
    <div css={ctn}>
      <Table />
      <div css={table_control_ctn}>
        <TablePagination />
      </div>
    </div>
  );
}

const ctn = css`
  margin-top: 20px;
`;

const table_control_ctn = css`
  display: flex;
  justify-content: center;
  margin-top: 59px;
`;
