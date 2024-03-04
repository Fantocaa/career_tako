import React, { createContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // const defaultLanguage = localStorage.getItem("language") || "id";
    // const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem("language") || "id",
    );

    return (
        <LanguageContext.Provider
            value={{ selectedLanguage, setSelectedLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;
