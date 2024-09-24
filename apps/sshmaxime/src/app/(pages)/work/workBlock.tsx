import { Box } from "@web-playground/ui/system/base/box";
import type { PropsWithChildren } from "react";

type WorkBlock = {
	position: string;
	company: string;
	contract: string;
	date: string;
} & PropsWithChildren;

const WorkBlock = (props: WorkBlock) => {
	const { position, company, contract, date, children } = props;

	return (
		<Box>
			<div>
				<h4>
					<b>{position}</b>
				</h4>

				<figcaption>
					<b>{company}</b> - [ {contract} ]
					<br />
					<i>{date}</i>
				</figcaption>

				{children}
			</div>
		</Box>
	);
};

export { WorkBlock };
