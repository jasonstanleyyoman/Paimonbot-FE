module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            keyframes: {
                customBounce: {
                    "0%, 100%": {
                        transform: `translateY(-75%)`,
                        animationTimingFunction: `cubic-bezier(0.8, 0, 1, 1)`,
                    },
                    "50%": {
                        transform: `translateY(0)`,
                        animationTimingFunction: `cubic-bezier(0, 0, 0.2, 1)`,
                    },
                },
            },
            animation: {
                customBounce: "customBounce 1s infinite",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("tailwind-scrollbar")],
};
