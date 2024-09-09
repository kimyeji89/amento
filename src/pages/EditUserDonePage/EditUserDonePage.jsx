/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FormHeader from "@components/form/FormHeader";
import CompleteMessage from "@components/form/CompleteMessage";
import Button from "@components/ui/Button";

export default function EditUserDonePage() {
  return (
    <div css={page_wrap}>
      <FormHeader label="회원가입 수정" />
      <CompleteMessage
        text="회원정보가 성공적으로 수정되었습니다."
        highlight="변경된 내용을"
        remainingText=" 확인해 주세요."
      />
      <Button label={"확인"} link="/" />
    </div>
  );
}

const page_wrap = css`
  padding: 250px 0 443px;
  width: 500px;
  margin: 0 auto;
`;
