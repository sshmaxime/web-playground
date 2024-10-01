"use client";

import {
	type ColumnDef,
	type SortingState,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";

import { Card } from "@web-playground/ui/shadcn/components/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@web-playground/ui/shadcn/components/table";
import { Box } from "@web-playground/ui/system/base/box";
import React, { type ComponentProps } from "react";
import DataTablePagination from "./pagination";

type Props = {
	paginationOptions?: ComponentProps<typeof DataTablePagination>["options"];
};

type RowProps = object & {
	href?: string;
};

type DataTableProps<TData extends RowProps, TValue> = {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	toHide?: string[];
} & Props;

export function DataTable<TData extends RowProps, TValue>({
	columns,
	data,
	paginationOptions,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = React.useState<SortingState>([]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		state: { sorting, columnVisibility: {} },
	});

	return (
		<Box className="space-y-2">
			<Card>
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id} className="h-10 px-4">
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext(),
													)}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>

					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
									className="h-16"
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id} className="px-4">
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</Card>

			<DataTablePagination table={table} options={paginationOptions} />
		</Box>
	);
}
