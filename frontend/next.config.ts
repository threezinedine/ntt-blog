import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	webpack: (config) => {
		// Enable polling based on env variable being set
		if (process.env.NEXT_WEBPACK_USEPOLLING) {
			config.watchOptions = {
				poll: 500,
				aggregateTimeout: 300,
			};
		}
		return config;
	},
};

export default nextConfig;
