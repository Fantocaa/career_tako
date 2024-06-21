import React from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";

export default function FormEmailPersonalData({
    register,
    errors,
    values,
    handleChange,
    dateString,
    kabupatenOptions,
    handleKabupatenChange,
}) {
    const { t } = useTranslation(); // Tambahkan ini
    return (
        <>
            <h1 className="text-2xl font-semibold text-white text-center py-4 rounded-lg bg-BlueTako">
                {t("form.tab.1")}
            </h1>
            {/* Nama */}
            <div className="flex gap-4 flex-wrap pt-4">
                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%]">
                    <h1 className="pb-2">
                        {t("form.name")}
                        <span className="text-RedTako">*</span>
                    </h1>
                    <input
                        {...register("nama", {
                            required: true,
                        })}
                        className="w-full p-2 border-grey border-opacity-30 rounded"
                        placeholder={t("form.name.ph")}
                        type="text"
                        value={values.nama}
                        id="nama"
                        onChange={handleChange}
                        aria-invalid={errors.nama ? "true" : "false"}
                    />
                    {errors.nama?.type === "required" && (
                        <p role="alert">Tolong Nama jangan sampai kosong</p>
                    )}
                </div>
                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pb-4">
                    <h1 className="pb-2">
                        {t("form.nik")}
                        <span className="text-RedTako">*</span>
                    </h1>
                    <input
                        {...register("nik", {
                            required: true,
                        })}
                        className="w-full border-grey border-opacity-30 p-2 rounded"
                        placeholder={t("form.nik.ph")}
                        value={values.nik}
                        id="nik"
                        type="number"
                        onChange={handleChange}
                        aria-invalid={errors.nik ? "true" : "false"}
                    />
                    {errors.nik?.type === "required" && (
                        <p role="alert">Tolong Nama jangan sampai kosong</p>
                    )}
                </div>
            </div>
            <div className="flex gap-4 flex-wrap pt-4">
                {/* Gender */}
                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pb-4">
                    <h1 className="pb-2">
                        {t("form.gender")}
                        <span className="text-RedTako">*</span>
                    </h1>
                    <select
                        {...register("jenis_kelamin", {
                            required: true,
                        })}
                        value={values.jenis_kelamin} // Gunakan
                        className="w-full p-2 border-grey border-opacity-30 rounded cursor-pointer"
                        placeholder="Pilih Jenis Kelamin Anda"
                        id="jenis_kelamin"
                        onChange={handleChange}
                    >
                        <option>{t("form.gender.ph.1")}</option>
                        <option value="Laki-Laki">
                            {t("form.gender.ph.2")}
                        </option>
                        <option value="Perempuan">
                            {t("form.gender.ph.3")}
                        </option>
                        {/* <option value="Lainnya">Lainnya</option> */}
                    </select>
                    {errors.gender && (
                        <span className="text-RedTako">
                            Jenis Kelamin harus dipilih
                        </span>
                    )}
                </div>
                {/* Agama */}
                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pb-4 md:pb-0">
                    <h1 className="pb-2">
                        {t("form.agama")}
                        <span className="text-RedTako">*</span>
                    </h1>
                    <select
                        {...register("agama", {
                            required: true,
                        })}
                        className="w-full p-2 border-grey border-opacity-30 rounded cursor-pointer"
                        placeholder={t("form.agama.ph")}
                        value={values.agama}
                        id="agama"
                        onChange={handleChange}
                    >
                        <option>{t("form.agama.ph")}</option>
                        <option value="Islam">Islam</option>
                        <option value="Kristen">Kristen</option>
                        <option value="Katholik">Katholik</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Budha">Budha</option>
                        <option value="Kong Hu Chu">Kong Hu Chu</option>
                    </select>
                    {errors.agama && (
                        <span className="text-RedTako">
                            Program harus dipilih
                        </span>
                    )}
                </div>

                {/* Tanggal Lahir */}
                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] relative">
                    <h1 className="pb-2">
                        {t("form.lahir")}
                        <span className="text-RedTako">*</span>
                    </h1>
                    <input
                        {...register("tanggal_lahir", {
                            required: true,
                        })}
                        type="date"
                        className="w-full p-2 border-grey border-opacity-30 rounded"
                        value={values.tanggal_lahir}
                        id="tanggal_lahir"
                        onChange={handleChange}
                        max={dateString}
                    />
                    {errors.tanggal_lahir && (
                        <span className="text-RedTako">
                            Tanggal Lahir jangan sampai kosong
                        </span>
                    )}
                </div>

                {/* Email */}
                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pt-4 md:pt-0">
                    <h1 className="pb-2">
                        {t("form.email")}
                        <span className="text-RedTako">*</span>
                    </h1>
                    <input
                        {...register("emails", {
                            required: true,
                        })}
                        className="w-full p-2 border-grey border-opacity-30 rounded"
                        placeholder={t("form.email.ph")}
                        type="email"
                        value={values.emails}
                        id="emails"
                        onChange={handleChange}
                    />
                    {errors.emails && (
                        <span className="text-RedTako">
                            Email jangan sampai kosong
                        </span>
                    )}
                </div>

                {/* No Telp*/}
                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] py-4">
                    <h1 className="pb-2">
                        {t("form.phone")}
                        <span className="text-RedTako">*</span>
                    </h1>
                    <input
                        {...register("nomor", {
                            required: true,
                        })}
                        className="w-full p-2 border-grey border-opacity-30 rounded"
                        placeholder={t("form.phone.ph")}
                        value={values.no_telp}
                        id="no_telp"
                        type="number"
                        onChange={handleChange}
                    />
                    {errors.nomor && (
                        <span className="text-RedTako">
                            No. Telpon jangan sampai kosong
                        </span>
                    )}
                </div>
                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] py-4">
                    <h2 className="pb-2">{t("form.kabupaten")}</h2>
                    <Select
                        options={kabupatenOptions}
                        onChange={handleKabupatenChange}
                        value={kabupatenOptions.find(
                            (option) => option.label === values.kabupaten,
                        )}
                        id="kabupaten"
                        placeholder={t("form.kabupaten.ph")}
                        styles={{
                            control: (base) => ({
                                ...base,
                                padding: "2px",
                            }),
                        }}
                    />
                </div>
            </div>
            {/* Alamat Tempat Tinggal*/}
            <div className="w-full pb-8">
                <h1 className="pb-2">
                    {t("form.address")}
                    <span className="text-RedTako">*</span>
                </h1>
                <textarea
                    {...register("alamat", { required: true })}
                    className="w-full p-2 border-grey border-opacity-30 rounded"
                    placeholder={t("form.address.ph")}
                    value={values.alamat}
                    id="alamat"
                    onChange={handleChange}
                />
                {errors.alamattt && (
                    <span className="text-RedTako">
                        Alamat Tempat Tinggal jangan sampai kosong
                    </span>
                )}
            </div>
        </>
    );
}
