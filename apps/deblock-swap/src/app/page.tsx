"use client";

import { useAccount } from "wagmi";

import { Login } from "@components/pages/login";
import { Swap } from "@components/pages/swap";

export default function App() {
	const { address } = useAccount();

	if (address) return <Swap />;
	return <Login />;
}
