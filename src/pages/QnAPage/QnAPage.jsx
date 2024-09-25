/** @jsxImportSource @emotion/react */
import TablePageTitle from "@components/table/TablePageTitle";
import { TablePageWrapTypeA } from "@components/table/TablePageWrap";
import TablePageForm from "@components/table/TablePageForm";
import TablePageTable from "@components/table/TablePageTable";

export default function QnAPage() {
  return (
    <TablePageWrapTypeA>
      <TablePageTitle title="Q&A" hasBorder={false} />
      <TablePageForm />
      <TablePageTable buttonLink="/" detailLink="/" />
    </TablePageWrapTypeA>
  );
}
