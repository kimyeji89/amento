/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import GradientBack from "@components/ui/GradientBack";
import FormHeader from "@components/form/FormHeader";
import FormInput from "@components/form/FormInput";
import Button from "@components/ui/Button";
import FormLink from "@components/form/FormLink";
import { useState } from "react";
import { PageWrap } from "@components/form/PageWrap";

export default function ChangePwPage() {
  const [showError, setShowError] = useState(false);

  const handleNextClick = () => {
    setShowError(true);
  };

  return (
    <GradientBack>
      <PageWrap pb="140">
        <FormHeader label="비밀번호 변경" />

        <div css={form_wrapper(showError)}>
          <FormInput
            label="이메일 아이디"
            placeholder="이메일 아이디를 입력하세요."
          />
          <FormInput label="이름" placeholder="이름을 입력하세요." />
          <FormInput label="연락처" placeholder="연락처를 입력하세요." />
        </div>

        {showError && <div css={err_msg}>입력한 정보를 다시 확인해주세요.</div>}

        <Button label="다음" onClick={handleNextClick} />
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

const form_wrapper = (showError) => css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 44px 0 ${showError ? "24px" : "34px"} 0;

  @media (max-width: 375px) {
    gap: 20px;
  }
`;

const err_msg = css`
  padding: 0 0 24px 0;
  color: #f00;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;

  @media (max-width: 375px) {
    font-size: 15px;
  }
`;
