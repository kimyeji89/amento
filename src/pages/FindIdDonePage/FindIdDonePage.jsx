import FormHeader from "@components/form/FormHeader";
import CompleteMessage from "@components/form/CompleteMessage";
import Button from "@components/ui/Button";
import FormLink from "@components/form/FormLink";
import GradientBack from "@components/ui/GradientBack";
import { PageWrap } from "@components/form/PageWrap";

export default function FindIdDonePage() {
  return (
    <GradientBack>
      <PageWrap pb="362">
        <FormHeader label="아이디 찾기" />
        <CompleteMessage
          text="회원님의 아이디는"
          highlight="dddddddd"
          remainingText="입니다."
        />
        <Button label={"확인"} link="/" />
        <FormLink
          label1="로그인"
          link1="/login"
          label2="회원정보 수정"
          link="/editUser"
        />
      </PageWrap>
    </GradientBack>
  );
}
