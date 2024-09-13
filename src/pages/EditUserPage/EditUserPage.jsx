/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import GradientBack from "@components/ui/GradientBack";
import FormHeader from "@components/form/FormHeader";
import FormInput from "@components/form/FormInput";
import FormDatePicker from "@components/form/FormDatePicker";
import Button from "@components/ui/Button";
import FormLink from "@components/form/FormLink";
import { PageWrapWide } from "@components/form/PageWrap";

export default function EditUserPage() {
  return (
    <GradientBack>
      <PageWrapWide pb="159">
        <FormHeader />

        <div css={form_wrapper}>
          <FormInput label="이메일 아이디" required isDetailForm />
          <FormInput label="비밀번호 확인" required isDetailForm />
          <div css={login_btn_wrap}>
            <Button label="로그인 정보 확인" />
          </div>
        </div>

        <div css={edit_title}>회원정보 수정</div>
        <div css={div_line} />

        <div css={form_wrapper_2}>
          <FormInput label="성명" required isDetailForm />
          <FormInput label="연락처" required isDetailForm />
        </div>

        <div css={select_title}>선택입력</div>
        <div css={div_line} />

        <div css={form_wrapper_select}>
          <FormInput label="업체명" isDetailForm />
          <div css={col}>
            <div css={row}>
              <FormInput label="희망업종" isDetailForm />
              <FormInput label="점포유무" isDetailForm />
            </div>
            <div css={row}>
              <FormInput label="희망지역" isDetailForm />
              <FormInput label="점포수" isDetailForm />
            </div>
            <div css={row}>
              <FormDatePicker label="희망 개업일" />
              <FormInput label="매출액" isDetailForm />
            </div>
          </div>
        </div>

        <Button label="수정하기" link="/editUserDone" />
        <FormLink hasBorder label1="탈퇴하기" link1="/withdrawalUser" />
      </PageWrapWide>
    </GradientBack>
  );
}

const form_wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 44px 0 34px 0;

  @media (max-width: 375px) {
    gap: 20px;
  }
`;

const form_wrapper_2 = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 0 44px 0;

  @media (max-width: 375px) {
    padding: 24px 0 34px 0;
  }
`;

const login_btn_wrap = css`
  display: flex;
  justify-content: end;

  p {
    font-size: 15px;
    width: 150px;
    text-align: center;
    line-height: 10px !important;
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    margin: 4px 0 0;
  }
`;

const edit_title = css`
  color: #111;
  font-size: 32px;
  font-weight: 700;
  padding: 0 0 14px 0;

  @media (max-width: 1280px) {
    font-size: 28px;
  }

  @media (max-width: 1024px) {
    font-size: 26px;
  }

  @media (max-width: 375px) {
    font-size: 20px;
  }
`;

const div_line = css`
  width: 100%;
  height: 1px;
  background: #b7b7b7;
`;

const select_title = css`
  color: #111;
  font-size: 24px;
  font-weight: 700;
  padding: 0 0 14px 0;

  @media (max-width: 1280px) {
    font-size: 22px;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

const form_wrapper_select = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 0 44px;

  @media (max-width: 375px) {
    padding: 24px 0 34px;
    gap: 20px;
  }
`;

const row = css`
  display: flex;
  width: 100%;
  gap: 14px;

  @media (max-width: 375px) {
    gap: 10px;
  }
`;

const col = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media (max-width: 375px) {
    gap: 20px;
  }
`;
