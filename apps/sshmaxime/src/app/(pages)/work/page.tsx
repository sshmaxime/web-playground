import { Separator } from "@web-playground/ui/shadcn/components/separator";
import { Box } from "@web-playground/ui/system/base/box";
import { Container } from "@web-playground/ui/system/base/container";
import type { Metadata } from "next";
import { WorkBlock } from "src/app/(pages)/work/workBlock";

export const metadata: Metadata = {
	title: "Work",
};

const works: WorkBlock[] = [
	{
		position: "Software Engineer",
		company: "Ledger",
		contract: "Permanent position",
		date: "July 2023 - Present",
		children: <p>...</p>,
	},
	{
		position: "Founder / CTO / CEO",
		company: "PremierStudio",
		contract: "Self-Employed",
		date: "Jan. 2022 - Apr. 2023 - 1 year & 4 months",
		children: (
			<p>
				The company I created intended to be a <b>decentralized system</b>{" "}
				enabling <b>NFT</b> holders to bring their <b>assets</b> to life in the{" "}
				<b>real world</b>. I engineered the <b>smart contracts</b> that
				underpinned the <b>ecosystem</b> and create a state of the art{" "}
				<b>Decentralized App</b> in <b>React</b> app to interact with it.
				Despite my efforts, challenges in securing suitable talent for
				amplifying marketing and communication hindered the project's
				anticipated success trajectory.
			</p>
		),
	},
	{
		position: "Software Engineer",
		company: "Bancor",
		contract: "Freelance",
		date: "Feb. 2021 - Jan. 2022 - 1 year",
		children: (
			<p>
				As a <b>blockchain</b> developer, I participated in the development of
				core smart contracts in <b>Solidity</b>. I integrated <b>proxy</b>{" "}
				contracts from <b>OpenZeppelin</b> and <b>Chainlink VRF</b> on some of
				our smart contracts. I successfully migrated our codebase from Truffle
				to <b>Hardhat</b>, transitioning from JavaScript to <b>TypeScript</b>.
				Additionally, I contributed to the internal development of Bancor V3 by
				creating some internal TypeScript tools for efficient{" "}
				<b>smart contract</b> deployment.
			</p>
		),
	},
	{
		position: "Backend Engineer",
		company: "Adagio.io",
		contract: "Part-time",
		date: "Sep. 2019 - Mar. 2020 - 7 months",
		children: (
			<p>
				I coded daily fixes and feature additions within our Go codebase.
				Optimizing performance via <b>pprof</b> and <b>profiling</b>. I also
				engineered a versatile <b>benchmarking tool</b> in C++, Python, and Go
				to evaluate our <b>Tensorflow</b> model efficacy. By refining request
				timeouts, substantial <b>CPU workload reductions</b> were achieved.
				Moreover, I helped our Lead DevOps in safe deployment initiatives
				utilizing Canary Deployment, Auto Scaling, and <b>Load Balancing</b>{" "}
				through
				<b>GCP</b>.
			</p>
		),
	},
	{
		position: "Software Engineer",
		company: "toHero.io",
		contract: "Internship",
		date: "Dec. 2017 - Jul. 2018 - 8 months",
		children: (
			<p>
				I have developed <b>Blockchain Applications</b> in <b>Go</b> for clients
				using <b>Hyperledger Fabric</b>'s technology. Additionally, I created an{" "}
				<b>internal SDK</b> to fasten Hyperledger Fabric
				<b>POC</b> development and authored <b>technical "papers"</b> to aid
				client understanding of blockchain requirements. Furthermore, I
				contributed to an <b>open-source</b> tutorial for deploying your first{" "}
				<b>Hyperledger Fabric</b> application.
			</p>
		),
	},
];

const Work = () => {
	return (
		<Container className="prose prose-md">
			<h1>Work</h1>

			{works.map((worksProps, index, { length }) => (
				<Box key={worksProps.company}>
					<WorkBlock {...worksProps} />
					{length - 1 !== index && <Separator className="mx-auto w-1/6" />}
				</Box>
			))}
		</Container>
	);
};

export default Work;
