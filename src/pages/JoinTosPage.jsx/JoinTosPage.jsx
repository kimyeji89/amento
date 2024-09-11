/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import GradientBack from "@components/ui/GradientBack";
import FormHeader from "@components/form/FormHeader";
import Button from "@components/ui/Button";
import FormLink from "@components/form/FormLink";
import JoinTos from "./JoinTos";

export default function JoinTosPage() {
  return (
    <GradientBack>
      <div css={page_wrap}>
        <FormHeader label="회원가입" />
        <JoinTos />
        <Button label="다음" link="/joinDetail" />
        <FormLink hasBorder />
      </div>
    </GradientBack>
  );
}

const page_wrap = css`
  padding: 250px 0 324px;
  width: 500px;
  margin: 0 auto;
`;
