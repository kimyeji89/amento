import GradientBack from "@components/ui/GradientBack";
import FormHeader from "@components/form/FormHeader";
import Button from "@components/ui/Button";
import FormLink from "@components/form/FormLink";
import { PageWrap } from "@components/form/PageWrap";
import JoinTos from "./JoinTos";

export default function JoinTosPage() {
  return (
    <GradientBack>
      <PageWrap pb="324">
        <FormHeader label="회원가입" />
        <JoinTos />
        <Button label="다음" link="/joinDetail" />
        <FormLink hasBorder />
      </PageWrap>
    </GradientBack>
  );
}
