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


import LoadingPage from "@/app/loading";
import { useAllTransactionsQuery } from "@/redux/api/adminApi";

export default function AllTransactions() {
  const [page, setPage] = React.useState(1);

  const { data, isLoading } = useAllTransactionsQuery(undefined);

  if (isLoading) {
    return <LoadingPage />;
  }

  console.log(data?.data);

  const rowsPerPage = 10;

  const pages = data?.data?.length;

  const loadingState =
    isLoading || data?.data?.length === 0 ? "loading" : "idle";

  return (
    <div>
      <Table
        aria-label="Example table with client async pagination"
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
          items={data?.data ?? []}
          loadingContent={<Spinner />}
          loadingState={loadingState}
        >
          {(item: any) => (
            <TableRow key={item.transactionId}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === "deposit"
                    ? item.deposit?.amount
                    : columnKey === "withdrawal"
                    ? item.withdrawal?.amount
                    : columnKey === "transfer"
                    ? item.transfer?.amount
                    : columnKey === "mobileRecharge"
                    ? item.mobileRecharge?.amount
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
