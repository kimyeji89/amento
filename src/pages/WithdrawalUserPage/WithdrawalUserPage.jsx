/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import WarningMessage from "@components/form/WarningMessage";
import GradientBack from "@components/ui/GradientBack";
import WarningBox from "./WarningBox";
import Button from "@components/ui/Button";
import { Link } from "react-router-dom";

export default function WithdrawalUserPage() {
  return (
    <GradientBack>
      <div css={page_wrap}>
        <WarningMessage text="정말 탈퇴하시겠습니까?" />
        <WarningBox />
        <Button label="취소" link="/" />
        <div css={link_wrap}>
          <div>
            <Link to="/withdrawalUserDone">탈퇴하기</Link>
          </div>
        </div>
      </div>
    </GradientBack>
  );
}

const page_wrap = css`
  padding: 85px 0 404px;
  width: 500px;
  margin: 0 auto;
`;

const link_wrap = css`
  display: flex;
  justify-content: end;
  padding: 24px 0 0;

  color: var(--primary);
  text-align: center;
  font-size: 15px;
  font-weight: 700;

  a {
    text-decoration: none;
  }

  div {
    border-bottom: 1px solid var(--primary);
  }
`;
