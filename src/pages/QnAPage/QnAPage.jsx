/** @jsxImportSource @emotion/react */
import TablePageTitle from "@components/table/TablePageTitle";
import TablePageWrap from "@components/table/TablePageWrap";
import TablePageForm from "@components/table/TablePageForm";
import TablePageTable from "@components/table/TablePageTable";

export default function QnAPage() {
  return (
    <TablePageWrap>
      <TablePageTitle title="Q&A" />
      <TablePageForm />
      <TablePageTable link="/" />
    </TablePageWrap>
  );
}
