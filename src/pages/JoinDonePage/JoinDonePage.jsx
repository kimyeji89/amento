import FormHeader from "@components/form/FormHeader";
import CompleteMessage from "@components/form/CompleteMessage";
import Button from "@components/ui/Button";
import GradientBack from "@components/ui/GradientBack";
import { PageWrap } from "@components/form/PageWrap";

export default function JoinDonePage() {
  return (
    <GradientBack>
      <PageWrap pb="443">
        <FormHeader label="회원가입" />
        <CompleteMessage text="회원가입이 완료되었습니다." />
        <Button label={"로그인"} link="/login" />
      </PageWrap>
    </GradientBack>
  );
}
