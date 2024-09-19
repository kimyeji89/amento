/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FormHeader from "@components/form/FormHeader";
import WarningMessage from "@components/form/WarningMessage";
import GradientBack from "@components/ui/GradientBack";
import WarningBox from "./WarningBox";
import Button from "@components/ui/Button";
import { Link } from "react-router-dom";
import { PageWrap } from "@components/form/PageWrap";

export default function WithdrawalUserPage() {
  return (
    <GradientBack>
      <PageWrap pb="250">
        <FormHeader label="탈퇴하기" />
        <WarningMessage text="정말 탈퇴하시겠습니까?" />
        <WarningBox />
        <Button label="취소" link="/" />
        <div css={link_wrap}>
          <div>
            <Link to="/withdrawalUserDone">탈퇴하기</Link>
          </div>
        </div>
      </PageWrap>
    </GradientBack>
  );
}

const link_wrap = css`
  display: flex;
  justify-content: end;
  padding: 24px 0 0;

  color: var(--primary);
  text-align: center;
  font-size: 15px;
  font-weight: 700;

  div {
    border-bottom: 1px solid var(--primary);

    a {
      text-decoration: none;
      color: var(--primary);
    }
  }

  @media (max-width: 375px) {
    font-size: 13px;
  }
`;
