import { useTranslation } from "react-i18next";

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

    const handleWorkExperienceToggle = (value) => {
        setHasWorkExperience(value);
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
                        // onClick={() => setHasWorkExperience(true)}
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
                        // onClick={() => setHasWorkExperience(false)}
                        onClick={() => handleWorkExperienceToggle(false)}
                    >
                        Saya <span className="font-bold">TIDAK MEMILIKI</span>{" "}
                        Pengalaman Kerja
                    </button>
                </div>
            </div>
            {hasWorkExperience && (
                <div className="flex gap-4 flex-wrap">
                    <h1 className="text-xl font-semibold text-center pt-8">
                        Baik, Jika Anda memiliki Pengalaman Kerja sebelumnya,
                        harap untuk mengisi Formulir berikut :
                    </h1>
                    <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pt-4">
                        <h1 className="pb-2">
                            {t("form.company")}
                            <span className="text-RedTako">*</span>
                        </h1>
                        <input
                            {...register("riwayat_nama_perusahaan", {
                                required: true,
                            })}
                            className="w-full p-2 border-grey border-opacity-30 rounded"
                            placeholder={t("form.company.ph")}
                            value={values.riwayat_nama_perusahaan}
                            id="riwayat_nama_perusahaan"
                            onChange={handleChange}
                        />
                        {errors.riwayat_nama_perusahaan && (
                            <span className="text-RedTako">
                                {t("form.company.required")}
                            </span>
                        )}
                    </div>
                    <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pt-4">
                        <h1 className="pb-2">
                            {t("form.company.address")}
                            <span className="text-RedTako">*</span>
                        </h1>
                        <input
                            {...register("riwayat_alamat_perusahaan", {
                                required: true,
                            })}
                            className="w-full p-2 border-grey border-opacity-30 rounded"
                            placeholder={t("form.company.address.ph")}
                            value={values.riwayat_alamat_perusahaan}
                            id="riwayat_alamat_perusahaan"
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
                                {...register("riwayat_tahun_in", {
                                    required: true,
                                })}
                                className="w-full p-2 border-grey border-opacity-30 rounded"
                                placeholder={t("form.year.1.ph")}
                                type="month"
                                value={values.riwayat_tahun_in}
                                id="riwayat_tahun_in"
                                onChange={handleChange}
                                max={monthString}
                            />
                            {errors.riwayat_tahun_in && (
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
                                {...register("riwayat_tahun_out", {
                                    required: true,
                                })}
                                className="w-full p-2 border-grey border-opacity-30 rounded"
                                placeholder={t("form.year.2.ph")}
                                type="month"
                                value={values.riwayat_tahun_out}
                                id="riwayat_tahun_out"
                                onChange={handleChange}
                                max={monthString}
                            />
                            {errors.riwayat_tahun_out && (
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
                            {...register("riwayat_posisi", {
                                required: true,
                            })}
                            className="w-full p-2 border-grey border-opacity-30 rounded"
                            placeholder={t("form.position.ph")}
                            value={values.riwayat_posisi}
                            id="riwayat_posisi"
                            onChange={handleChange}
                        />
                        {errors.riwayat_posisi && (
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
                            {...register("riwayat_tugas", {
                                required: true,
                            })}
                            className="w-full p-2 border-grey border-opacity-30 rounded h-32"
                            placeholder={t("form.job.ph")}
                            value={values.riwayat_tugas}
                            id="riwayat_tugas"
                            onChange={handleChange}
                        />
                        {errors.riwayat_tugas && (
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
                            {...register("riwayat_berhenti", {
                                required: true,
                            })}
                            className="w-full p-2 border-grey border-opacity-30 rounded"
                            placeholder={t("form.stop.ph")}
                            value={values.riwayat_berhenti}
                            id="riwayat_berhenti"
                            onChange={handleChange}
                        />
                        {errors.riwayat_berhenti && (
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
                            {...register("gaji", {
                                required: true,
                            })}
                            className="w-full p-2 border-grey border-opacity-30 rounded"
                            placeholder={t("form.salary.ph")}
                            value={values.gaji}
                            id="gaji"
                            onChange={handleChange}
                        />
                        {errors.gaji && (
                            <span className="text-RedTako">
                                {t("form.salary.required")}
                            </span>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
