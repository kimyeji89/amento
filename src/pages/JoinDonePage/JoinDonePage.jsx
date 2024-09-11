/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FormHeader from "@components/form/FormHeader";
import CompleteMessage from "@components/form/CompleteMessage";
import Button from "@components/ui/Button";
import GradientBack from "@components/ui/GradientBack";

export default function JoinDonePage() {
  return (
    <GradientBack>
      <div css={page_wrap}>
        <FormHeader label="회원가입" />
        <CompleteMessage text="회원가입이 완료되었습니다." />
        <Button label={"로그인"} link="/login" />
      </div>
    </GradientBack>
  );
}

const page_wrap = css`
  padding: 250px 0 443px;
  width: 500px;
  margin: 0 auto;
`;
