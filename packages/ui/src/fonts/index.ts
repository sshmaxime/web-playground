import { Inter, Roboto } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-roboto",
});

export { inter, roboto };
