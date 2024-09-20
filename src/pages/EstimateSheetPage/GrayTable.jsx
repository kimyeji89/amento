/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function GrayTable({ data }) {
  return (
    <table border="1" cellspacing="0" cellpadding="10" width="100%">
      <thead>
        <tr>
          <th colspan="2" css={th}>
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
  );
}

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
`;

const td = css`
  height: 50px;
  box-sizing: border-box;
  padding: 10px 14px;
  border-right: 1px solid var(--stroke, #e8e8e8);
  border-bottom: 1px solid var(--stroke, #e8e8e8);
  color: #444;
  font-size: 17px;
  font-weight: 600;
  line-height: calc(50px - 2 * 10px);
`;

const small_td = css`
  width: 16%;
  text-align: center;
`;
const large_td = css`
  width: 84%;
`;
