"use client";

import { useEffect } from "react";

import type { AppChainId } from "@configs/schemas/chains";
import { useDropById } from "@hooks/query/useDrop";
import { Separator } from "@web-playground/ui/shadcn/components/separator";
import { Box } from "@web-playground/ui/system/base/box";
import { notFound } from "next/navigation";
import { Product } from "src/app/drop/[dropId]/_components/product";
import { Scene } from "src/app/drop/[dropId]/_components/scene";
import { useDropStore } from "src/app/drop/[dropId]/store";
import { useChainId } from "wagmi";

type Props = {
	dropId: bigint;
};

const DropComponent = ({ dropId }: Props) => {
	// Store.
	const setDrop = useDropStore((s) => s.setDrop);

	// Get chainId.
	const chainId = useChainId() as AppChainId;

	// Fetch Drop.
	const { data: drop, isError } = useDropById({ dropId, chainId });

	// Whenever `Drop` change, update Store.
	useEffect(() => {
		setDrop(drop);
	}, [drop, setDrop]);

	// When isError, `notFound`
	if (isError) notFound();

	return (
		<Box className="grow border-y flex border-muted">
			<Box className="w-8/12 grow flex relative">
				<Scene />
			</Box>

			<Box>
				<Separator orientation="vertical" className="bg-muted" />
			</Box>

			<Box className="w-4/12 bg-sidebar flex flex-col">
				<Product />
			</Box>
		</Box>
	);
};

export { DropComponent };
