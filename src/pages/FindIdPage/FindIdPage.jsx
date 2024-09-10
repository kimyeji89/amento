/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FormHeader from "@components/form/FormHeader";
import FormInput from "@components/form/FormInput";
import GradientBack from "@components/ui/GradientBack";
import Button from "@components/ui/Button";
import FormLink from "@components/form/FormLink";
import { useState } from "react";

export default function FindIdPage() {
  const [showError, setShowError] = useState(false);

  const handleNextClick = () => {
    setShowError(true);
  };

  return (
    <GradientBack>
      <div css={page_wrap}>
        <FormHeader label="아이디 찾기" />

        <div css={form_wrapper(showError)}>
          <FormInput label="이름" placeholder="아이디를 입력하세요." />
          <FormInput label="연락처" placeholder="연락처를 입력하세요." />
        </div>

        {showError && (
          <div css={err_msg}>이름 또는 연락처를 다시 확인하세요.</div>
        )}

        <Button label="다음" onClick={handleNextClick} />
        <FormLink
          label1="로그인"
          link1="/login"
          label2="회원정보 수정"
          link2="/editUser"
        />
      </div>
    </GradientBack>
  );
}

const page_wrap = css`
  padding: 85px 0 404px;
  width: 500px;
  margin: 0 auto;
`;

const form_wrapper = (showError) => css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 44px 0 ${showError ? "24px" : "34px"} 0;
`;

const err_msg = css`
  padding: 0 0 24px 0;
  color: #f00;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
`;
