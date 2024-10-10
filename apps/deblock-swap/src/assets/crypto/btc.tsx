type Props = { size?: number };
const Btc = ({ size = 24 }: Props) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_288_86)">
				<path
					d="M12 24.4634C18.6274 24.4634 24 19.0908 24 12.4634C24 5.83596 18.6274 0.463379 12 0.463379C5.37258 0.463379 0 5.83596 0 12.4634C0 19.0908 5.37258 24.4634 12 24.4634Z"
					fill="#F4B92D"
				/>
				<path
					d="M16.8566 11.3761C16.9998 10.1213 16.1019 9.31854 14.7267 8.8037L15.2337 7.0289L14.1414 6.72456L13.6301 8.49105C13.3437 8.40953 13.0557 8.31518 12.7595 8.23995L13.2655 6.48237L12.1731 6.1781L11.6661 7.9529C11.4272 7.89279 9.45931 7.34056 9.45931 7.34056L9.12772 8.49576C9.12772 8.49576 9.93926 8.70391 9.92336 8.71556C10.3693 8.83833 10.4388 9.13448 10.4182 9.36378L9.03163 14.2297C8.97305 14.3597 8.82727 14.5558 8.51987 14.4741C8.53041 14.492 7.72555 14.252 7.72555 14.252L7.13818 15.4833C7.13818 15.4833 9.08769 16.0309 9.34321 16.1036L8.83012 17.8987L9.9225 18.2031L10.4421 16.3968C10.7385 16.487 11.0295 16.5711 11.315 16.6492L10.7983 18.4453L11.8908 18.7495L12.4025 16.9566C14.0722 17.4473 15.6424 17.1304 16.2529 15.6147C16.6134 14.6966 16.0906 13.4723 15.3648 12.9502C16.0847 12.8078 16.6834 12.3395 16.8566 11.3761ZM14.2302 14.7925C13.605 16.282 11.5637 15.333 10.8241 15.1305L11.484 12.7439C12.2259 12.9477 14.6278 13.3925 14.2302 14.7925ZM14.7186 11.3066C14.1952 12.6491 12.4508 11.8354 11.8353 11.6627L12.4319 9.49578C13.0471 9.67414 14.9813 9.93604 14.7186 11.3066Z"
					fill="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_288_86">
					<rect
						width="24"
						height="24"
						fill="white"
						transform="translate(0 0.463379)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

export { Btc };
