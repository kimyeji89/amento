/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FormHeader from "@components/form/FormHeader";
import FormLink from "@components/form/FormLink";
import Button from "@components/ui/Button";
import FormInput from "@components/form/FormInput";
// import GradientBack from "../../components/ui/GradientBack";

export default function LoginPage() {
  return (
    <div css={login_wrap}>
      <FormHeader label="로그인" />

      <div css={form_wrapper}>
        <FormInput label="이메일" placeholder="이메일주소를 입력하세요." />
        <FormInput label="비밀번호" placeholder="비밀번호를 입력하세요." />
      </div>

      <Button label={"로그인"} />
      <FormLink hasBorder />
    </div>
  );
}

const login_wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 500px;
  margin: 0 auto;
  padding: 250px 0 292px;
`;

const form_wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 44px 0 34px 0;
`;
