/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function PurpleTable() {
  return (
    <table border="1" cellspacing="0" cellpadding="10" width="100%">
      <thead>
        <tr>
          <th css={[th, big]}>분류</th>
          <th css={[th, big]}>내용</th>
          <th css={[th, mid]}>항목</th>
          <th css={[th, small]}>단위</th>
          <th css={[th, small]}>수량</th>
          <th css={[th, big]}>금액</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td css={tbody_th}></td>
          <td css={tbody_td}></td>
          <td css={tbody_td}></td>
          <td css={tbody_td}></td>
          <td css={tbody_td}></td>
          <td css={[tbody_td, last]}></td>
        </tr>
        <tr>
          <td css={tbody_th}></td>
          <td css={tbody_td}></td>
          <td css={tbody_td}></td>
          <td css={tbody_td}></td>
          <td css={tbody_td}></td>
          <td css={[tbody_td, last]}></td>
        </tr>
        <tr>
          <td css={tbody_th}>합계</td>
          <td css={tbody_td}></td>
          <td css={tbody_td}></td>
          <td css={tbody_td}></td>
          <td css={tbody_td}></td>
          <td css={[tbody_td, yellow, last]}>원</td>
        </tr>
        <tr>
          <td css={[tbody_th, red]}>할인</td>
          <td css={tbody_td}></td>
          <td css={tbody_td}></td>
          <td css={tbody_td}></td>
          <td css={tbody_td}></td>
          <td css={[tbody_td, red, yellow, last]}>-원</td>
        </tr>
        <tr>
          <td css={tbody_th}>공급가(=합계-할인)</td>
          <td css={tbody_td}></td>
          <td css={tbody_td}></td>
          <td css={tbody_td}></td>
          <td css={tbody_td}></td>
          <td css={[tbody_td, yellow, last]}>원</td>
        </tr>

        <tr>
          <td css={tbody_th}>부가가치세(VAT)(=공급가의 10%)</td>
          <td css={tbody_td}></td>
          <td css={tbody_td}></td>
          <td css={tbody_td}></td>
          <td css={tbody_td}></td>
          <td css={[tbody_td, yellow, last]}>원</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td css={tfoot_th}>총계(TOTAL)</td>
          <td colspan="5" css={[tfoot_td, last]}>
            원
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

const th = css`
  height: 50px;
  box-sizing: border-box;
  padding: 10px 14px;
  border-bottom: 1px solid var(--stroke, #e8e8e8);
  background: #f7f0ff;
  color: var(--Black, #131313);
  font-size: 17px;
  font-weight: 700;
  line-height: calc(50px - 2 * 10px);
`;

const big = css`
  width: 25%;
`;
const mid = css`
  width: 12.5%;
`;
const small = css`
  width: 6%;
`;

const tbody_th = css`
  height: 55px;
  box-sizing: border-box;
  padding: 10px 20px;
  background: #fff;
  border-right: 1px solid var(--stroke, #e8e8e8);
  border-bottom: 1px solid var(--stroke, #e8e8e8);
  color: var(--black, #111);
  font-size: 17px;
  font-weight: 700;
  line-height: calc(55px - 2 * 10px);
`;

const tbody_td = css`
  ${tbody_th};
  padding: 10px 14px;
`;

const red = css`
  color: #f00;
`;

const yellow = css`
  background: #fefceb;
`;

const last = css`
  border-right: none;
  text-align: right;
`;

const tfoot_th = css`
  height: 60px;
  box-sizing: border-box;
  padding: 10px 34px;
  border-bottom: 1px solid var(--stroke, #e8e8e8);
  background: #2f2f2f;
  color: #fff;
  font-size: 17px;
  font-weight: 800;
  text-transform: uppercase;
  line-height: calc(60px - 2 * 10px);
`;

const tfoot_td = css`
  ${tfoot_th};
  padding: 10px 14px;
`;
