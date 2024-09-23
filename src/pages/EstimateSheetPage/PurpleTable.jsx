/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function PurpleTable() {
  return (
    <div css={outer_ctn}>
      <div css={ctn}>
        <table border="1" cellSpacing="0" cellPadding="10" width="100%">
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
              <td colSpan="5" css={[tfoot_td, last]}>
                원
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div css={mobile_tfoot}>
        <p css={mobile_tfoot_th}>총계(TOTAL)</p>
        <p colSpan="5" css={[mobile_tfoot_td, last]}>
          원
        </p>
      </div>
    </div>
  );
}
const outer_ctn = css`
  width: 100%;
  position: relative;
`;
const ctn = css`
  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`;

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
  @media (max-width: 1919px) {
    font-size: 16px;
  }
  @media (max-width: 1280px) {
    white-space: nowrap;
  }
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
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
  word-break: keep-all;
  line-height: calc(55px - 2 * 10px);

  @media (max-width: 1919px) {
    font-size: 16px;
  }
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 375px) {
    min-width: 160px;
    vertical-align: middle;
    line-height: normal;
  }
`;

const tbody_td = css`
  ${tbody_th};
  padding: 10px 14px;

  @media (max-width: 1919px) {
    white-space: nowrap;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
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
  @media (max-width: 1919px) {
    font-size: 16px;
    word-break: keep-all;
  }
  @media (max-width: 1024px) {
    font-size: 15px;
    white-space: nowrap;
  }
  @media (max-width: 375px) {
    display: none;
  }
`;

const tfoot_td = css`
  ${tfoot_th};
  padding: 10px 14px;
`;

const mobile_tfoot = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  background: #2f2f2f;
  border-bottom: 1px solid var(--stroke, #e8e8e8);
`;

const mobile_tfoot_th = css`
  height: 50px;
  box-sizing: border-box;
  padding: 10px 34px;
  background: #2f2f2f;
  color: #fff;
  font-size: 15px;
  font-weight: 800;
  white-space: nowrap;
  word-break: keep-all;
  text-transform: uppercase;
  line-height: calc(50px - 2 * 10px);
  border: none;
`;
const mobile_tfoot_td = css`
  ${mobile_tfoot_th};
  padding: 10px 14px;
`;
