/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useHeaderHeight } from "@hooks/useHeaderHeight";
import FormHeader from "@components/form/FormHeader";
import CompleteMessage from "@components/form/CompleteMessage";
import Button from "@components/ui/Button";
import GradientBack from "@components/ui/GradientBack";

export default function ProcessDonePage() {
  const { headerHeight } = useHeaderHeight();

  const ctn = css`
    padding: 250px 0 406px;
    width: 500px;
    margin: ${headerHeight}px auto 0;
  `;

  return (
    <GradientBack>
      <main css={ctn}>
        <FormHeader label="상담신청" />
        <CompleteMessage
          text="상담신청서가"
          highlight="성공적으로 전달되었습니다."
          remainingText=""
        />
        <Button label={"확인"} link="/" />
      </main>
    </GradientBack>
  );
}
