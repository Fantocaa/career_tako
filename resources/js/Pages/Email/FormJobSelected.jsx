import React from "react";
import { useTranslation } from "react-i18next";

export default function FormJobSelected({
    register,
    values,
    filteredFormData,
}) {
    const { t } = useTranslation();

    // Jika filteredFormData tidak kosong, akses elemen pertama dari array
    const pekerjaan =
        filteredFormData.length > 0 ? filteredFormData[0].pekerjaan : "";

    return (
        <>
            <div className="flex gap-4 flex-wrap">
                {/* Pekerjaan */}
                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%]">
                    <h1 className="pb-2">{t("form.selected.work")}</h1>
                    <input
                        {...register("pekerjaan", {
                            required: true,
                        })}
                        className="w-full border-grey border-opacity-30 p-2 rounded text-DarkTako text-opacity-50 bg-grey bg-opacity-10"
                        disabled
                        value={pekerjaan || ""}
                        id="pekerjaan"
                    />
                </div>

                {/* Program */}
                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pb-4">
                    <h1 className="pb-2">{t("form.selected.program")}</h1>
                    <input
                        {...register("jenis_pekerjaan", {
                            required: true,
                        })}
                        className="w-full border-grey border-opacity-30 p-2 rounded text-DarkTako text-opacity-50 bg-grey bg-opacity-10"
                        disabled
                        value={values.jenis_pekerjaan || ""}
                        id="program"
                    />
                </div>
            </div>
        </>
    );
}
