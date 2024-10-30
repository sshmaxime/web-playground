import { DropComponent } from "src/app/drop/[dropId]/drop";

type PageParams = {
	params: Promise<{ dropId: bigint }>;
};

const DropIdPage = async ({ params: ParamsPrimitive }: PageParams) => {
	// Params.
	const { dropId } = await ParamsPrimitive;

	return <DropComponent dropId={dropId} />;
};

export default DropIdPage;
