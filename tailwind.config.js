import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                // sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                inter: ["Inter", ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            BlueTako: "#213C90",
            GreenTako: "#008B42",
            RedTako: "#C12127",
            YellowTako: "#FFCC00",
            DarkTako: "#1E1E1E",
            BgTako: "#F0F0F0",
            white: "#FFFFFF",
            grey: "#666666",
        },
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1440px",
            // => @media (min-width: 1536px) { ... }

            "3xl": "1920px",
        },
        keyframes: {
            slideDown: {
                from: { height: "0px" },
                to: { height: "var(--radix-accordion-content-height)" },
            },
            slideUp: {
                from: { height: "var(--radix-accordion-content-height)" },
                to: { height: "0px" },
            },
        },
        animation: {
            slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
            slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        },
    },

    daisyui: {
        themes: [],
    },

    // daisyui: {
    //     themes: "light",
    // },

    plugins: [forms, require("daisyui")],
    // plugins: [forms],
};
