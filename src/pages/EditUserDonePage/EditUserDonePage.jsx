import FormHeader from "@components/form/FormHeader";
import CompleteMessage from "@components/form/CompleteMessage";
import Button from "@components/ui/Button";
import GradientBack from "@components/ui/GradientBack";
import { PageWrap } from "@components/form/PageWrap";

export default function EditUserDonePage() {
  return (
    <GradientBack>
      <PageWrap pb="406">
        <FormHeader label="회원정보 수정" />
        <CompleteMessage
          text="회원정보가 성공적으로 수정되었습니다."
          highlight="변경된 내용을"
          remainingText=" 확인해 주세요."
        />
        <Button label={"확인"} link="/" />
      </PageWrap>
    </GradientBack>
  );
}
