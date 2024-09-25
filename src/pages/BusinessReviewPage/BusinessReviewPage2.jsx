/** @jsxImportSource @emotion/react */
import { PageWrapSimple } from "@components/form/PageWrap";
import PageTitle from "@components/ui/PageTitle";
import { TablePageWrapTypeB } from "@components/table/TablePageWrap";
import TablePageTitle from "@components/table/TablePageTitle";
import TablePageForm from "@components/table/TablePageForm";
import TablePageTable from "@components/table/TablePageTable";
import BusinessExample from "./BusinessExample";
import businessReviewCardData from "@data/businessReviewCardData.json";

export default function BusinessReviewPage2() {
  return (
    <PageWrapSimple>
      <PageTitle title="사업후기" />
      <BusinessExample slideDataArr={businessReviewCardData} />
      <TablePageWrapTypeB>
        <TablePageTitle title="사업후기" hasBorder={false} />
        <TablePageForm />
        <TablePageTable buttonLink="/" detailLink="/businessReviewDetail" />
      </TablePageWrapTypeB>
    </PageWrapSimple>
  );
}
