/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useHeaderHeight } from "@hooks/useHeaderHeight";
import FormHeader from "@components/form/FormHeader";
import CompleteMessage from "@components/form/CompleteMessage";
import Button from "@components/ui/Button";
import GradientBack from "@components/ui/GradientBack";
import { PageWrap } from "@components/form/PageWrap";

export default function ProcessDonePage() {
  const { headerHeight } = useHeaderHeight();

  return (
    <GradientBack>
      <PageWrap pb="362">
        <FormHeader label="상담신청" />
        <CompleteMessage
          text="상담신청서가"
          highlight="성공적으로 전달되었습니다."
          remainingText=""
        />
        <Button label={"확인"} link="/" />
      </PageWrap>
    </GradientBack>
  );
}
