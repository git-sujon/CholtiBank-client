"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Spinner,
  getKeyValue,
} from "@nextui-org/react";

import { useGetMyStatementsQuery } from "@/redux/api/transactionApi";
import LoadingPage from "@/app/loading";

export default function Statements() {
  const [page, setPage] = React.useState(1);

  const { data, isLoading } = useGetMyStatementsQuery(undefined);
  console.log(data?.data);
  const allData = data?.data;
  const rowsPerPage = 8;

  const pages = Math.ceil(data?.data?.length / rowsPerPage) ?? 0;
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    if (isLoading) {
      return <LoadingPage />;
    }
    return allData.slice(start, end);
  }, [page, allData, isLoading]);

  console.log("items:", items);
  if (isLoading || !items) {
    return <LoadingPage />;
  }

  const loadingState =
    isLoading || data?.data?.length === 0 ? "loading" : "idle";

  return (
    <div>
      <Table
        aria-label="Example table with client async pagination"
        classNames={{
          thead: "bg-secondary",
        }}
        bottomContent={
          pages > 0 ? (
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          ) : null
        }
      >
        <TableHeader>
          <TableColumn key={"transactionId"}>TransactionId</TableColumn>
          <TableColumn key={"transactionType"}>Type</TableColumn>
          <TableColumn key={"deposit"}>Amount</TableColumn>
        </TableHeader>
        <TableBody
          items={items ?? []}
          loadingContent={<Spinner />}
          loadingState={loadingState}
        >
          {(item: any) => (
            <TableRow key={item.transactionId}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === "withdrawal" ||
                  columnKey === "deposit" ||
                  columnKey === "transfer" ||
                  columnKey === "mobileRecharge"
                    ? [
                        item?.withdrawal?.amount,
                        item?.deposit?.amount,
                        item?.transfer?.amount,
                        item?.mobileRecharge?.amount,
                      ]
                        .filter((amount) => amount !== undefined)
                        .reduce((total, amount) => total + amount, 0)
                    : item[columnKey]}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
