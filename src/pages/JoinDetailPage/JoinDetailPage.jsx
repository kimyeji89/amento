/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import GradientBack from "@components/ui/GradientBack";
import FormHeader from "@components/form/FormHeader";
import FormInput from "@components/form/FormInput";
import FormDatePicker from "@components/form/FormDatePicker";
import Button from "@components/ui/Button";
import FormLink from "@components/form/FormLink";

export default function JoinDetailPage() {
  return (
    <GradientBack>
      <div css={page_wrap}>
        <FormHeader label="회원가입" />

        <div css={form_wrapper}>
          <FormInput label="이메일 아이디" required />
          <FormInput label="비밀번호" required />
          <FormInput label="비밀번호 확인" required />
          <FormInput label="성명" required />
          <FormInput label="연락처" required />
        </div>

        <div css={select_input}>선택입력</div>
        <div css={div_line} />

        <div css={form_wrapper_select}>
          <FormInput label="업체명" />
          <div css={row}>
            <div css={col}>
              <FormInput label="희망업종" />
              <FormInput label="희망지역" />
              <FormDatePicker label="희망 개업일" />
            </div>
            <div css={col}>
              <FormInput label="점포유무" />
              <FormInput label="점포수" />
              <FormInput label="매출액" />
            </div>
          </div>
        </div>

        <Button label="회원가입" link="/" />
        <FormLink hasBorder />
      </div>
    </GradientBack>
  );
}

const page_wrap = css`
  padding: 250px 0 162px;
  width: 800px;
  margin: 0 auto;
`;

const form_wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 44px 0 34px 0;
`;

const form_wrapper_select = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 44px 0;
`;

const select_input = css`
  color: #111;
  font-size: 24px;
  font-weight: 700;
  padding: 20px 0 14px 0;
`;

const div_line = css`
  width: 100%;
  height: 1px;
  background: #b7b7b7;
`;

const row = css`
  display: flex;
  width: 100%;
  gap: 14px;
`;

const col = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;
