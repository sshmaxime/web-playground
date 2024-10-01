import type { NextRequest } from "next/server";

const getNetworks = (_: NextRequest) => {
	return Response.json("hello");
};

const GET = getNetworks;
export { GET };
