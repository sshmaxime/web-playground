import type { ColumnDef } from "@tanstack/react-table";

import { CircleCheckBig, CircleX, LoaderCircle } from "lucide-react";

import type { XReceiptEventReadable } from "@configs/schemas/portal";
import { Evm } from "@web-playground/crypto";
import { Box } from "@web-playground/ui/system/base/box";
import { DataTable } from "@web-playground/ui/system/table";

type Props = {
	data: XReceiptEventReadable[];
	isLoading: boolean;
};

const columns: ColumnDef<XReceiptEventReadable>[] = [
	{
		header: "Offset",
		cell: ({ row: { original: elem } }) => <Box>{elem.offset}</Box>,
	},
	{
		header: "SourceChainId",
		cell: ({ row: { original: elem } }) => <Box>{elem.sourceChainId}</Box>,
	},
	{
		header: "ShardId",
		cell: ({ row: { original: elem } }) => <Box>{elem.shardId}</Box>,
	},
	{
		header: "GasUsed",
		cell: ({ row: { original: elem } }) => <Box>{elem.gasUsed}</Box>,
	},
	{
		header: "Relayer",
		cell: ({ row: { original: elem } }) => <Box>{Evm.shortenAddress(elem.relayer)}</Box>,
	},
	{
		header: "Success",
		cell: ({ row: { original: elem } }) => (
			<Box>
				{elem.success ? <CircleCheckBig size={20} className="text-green-500" /> : <CircleX />}
			</Box>
		),
	},
	{
		header: "Error",
		cell: ({ row: { original: elem } }) => <Box>{elem.error}</Box>,
	},
];

const XReceiptEventTable = ({ data, isLoading }: Props) => {
	if (isLoading) return <LoaderCircle className="animate-spin" />;
	return (
		<DataTable
			columns={columns}
			data={data}
			paginationOptions={{ showPageArrows: true, showPageOf: true, showSelectedRows: true }}
		/>
	);
};

export { XReceiptEventTable };
