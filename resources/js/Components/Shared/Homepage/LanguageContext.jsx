import React, { createContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const defaultLanguage = localStorage.getItem("language") || "id";
    const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

    return (
        <LanguageContext.Provider
            value={{ selectedLanguage, setSelectedLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;
