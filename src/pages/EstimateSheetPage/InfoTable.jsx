/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function InfoTable({ data }) {
  return (
    <div css={ctn}>
      <table border="1" cellSpacing="0" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th colSpan="2" css={th}>
              {data.th}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.tr.map((tr, idx) => (
            <tr key={idx}>
              <td css={[td, small_td]}>{tr.small}</td>
              <td css={[td, large_td]}>{tr.big}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const ctn = css`
  width: 100%;
  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`;

const th = css`
  height: 50px;
  box-sizing: border-box;
  padding: 10px 14px;
  border-bottom: 1px solid var(--stroke, #e8e8e8);
  background: #f1f1f1;
  color: var(--Black, #131313);
  font-size: 17px;
  font-weight: 700;
  text-align: center;
  line-height: calc(50px - 2 * 10px);
  @media (max-width: 1919px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    font-size: 15px;
    height: 40px;
    line-height: normal;
    vertical-align: middle;
  }
`;

const td = css`
  height: 50px;
  box-sizing: border-box;
  padding: 10px 14px;

  border-bottom: 1px solid var(--stroke, #e8e8e8);
  color: #444;
  font-size: 17px;
  font-weight: 600;
  line-height: calc(50px - 2 * 10px);
  @media (max-width: 1919px) {
    font-size: 16px;
    white-space: nowrap;
  }
  @media (max-width: 375px) {
    font-size: 15px;
    height: 40px;
    line-height: normal;
    vertical-align: middle;
  }
`;

const small_td = css`
  width: 16%;
  border-right: 1px solid var(--stroke, #e8e8e8);
  text-align: center;
  @media (max-width: 375px) {
    min-width: 120px;
  }
`;
const large_td = css`
  width: 84%;
  padding: 10px 20px;
`;
