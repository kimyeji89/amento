/** @jsxImportSource @emotion/react */
import PageTitle from "@components/ui/PageTitle";
import { PageWrapSimple } from "@components/form/PageWrap";
import { TablePageWrapTypeB } from "@components/table/TablePageWrap";
import TablePageTitle from "@components/table/TablePageTitle";
import TablePageForm from "@components/table/TablePageForm";
import TablePageTable from "@components/table/TablePageTable";

export default function ConsultingPage2() {
  return (
    <PageWrapSimple>
      <PageTitle title="창업 컨설팅" hasBorder={true} />
      <TablePageWrapTypeB>
        <TablePageTitle title="리스트" hasBorder={false} />
        <TablePageForm />
        <TablePageTable buttonLink="/" detailLink="/" />
      </TablePageWrapTypeB>
    </PageWrapSimple>
  );
}
