import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function FormEmailJob({
    register,
    errors,
    values,
    handleChange,
    monthString,
    setHasWorkExperience,
    hasWorkExperience,
    setValues,
}) {
    const { t } = useTranslation();
    const [workExperiences, setWorkExperiences] = useState([{ id: 1 }]);
    const [isAdding, setIsAdding] = useState(false);
    const [isRemoving, setIsRemoving] = useState(false);

    const handleWorkExperienceToggle = (value) => {
        setHasWorkExperience(value);
    };

    const addWorkExperience = () => {
        setIsAdding(true);
        setTimeout(() => {
            const newExperience = {
                riwayat_nama_perusahaan: "",
                riwayat_alamat_perusahaan: "",
                riwayat_tahun_in: "",
                riwayat_tahun_out: "",
                riwayat_posisi: "",
                riwayat_tugas: "",
                riwayat_berhenti: "",
                gaji: "",
            };
            setWorkExperiences([...workExperiences, { id: Date.now() }]);
            setValues((values) => ({
                ...values,
                riwayat: [...values.riwayat, newExperience],
            }));
            setIsAdding(false);
        }, 500); // Simulasi delay
    };

    const removeWorkExperience = (id) => {
        if (workExperiences.length > 1) {
            setIsRemoving(true);
            setTimeout(() => {
                setWorkExperiences(
                    workExperiences.filter((exp) => exp.id !== id),
                );
                setIsRemoving(false);
            }, 500); // Simulasi delay
        }
    };

    return (
        <>
            <h1 className="text-2xl font-semibold text-white text-center py-4 rounded-lg bg-BlueTako">
                {t("form.tab.3")}
            </h1>
            <div className="pt-8 pb-4">
                <h1 className="text-xl font-semibold text-center pb-2">
                    {t("job.mail.title")}
                </h1>
                <p className="text-center pb-4">{t("job.mail.subtitle")}</p>

                <div className="md:flex gap-8 items-center my-4 mx-auto justify-center">
                    <button
                        className={`px-4 md:px-8 py-4 md:py-2 rounded-full w-full md:w-fit mb-4 md:mb-0 ${
                            hasWorkExperience
                                ? "bg-BlueTako hover:bg-opacity-90 text-white"
                                : "bg-white hover:bg-opacity-5 text-DarkTako border border-BlueTako hover:bg-BlueTako"
                        }`}
                        type="button"
                        onClick={() => handleWorkExperienceToggle(true)}
                    >
                        {t("job.mail.i")}{" "}
                        <span className="font-bold">{t("job.mail.have")}</span>{" "}
                        {t("job.mail.job")}
                    </button>
                    <button
                        className={`px-4 md:px-8 py-4 md:py-2 rounded-full w-full md:w-fit ${
                            !hasWorkExperience
                                ? "bg-BlueTako hover:bg-opacity-90 text-white"
                                : "bg-white hover:bg-opacity-5 text-DarkTako border border-BlueTako hover:bg-BlueTako"
                        }`}
                        type="button"
                        onClick={() => handleWorkExperienceToggle(false)}
                    >
                        {t("job.mail.i")}{" "}
                        <span className="font-bold">
                            {t("job.mail.donthave")}
                        </span>{" "}
                        {t("job.mail.job")}
                    </button>
                </div>
            </div>
            {hasWorkExperience && (
                <div>
                    <h1 className="text-xl font-semibold text-center pt-8">
                        {/* Baik, Jika Anda memiliki Pengalaman Kerja sebelumnya,
                        harap untuk mengisi Formulir berikut : */}
                        {t("job.mail.havejob")}
                    </h1>
                    {workExperiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className="flex gap-4 flex-wrap border border-DarkTako border-opacity-25 p-8 rounded-xl mt-8"
                        >
                            <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%]">
                                <h1 className="pb-2">
                                    {t("form.company")}
                                    <span className="text-RedTako">*</span>
                                </h1>
                                <input
                                    {...register(
                                        `riwayat[${index}].riwayat_nama_perusahaan`,
                                        {
                                            required: true,
                                        },
                                    )}
                                    className="w-full p-2 border-grey border-opacity-30 rounded"
                                    placeholder={t("form.company.ph")}
                                    value={
                                        values.riwayat?.[index]
                                            ?.riwayat_nama_perusahaan || ""
                                    }
                                    id={`riwayat[${index}].riwayat_nama_perusahaan`}
                                    name={`riwayat[${index}].riwayat_nama_perusahaan`}
                                    onChange={(e) => handleChange(e, index)}
                                />
                                {errors[
                                    `riwayat[${index}].riwayat_nama_perusahaan`
                                ] && (
                                    <span className="text-RedTako">
                                        {t("form.company.required")}
                                    </span>
                                )}
                            </div>
                            <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%]">
                                <h1 className="pb-2">
                                    {t("form.company.address")}
                                    <span className="text-RedTako">*</span>
                                </h1>
                                <input
                                    {...register(
                                        `riwayat[${index}].riwayat_alamat_perusahaan`,
                                        {
                                            required: true,
                                        },
                                    )}
                                    className="w-full p-2 border-grey border-opacity-30 rounded"
                                    placeholder={t("form.company.address.ph")}
                                    value={
                                        values.riwayat?.[index]
                                            ?.riwayat_alamat_perusahaan || ""
                                    }
                                    id={`riwayat[${index}].riwayat_alamat_perusahaan`}
                                    name={`riwayat[${index}].riwayat_alamat_perusahaan`}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pt-4 flex gap-4">
                                <div className="w-full">
                                    <h1 className="pb-2">
                                        {t("form.year.1")}
                                        <span className="text-RedTako">*</span>
                                    </h1>
                                    <input
                                        {...register(
                                            `riwayat[${index}].riwayat_tahun_in`,
                                            {
                                                required: true,
                                            },
                                        )}
                                        className="w-full p-2 border-grey border-opacity-30 rounded"
                                        placeholder={t("form.year.1.ph")}
                                        type="month"
                                        value={
                                            values.riwayat?.[index]
                                                ?.riwayat_tahun_in || ""
                                        }
                                        id={`riwayat[${index}].riwayat_tahun_in`}
                                        name={`riwayat[${index}].riwayat_tahun_in`}
                                        onChange={(e) => handleChange(e, index)}
                                        max={monthString}
                                    />
                                    {errors[`riwayat_tahun_in${exp.id}`] && (
                                        <span className="text-RedTako">
                                            {t("form.year.1.required")}
                                        </span>
                                    )}
                                </div>
                                <div className="w-full">
                                    <h1 className="pb-2">
                                        {t("form.year.2")}
                                        <span className="text-RedTako">*</span>
                                    </h1>
                                    <input
                                        {...register(
                                            `riwayat[${index}].riwayat_tahun_out`,
                                            {
                                                required: true,
                                            },
                                        )}
                                        className="w-full p-2 border-grey border-opacity-30 rounded"
                                        placeholder={t("form.year.2.ph")}
                                        type="month"
                                        value={
                                            values.riwayat?.[index]
                                                ?.riwayat_tahun_out || ""
                                        }
                                        id={`riwayat[${index}].riwayat_tahun_out`}
                                        name={`riwayat[${index}].riwayat_tahun_out`}
                                        onChange={(e) => handleChange(e, index)}
                                        max={monthString}
                                    />
                                    {errors[`riwayat_tahun_out${exp.id}`] && (
                                        <span className="text-RedTako">
                                            {t("form.year.2.required")}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pt-4">
                                <h1 className="pb-2">
                                    {t("form.position")}
                                    <span className="text-RedTako">*</span>
                                </h1>
                                <input
                                    {...register(
                                        `riwayat[${index}].riwayat_posisi`,
                                        {
                                            required: true,
                                        },
                                    )}
                                    className="w-full p-2 border-grey border-opacity-30 rounded"
                                    placeholder={t("form.position.ph")}
                                    value={
                                        values.riwayat?.[index]
                                            ?.riwayat_posisi || ""
                                    }
                                    id={`riwayat[${index}].riwayat_posisi`}
                                    name={`riwayat[${index}].riwayat_posisi`}
                                    onChange={(e) => handleChange(e, index)}
                                />
                                {errors[`riwayat_posisi${exp.id}`] && (
                                    <span className="text-RedTako">
                                        {t("form.position.required")}
                                    </span>
                                )}
                            </div>
                            <div className="w-full pt-4">
                                <h1 className="pb-2">
                                    {t("form.job")}
                                    <span className="text-RedTako">*</span>
                                </h1>
                                <textarea
                                    {...register(
                                        `riwayat[${index}].riwayat_tugas`,
                                        {
                                            required: true,
                                        },
                                    )}
                                    className="w-full p-2 border-grey border-opacity-30 rounded h-32"
                                    placeholder={t("form.job.ph")}
                                    value={
                                        values.riwayat?.[index]
                                            ?.riwayat_tugas || ""
                                    }
                                    id={`riwayat[${index}].riwayat_tugas`}
                                    name={`riwayat[${index}].riwayat_tugas`}
                                    onChange={(e) => handleChange(e, index)}
                                />
                                {errors[`riwayat_tugas${exp.id}`] && (
                                    <span className="text-RedTako">
                                        {t("form.job.required")}
                                    </span>
                                )}
                            </div>
                            <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pt-4">
                                <h1 className="pb-2">
                                    {t("form.stop")}
                                    <span className="text-RedTako">*</span>
                                </h1>
                                <input
                                    {...register(
                                        `riwayat[${index}].riwayat_berhenti`,
                                        {
                                            required: true,
                                        },
                                    )}
                                    className="w-full p-2 border-grey border-opacity-30 rounded"
                                    placeholder={t("form.stop.ph")}
                                    value={
                                        values.riwayat?.[index]
                                            ?.riwayat_berhenti || ""
                                    }
                                    id={`riwayat[${index}].riwayat_berhenti`}
                                    name={`riwayat[${index}].riwayat_berhenti`}
                                    onChange={(e) => handleChange(e, index)}
                                />
                                {errors[`riwayat_berhenti${exp.id}`] && (
                                    <span className="text-RedTako">
                                        {t("form.stop.required")}
                                    </span>
                                )}
                            </div>
                            <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pt-4">
                                <h1 className="pb-2">
                                    {t("form.salary")}
                                    <span className="text-RedTako">*</span>
                                </h1>
                                <input
                                    {...register(`riwayat[${index}].gaji`, {
                                        required: true,
                                    })}
                                    className="w-full p-2 border-grey border-opacity-30 rounded"
                                    placeholder={t("form.salary.ph")}
                                    value={values.riwayat?.[index]?.gaji || ""}
                                    id={`riwayat[${index}].gaji`}
                                    name={`riwayat[${index}].gaji`}
                                    onChange={(e) => handleChange(e, index)}
                                />
                                {errors[`gaji${exp.id}`] && (
                                    <span className="text-RedTako">
                                        {t("form.salary.required")}
                                    </span>
                                )}
                            </div>

                            {workExperiences.length > 1 && (
                                <div className="w-full flex justify-end pt-4">
                                    <button
                                        type="button"
                                        className="bg-RedTako text-white px-4 py-2 rounded-full"
                                        onClick={() =>
                                            removeWorkExperience(exp.id)
                                        }
                                        disabled={isRemoving}
                                    >
                                        {isRemoving
                                            ? "Menghapus..."
                                            : "Hapus Pengalaman Kerja"}
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="w-full flex pt-4">
                        <button
                            type="button"
                            className="bg-GreenTako text-white px-4 py-2 rounded-full"
                            onClick={addWorkExperience}
                            disabled={isAdding}
                        >
                            {isAdding
                                ? "Menambah..."
                                : "Tambah Pengalaman Kerja"}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
