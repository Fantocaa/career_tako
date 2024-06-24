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
            setWorkExperiences([
                ...workExperiences,
                { id: Date.now() }, // Gunakan Date.now() untuk id unik
            ]);
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
                    Apakah Anda Memiliki Pengalaman Pekerjaan Sebelumnya?
                </h1>
                <p className="text-center pb-4">
                    Baik Anda sudah berpengalaman kerja atau baru memulai
                    karier, silakan pilih salah satu opsi di bawah ini.
                </p>

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
                        Saya <span className="font-bold">MEMILIKI</span>{" "}
                        Pengalaman Kerja
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
                        Saya <span className="font-bold">TIDAK MEMILIKI</span>{" "}
                        Pengalaman Kerja
                    </button>
                </div>
            </div>
            {hasWorkExperience && (
                <div>
                    <h1 className="text-xl font-semibold text-center pt-8">
                        Baik, Jika Anda memiliki Pengalaman Kerja sebelumnya,
                        harap untuk mengisi Formulir berikut :
                    </h1>
                    {workExperiences.map((exp) => (
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
                                        `riwayat_nama_perusahaan_${exp.id}`,
                                        {
                                            required: true,
                                        },
                                    )}
                                    className="w-full p-2 border-grey border-opacity-30 rounded"
                                    placeholder={t("form.company.ph")}
                                    value={
                                        values[
                                            `riwayat_nama_perusahaan_${exp.id}`
                                        ]
                                    }
                                    id={`riwayat_nama_perusahaan_${exp.id}`}
                                    onChange={handleChange}
                                />
                                {errors[
                                    `riwayat_nama_perusahaan_${exp.id}`
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
                                        `riwayat_alamat_perusahaan_${exp.id}`,
                                        {
                                            required: true,
                                        },
                                    )}
                                    className="w-full p-2 border-grey border-opacity-30 rounded"
                                    placeholder={t("form.company.address.ph")}
                                    value={
                                        values[
                                            `riwayat_alamat_perusahaan_${exp.id}`
                                        ]
                                    }
                                    id={`riwayat_alamat_perusahaan_${exp.id}`}
                                    onChange={handleChange}
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
                                            `riwayat_tahun_in_${exp.id}`,
                                            {
                                                required: true,
                                            },
                                        )}
                                        className="w-full p-2 border-grey border-opacity-30 rounded"
                                        placeholder={t("form.year.1.ph")}
                                        type="month"
                                        value={
                                            values[`riwayat_tahun_in_${exp.id}`]
                                        }
                                        id={`riwayat_tahun_in_${exp.id}`}
                                        onChange={handleChange}
                                        max={monthString}
                                    />
                                    {errors[`riwayat_tahun_in_${exp.id}`] && (
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
                                            `riwayat_tahun_out_${exp.id}`,
                                            {
                                                required: true,
                                            },
                                        )}
                                        className="w-full p-2 border-grey border-opacity-30 rounded"
                                        placeholder={t("form.year.2.ph")}
                                        type="month"
                                        value={
                                            values[
                                                `riwayat_tahun_out_${exp.id}`
                                            ]
                                        }
                                        id={`riwayat_tahun_out_${exp.id}`}
                                        onChange={handleChange}
                                        max={monthString}
                                    />
                                    {errors[`riwayat_tahun_out_${exp.id}`] && (
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
                                    {...register(`riwayat_posisi_${exp.id}`, {
                                        required: true,
                                    })}
                                    className="w-full p-2 border-grey border-opacity-30 rounded"
                                    placeholder={t("form.position.ph")}
                                    value={values[`riwayat_posisi_${exp.id}`]}
                                    id={`riwayat_posisi_${exp.id}`}
                                    onChange={handleChange}
                                />
                                {errors[`riwayat_posisi_${exp.id}`] && (
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
                                    {...register(`riwayat_tugas_${exp.id}`, {
                                        required: true,
                                    })}
                                    className="w-full p-2 border-grey border-opacity-30 rounded h-32"
                                    placeholder={t("form.job.ph")}
                                    value={values[`riwayat_tugas_${exp.id}`]}
                                    id={`riwayat_tugas_${exp.id}`}
                                    onChange={handleChange}
                                />
                                {errors[`riwayat_tugas_${exp.id}`] && (
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
                                    {...register(`riwayat_berhenti_${exp.id}`, {
                                        required: true,
                                    })}
                                    className="w-full p-2 border-grey border-opacity-30 rounded"
                                    placeholder={t("form.stop.ph")}
                                    value={values[`riwayat_berhenti_${exp.id}`]}
                                    id={`riwayat_berhenti_${exp.id}`}
                                    onChange={handleChange}
                                />
                                {errors[`riwayat_berhenti_${exp.id}`] && (
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
                                    {...register(`gaji_${exp.id}`, {
                                        required: true,
                                    })}
                                    className="w-full p-2 border-grey border-opacity-30 rounded"
                                    placeholder={t("form.salary.ph")}
                                    value={values[`gaji_${exp.id}`]}
                                    id={`gaji_${exp.id}`}
                                    onChange={handleChange}
                                />
                                {errors[`gaji_${exp.id}`] && (
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
