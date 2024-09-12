/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import GradientBack from "@components/ui/GradientBack";
import FormHeader from "@components/form/FormHeader";
import FormInput from "@components/form/FormInput";
import Button from "@components/ui/Button";
import FormLink from "@components/form/FormLink";
import { PageWrap } from "@components/form/PageWrap";

export default function ChangePwDetailPage() {
  return (
    <GradientBack>
      <PageWrap pb="294">
        <FormHeader label="비밀번호 변경" />

        <div css={form_wrapper}>
          <FormInput
            label="비밀번호"
            placeholder="비밀번호를 입력하세요."
            required
          />
          <FormInput
            label="비밀번호 확인"
            placeholder="비밀번호를 한 번 더 입력하세요."
            required
          />
        </div>

        <Button label="다음" link="/changePwDone" />
        <FormLink
          label1="로그인"
          link1="/login"
          label2="회원정보 수정"
          link2="/editUser"
        />
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
