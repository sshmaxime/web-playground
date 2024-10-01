import type { ColumnDef } from "@tanstack/react-table";
import { Box } from "@web-playground/ui/system/base/box";
import { DataTable } from "@web-playground/ui/system/table";
import type { XReceipt } from "src/schema/portal";

type Props = {
	data: XReceipt[];
};

const columns: ColumnDef<XReceipt>[] = [
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
		cell: ({ row: { original: elem } }) => <Box>{elem.relayer}</Box>,
	},
	{
		header: "Success",
		cell: ({ row: { original: elem } }) => <Box>{elem.success}</Box>,
	},
	{
		header: "Error_",
		cell: ({ row: { original: elem } }) => <Box>{elem.error_}</Box>,
	},
];

const XMsgReceivedTable = ({ data }: Props) => {
	return <DataTable columns={columns} data={data} />;
};

export { XMsgReceivedTable };
