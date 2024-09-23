/** @jsxImportSource @emotion/react */
import TablePageTitle from "@components/table/TablePageTitle";
import { TablePageWrapTypeA } from "@components/table/TablePageWrap";
import TablePageForm from "@components/table/TablePageForm";
import TablePageTable from "@components/table/TablePageTable";

export default function ConsultHistoryPage() {
  return (
    <TablePageWrapTypeA>
      <TablePageTitle title="상담내역" hasBorder={false} />
      <TablePageForm />
      <TablePageTable buttonLink="/consultWrite" detailLink="/consultDetail" />
    </TablePageWrapTypeA>
  );
}
