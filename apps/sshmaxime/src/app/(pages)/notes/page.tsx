import { Container } from "@web-playground/ui/system/base/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Notes",
};

const Notes = () => {
	return (
		<Container className="prose prose-md">
			<h1>Notes</h1>

			<p>...</p>
		</Container>
	);
};

export default Notes;
