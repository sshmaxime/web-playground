import type { ColumnDef } from "@tanstack/react-table";
import { Box } from "@web-playground/ui/system/base/box";
import { DataTable } from "@web-playground/ui/system/table";
import type { XMsgEvent } from "src/schema/portal";

type Props = {
	data: XMsgEvent[];
};

const columns: ColumnDef<XMsgEvent>[] = [
	{
		header: "Offset",
		cell: ({ row: { original: elem } }) => <Box>{elem.offset}</Box>,
	},
	{
		header: "DestChainId",
		cell: ({ row: { original: elem } }) => <Box>{elem.destChainId}</Box>,
	},
	{
		header: "ShardId",
		cell: ({ row: { original: elem } }) => <Box>{elem.shardId}</Box>,
	},
	{
		header: "Sender",
		cell: ({ row: { original: elem } }) => <Box>{elem.sender}</Box>,
	},
	{
		header: "To",
		cell: ({ row: { original: elem } }) => <Box>{elem.to}</Box>,
	},
	{
		header: "Data",
		cell: ({ row: { original: elem } }) => <Box>{elem.data}</Box>,
	},
	{
		header: "GasLimit",
		cell: ({ row: { original: elem } }) => <Box>{elem.gasLimit}</Box>,
	},
	{
		header: "Fees",
		cell: ({ row: { original: elem } }) => <Box>{elem.fees}</Box>,
	},
];

const XMsgSentTable = ({ data }: Props) => {
	return <DataTable columns={columns} data={data} />;
};

export { XMsgSentTable };
