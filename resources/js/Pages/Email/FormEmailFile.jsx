import React from "react";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";

export default function FormEmailFile({
    register,
    errors,
    values,
    handleChange,
    onChangeCaptcha,
}) {
    const { t } = useTranslation(); // Tambahkan ini
    return (
        <>
            <div className="w-full pb-4 lg:pt-4 lg:flex justify-end lg:gap-40 xl:gap-56 lg:flex-row-reverse">
                <div>
                    <h1 className="pb-2">
                        {t("form.file")}
                        <span className="text-RedTako">*</span>
                    </h1>
                    <div className="w-full">
                        <input
                            {...register("fileUpload")} // Gunakan nama yang sesuai
                            type="file"
                            accept=".pdf" // Batasi hanya menerima file PDF
                            className="w-52 border-grey border-opacity-30 rounded"
                            value={values.file}
                            id="file"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="text-xs pt-2">
                        <p>
                            <span className="text-RedTako">*</span>
                            {t("form.file.note.1")}
                        </p>
                        <p>
                            <span className="text-RedTako">*</span>
                            {t("form.file.note.2")}
                        </p>
                    </div>
                </div>
                <div className="pt-8">
                    <ReCAPTCHA
                        sitekey="6LfoNxgpAAAAAGhZrxtSO_73hk2nPjPofQkAsmnd"
                        onChange={onChangeCaptcha}
                    />
                </div>
            </div>
        </>
    );
}
