import "./bootstrap";
import "../css/app.css";
import "./style.css";
import React, { useState, useEffect, useContext } from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import LanguageContext from "./Components/Shared/Homepage/LanguageContext";
import { useTranslation } from "react-i18next";

const appName = import.meta.env.VITE_APP_NAME || "Karir Tako";

const AppWrapper = ({ children, ...props }) => {
    const defaultLanguage = localStorage.getItem("language") || "id";
    const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

    return (
        <LanguageContext.Provider
            value={{ selectedLanguage, setSelectedLanguage }}
        >
            {React.cloneElement(children, props)}
        </LanguageContext.Provider>
    );
};

// const AppWrapper = ({ children, ...props }) => {
//     const defaultLanguage = localStorage.getItem("language") || "id";
//     const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
//     const { i18n } = useTranslation();

//     // Update language in context
//     useEffect(() => {
//         i18n.changeLanguage(selectedLanguage);
//     }, [selectedLanguage, i18n]);

//     // Update the lang attribute on the HTML element
//     useEffect(() => {
//         document.documentElement.lang = selectedLanguage;
//     }, [selectedLanguage]);

//     return (
//         <LanguageContext.Provider
//             value={{ selectedLanguage, setSelectedLanguage }}
//         >
//             {React.cloneElement(children, props)}
//         </LanguageContext.Provider>
//     );
// };

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx"),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        // root.render(<App {...props} />);
        root.render(
            <AppWrapper>
                <App {...props} />
            </AppWrapper>,
        );
    },
    progress: {
        color: "#4B5563",
    },
});
