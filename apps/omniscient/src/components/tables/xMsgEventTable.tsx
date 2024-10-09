import type { ColumnDef } from "@tanstack/react-table";

import { LoaderCircle } from "lucide-react";
import { formatEther } from "viem";

import type { XMsgEventReadable } from "@configs/schemas/portal";
import { Evm } from "@web-playground/crypto";
import { Box } from "@web-playground/ui/system/base/box";
import { DataTable } from "@web-playground/ui/system/table";

type Props = {
	data: XMsgEventReadable[];
	isLoading: boolean;
};

const columns: ColumnDef<XMsgEventReadable>[] = [
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
		cell: ({ row: { original: elem } }) => <Box>{Evm.shortenAddress(elem.sender)}</Box>,
	},
	{
		header: "To",
		cell: ({ row: { original: elem } }) => <Box>{Evm.shortenAddress(elem.to)}</Box>,
	},
	{
		header: "Data",
		cell: ({ row: { original: elem } }) => <Box>{Evm.shortenAddress(elem.data)}</Box>,
	},
	{
		header: "GasLimit",
		cell: ({ row: { original: elem } }) => <Box>{elem.gasLimit}</Box>,
	},
	{
		header: "Fees",
		cell: ({ row: { original: elem } }) => (
			<Box>{Evm.roundedEther(formatEther(BigInt(elem.fees)))}</Box>
		),
	},
];

const XMsgEventTable = ({ data, isLoading }: Props) => {
	if (isLoading) return <LoaderCircle className="animate-spin" />;
	return (
		<DataTable
			columns={columns}
			data={data}
			paginationOptions={{ showPageArrows: true, showPageOf: true, showSelectedRows: true }}
		/>
	);
};

export { XMsgEventTable };
