import { Container } from "@web-playground/ui/system/base/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Music",
};

const Music = () => {
	return (
		<Container className="prose prose-md">
			<h1>Music</h1>

			<p>
				Music lover since my youngest age, from <b>Green Day</b> to <b>Oasis</b>{" "}
				throught <b>G-Eazy</b> without missing <b>Morgan Wallen</b> and{" "}
				<b>Linkin Park</b>. (
				<i>
					It was really hard for me to chose only 5 - You probably can tell that
					I tried my best to make them all fit nicely lol
				</i>
				).
			</p>

			<p>
				I wasn't thinking that my music taste could grow larger but then
				discovered reggaeton in Spain in 2022 and felt in love with.
			</p>

			<p>
				This is how, inspired by <b>reggaeton</b>, <b>rock</b> and{" "}
				<b>electro</b> vibes I've been making songs under the name{" "}
				<b>Ojos Verdes</b>.
			</p>

			<figure>
				<iframe
					title="spotify"
					src="https://open.spotify.com/embed/artist/17iimt6EQxbPUUPRmO4GBi?utm_source=generator"
					width="100%"
					height="152"
					allow="autoplay; clipboard-write; encrypted-music; fullscreen; picture-in-picture"
					loading="lazy"
				/>
				<figcaption>
					<b>Ojos Verdes</b> - Spotify
				</figcaption>
			</figure>
		</Container>
	);
};

export default Music;
