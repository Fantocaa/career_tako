import React from "react";
import { useTranslation } from "react-i18next";

export default function FormEmailStudy({
    register,
    errors,
    values,
    handleChange,
    monthString,
}) {
    const { t } = useTranslation(); // Tambahkan ini
    return (
        <>
            <h1 className="text-2xl font-semibold text-white text-center py-4 rounded-lg bg-BlueTako">
                {t("form.tab.2")}
            </h1>
            <div className="flex gap-4 flex-wrap pt-4">
                {/* Pendidikan Terakhir */}
                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pb-4 md:pb-0">
                    <h1 className="pb-2">
                        {t("form.edu")}
                        <span className="text-RedTako">*</span>
                    </h1>
                    <select
                        {...register("pendidikan", {
                            required: true,
                        })}
                        className="w-full p-2 border-grey border-opacity-30 rounded cursor-pointer"
                        placeholder={t("form.edu.ph")}
                        value={values.pendidikan || ""}
                        id="pendidikan"
                        onChange={handleChange}
                    >
                        <option>{t("form.edu.ph")}</option>
                        <option value="SD">{t("form.edu.sd")}</option>
                        <option value="SMP">{t("form.edu.smp")}</option>
                        <option value="SMA/SMK">{t("form.edu.sma")}</option>
                        <option value="D3/D4">{t("form.edu.d3")}</option>
                        <option value="S1">{t("form.edu.s1")}</option>
                        <option value="S2">{t("form.edu.s2")}</option>
                        <option value="S3">{t("form.edu.s3")}</option>
                    </select>
                    {errors.agama && (
                        <span className="text-RedTako">
                            Pendidikan Terakhir harus dipilih
                        </span>
                    )}
                </div>

                {/* Intansi Pendidikan */}
                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%]">
                    <h1 className="pb-2">
                        {t("form.school")}
                        <span className="text-RedTako">*</span>
                    </h1>
                    <input
                        {...register("instansi", {
                            required: true,
                        })}
                        className="w-full p-2 border-grey border-opacity-30 rounded"
                        placeholder={t("form.school.ph")}
                        type="text"
                        value={values.instansi || ""}
                        id="instansi"
                        onChange={handleChange}
                    />
                    {errors.instansi && (
                        <span className="text-RedTako">
                            Intansi Pendidikan Terakhir jangan sampai kosong
                        </span>
                    )}
                </div>

                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pt-4">
                    <h1 className="pb-2">
                        {t("form.major")}
                        <span className="text-RedTako">*</span>
                    </h1>
                    <input
                        {...register("prodi", {
                            required: true,
                        })}
                        className="w-full p-2 border-grey border-opacity-30 rounded"
                        placeholder={t("form.major.ph")}
                        type="text"
                        value={values.prodi || ""}
                        id="prodi"
                        onChange={handleChange}
                    />
                    {errors.prodi && (
                        <span className="text-RedTako">
                            Jurusan/Program Studi Terakhir jangan sampai kosong
                        </span>
                    )}
                </div>

                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pt-4 flex gap-4">
                    <div className="w-full">
                        <h1 className="pb-2">
                            {t("form.year.1")}
                            <span className="text-RedTako">*</span>
                        </h1>
                        <input
                            {...register("thn_in", {
                                required: true,
                            })}
                            className="w-full p-2 border-grey border-opacity-30 rounded"
                            placeholder={t("form.year.1.ph")}
                            type="month"
                            value={values.thn_in || ""}
                            id="thn_in"
                            onChange={handleChange}
                            max={monthString}
                        />
                        {errors.thn_in && (
                            <span className="text-RedTako">
                                Tahun Masuk jangan sampai kosong
                            </span>
                        )}
                    </div>
                    <div className="w-full pb-8">
                        <h1 className="pb-2">
                            {t("form.year.2")}
                            <span className="text-RedTako">*</span>
                        </h1>
                        <input
                            {...register("thn_out", {
                                required: true,
                            })}
                            className="w-full p-2 border-grey border-opacity-30 rounded"
                            placeholder={t("form.year.2.ph")}
                            type="month"
                            value={values.thn_out || ""}
                            id="thn_out"
                            onChange={handleChange}
                            max={monthString}
                        />
                        {errors.thn_out && (
                            <span className="text-RedTako">
                                Tahun Keluar jangan sampai kosong
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
