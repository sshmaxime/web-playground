import { Inter as FontSans, Roboto } from "next/font/google";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-roboto",
});

export { fontSans, roboto };
