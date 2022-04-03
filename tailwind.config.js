const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
	],
	darkMode: "class",
	plugins: [require("@tailwindcss/forms")],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
			animation: {
				fade: "fade 0.4s ease-in-out",
				slideDown: "slideDown 1s ease-in",
			},
			keyframes: {
				fade: {
					"0%": {
						scale: 0,
						opacity: 0,
					},
					"100%": {
						opacity: 1,
						scale: 1,
					},
				},
				slideDown: {
					"0%": {
						transform: "translateY(-70px)",
						opacity: 0,
					},
					"100%": {
						transform: "translateY(0)",
						opacity: 1,
					},
				},
			},
			spacing: {
				desktop: "50px",
				mobile: "10px",
			},
		},
	},
};
