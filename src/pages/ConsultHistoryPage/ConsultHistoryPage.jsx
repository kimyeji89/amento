/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TablePageTitle from "@components/table/TablePageTitle";
import TablePageWrap from "@components/table/TablePageWrap";
import TablePageForm from "@components/table/TablePageForm";
import TablePageTable from "@components/table/TablePageTable";

export default function ConsultHistoryPage() {
  return (
    <TablePageWrap>
      <TablePageTitle title="상담내역" />
      <TablePageForm />
      <TablePageTable />
    </TablePageWrap>
  );
}
