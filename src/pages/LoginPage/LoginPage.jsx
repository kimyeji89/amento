/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import GradientBack from "@components/ui/GradientBack";
import FormHeader from "@components/form/FormHeader";
import FormInput from "@components/form/FormInput";
import Button from "@components/ui/Button";
import FormLink from "@components/form/FormLink";
import { PageWrap } from "@components/form/PageWrap";

export default function LoginPage() {
  return (
    <GradientBack>
      <PageWrap pb="292">
        <FormHeader label="로그인" />

        <div css={form_wrapper}>
          <FormInput label="이메일" placeholder="이메일 주소를 입력하세요." />
          <FormInput label="비밀번호" placeholder="비밀번호를 입력하세요." />
        </div>

        <Button label="로그인" />
        <FormLink hasBorder />
      </PageWrap>
    </GradientBack>
  );
}

const form_wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 44px 0 34px 0;
`;
