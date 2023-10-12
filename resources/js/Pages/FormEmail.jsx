import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Footer from "@/Components/Shared/Footer";
import emailjs from "@emailjs/browser";
import SelectGender from "@/Components/Form/SelectGender";
import CascadingCity from "@/Components/Form/CascadingCity";
import SelectProgram from "@/Components/Form/SelectProgram";
import SelectReligion from "@/Components/Form/SelectReligion";
import NavElse from "@/Components/Shared/Else/NavElse";
import axios, { Axios } from "axios";

const FormEmail = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const formRef = useRef(null);

    // Buat objek dengan nilai-nilai awal untuk input select
    const initialSelectValues = {
        gender: "", // Atur nilai default sesuai kebutuhan Anda
        program: "", // Atur nilai default sesuai kebutuhan Anda
        agama: "", // Atur nilai default sesuai kebutuhan Anda
    };

    // State untuk menyimpan nilai-nilai input select
    const [selectValues, setSelectValues] = useState(initialSelectValues);

    const onSubmit = (data, event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("nama", data.nama);
        // formData.append("email", data.email);
        formData.append("fileUpload", data.fileUpload[0]); // Gunakan [0] untuk mendapatkan file pertama

        // Juga, tambahkan data lain ke FormData seperti yang diperlukan

        // Kirim FormData ke server menggunakan axios
        axios
            .post("/upload", formData)
            .then((response) => {
                // Tangani respons sukses di sini
                console.log(response.data);
            })
            .catch((error) => {
                // Tangani kesalahan di sini
                console.error(error);
            });
    };

    return (
        <section className="flex-wrap items-center font-inter w-full bg-BgTako text-DarkTako">
            <NavElse />
            <div className="bg-BgTako px-32 py-32 ">
                <div className="bg-white mx-auto rounded-lg px-4">
                    <h1 className="font-bold text-2xl text-center py-8">
                        Registration Form
                    </h1>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        ref={formRef}
                        className="items-center space-y-4 w-full px-4 mx-auto pb-8 "
                    >
                        {/* Nama */}
                        <div className="w-full">
                            <h1 className="pb-2">
                                Nama Lengkap
                                <span className="text-RedTako">*</span>
                            </h1>
                            <input
                                {...register("nama", { required: true })}
                                className="w-full border-grey border-opacity-30 p-2 rounded"
                                placeholder="Masukkan Nama"
                            />
                            {errors.nama && (
                                <span className="text-RedTako">
                                    Tolong Nama jangan sampai kosong
                                </span>
                            )}
                        </div>

                        <div className="flex gap-4">
                            {/* Gender */}
                            <div className="w-1/2">
                                <h1 className="pb-2">
                                    Jenis Kelamin
                                    <span className="text-RedTako">*</span>
                                </h1>
                                {/* <SelectGender /> */}
                                <select
                                    {...register("gender", { required: true })}
                                    // value={gender}
                                    // onChange={handleGenderChange}
                                    value={selectValues.gender} // Gunakan nilai dari state
                                    onChange={(e) => {
                                        setSelectValues({
                                            ...selectValues,
                                            gender: e.target.value,
                                        });
                                    }}
                                    className="w-full p-[6px] border-grey border-opacity-30 rounded cursor-pointer"
                                    placeholder="Pilih Jenis Kelamin Anda"
                                >
                                    <option value="Laki-Laki">Laki-Laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                    <option value="Lainnya">Lainnya</option>
                                </select>
                                {errors.gender && (
                                    <span className="text-RedTako">
                                        Jenis Kelamin harus dipilih
                                    </span>
                                )}
                            </div>

                            {/* Program */}
                            <div className="w-1/2">
                                <h1 className="pb-2">
                                    Program
                                    <span className="text-RedTako">*</span>
                                </h1>
                                {/* <SelectProgram /> */}
                                <select
                                    {...register("program", { required: true })}
                                    // value={gender}
                                    // onChange={handleGenderChange}
                                    value={selectValues.program} // Gunakan nilai dari state
                                    onChange={(e) => {
                                        setSelectValues({
                                            ...selectValues,
                                            program: e.target.value,
                                        });
                                    }}
                                    className="w-full p-[6px] border-grey border-opacity-30 rounded cursor-pointer"
                                    placeholder="Pilih Program Anda"
                                >
                                    <option value="Internship">
                                        Internship
                                    </option>
                                    <option value="Profesional">
                                        Profesional
                                    </option>
                                    {/* <option value="Lainnya">Lainnya</option> */}
                                </select>
                                {errors.program && (
                                    <span className="text-RedTako">
                                        Program harus dipilih
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            {/* Agama */}
                            <div className="w-full">
                                <h1 className="pb-2">
                                    Agama<span className="text-RedTako">*</span>
                                </h1>
                                {/* <SelectReligion /> */}
                                <select
                                    {...register("agama", { required: true })}
                                    // value={gender}
                                    // onChange={handleGenderChange}
                                    value={selectValues.agama} // Gunakan nilai dari state
                                    onChange={(e) => {
                                        setSelectValues({
                                            ...selectValues,
                                            agama: e.target.value,
                                        });
                                    }}
                                    className="w-full p-[6px] border-grey border-opacity-30 rounded cursor-pointer"
                                    placeholder="Pilih Program Anda"
                                >
                                    <option value="Islam">Islam</option>
                                    <option value="Kristen">Kristen</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Budha">Budha</option>
                                    <option value="Kong Hu Chu">
                                        Kong Hu Chu
                                    </option>
                                    {/* <option value="Lainnya">Lainnya</option> */}
                                </select>
                                {errors.agama && (
                                    <span className="text-RedTako">
                                        Program harus dipilih
                                    </span>
                                )}
                            </div>

                            {/* Tanggal Lahir */}
                            <div className="w-full">
                                <h1 className="pb-2">
                                    Tanggal Lahir
                                    <span className="text-RedTako">*</span>
                                </h1>
                                <input
                                    {...register("tanggal_lahir", {
                                        required: true,
                                    })}
                                    type="date"
                                    className="w-full p-2 border-grey border-opacity-30 rounded"
                                />
                                {errors.tanggal_lahir && (
                                    <span className="text-RedTako">
                                        Tanggal Lahir jangan sampai kosong
                                    </span>
                                )}
                            </div>
                        </div>
                        {/* Email */}
                        <div className="w-full">
                            <h1 className="pb-2">
                                Email<span className="text-RedTako">*</span>
                            </h1>
                            <input
                                {...register("email", { required: true })}
                                className="w-full p-2 border-grey border-opacity-30 rounded"
                                placeholder="Masukkan Email Anda"
                            />
                            {errors.email && (
                                <span className="text-RedTako">
                                    Email jangan sampai kosong
                                </span>
                            )}
                        </div>

                        {/* Tempat Lahir*/}
                        <div className="w-full">
                            <h1 className="pb-4">
                                Tempat Lahir
                                <span className="text-RedTako">*</span>
                            </h1>
                            <CascadingCity />

                            {/* <div className="flex  gap-4">
                                <div className="w-full">
                                    <h1 className="pb-2">
                                        Provinsi
                                        <span className="text-RedTako">*</span>
                                    </h1>
                                    <input
                                        {...register("provinsi", {
                                            required: true,
                                        })}
                                        className="w-full p-2 border-grey border-opacity-30 rounded"
                                        placeholder="Masukkan Provinsi Tempat Lahir Anda"
                                    />
                                    {errors.provinsi && (
                                        <span className="text-RedTako">
                                            Provinsi jangan sampai kosong
                                        </span>
                                    )}
                                </div>
                                <div className="w-full">
                                    <h1 className="pb-2">
                                        Kabupaten
                                        <span className="text-RedTako">*</span>
                                    </h1>
                                    <input
                                        {...register("kabupaten", {
                                            required: true,
                                        })}
                                        className="w-full p-2 border-grey border-opacity-30 rounded"
                                        placeholder="Masukkan Kabupaten Tempat Lahir Anda"
                                    />
                                    {errors.kabupaten && (
                                        <span className="text-RedTako">
                                            Kabupaten jangan sampai kosong
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-full">
                                    <h1 className="pb-2">
                                        Kecamatan
                                        <span className="text-RedTako">*</span>
                                    </h1>
                                    <input
                                        {...register("kecamatan", {
                                            required: true,
                                        })}
                                        className="w-full p-2 border-grey border-opacity-30 rounded"
                                        placeholder="Masukkan Kecamatan Tempat Lahir Anda"
                                    />
                                    {errors.kecamatan && (
                                        <span className="text-RedTako">
                                            Kecamatan jangan sampai kosong
                                        </span>
                                    )}
                                </div>
                                <div className="w-full">
                                    <h1 className="pb-4">
                                        Kode pos
                                        <span className="text-RedTako">*</span>
                                    </h1>
                                    <input
                                        {...register("kodepos", {
                                            required: true,
                                        })}
                                        type="number"
                                        className="w-full p-2 border-grey border-opacity-30 rounded"
                                        placeholder="Masukkan Kode Pos Tempat Lahir Anda"
                                    />
                                    {errors.kodepos && (
                                        <span className="text-RedTako">
                                            Kode Pos jangan sampai kosong
                                        </span>
                                    )}
                                </div>
                            </div> */}

                            {/* <input
                        {...register("tempatlahir", { required: true })}
                        className="w-full p-2 border-grey border-opacity-30 rounded"
                        placeholder="Masukkan Tempat Lahir Anda"
                    />
                    {errors.tempatlahir && (
                        <span className="text-RedTako">
                            Tempat Lahir jangan sampai kosong
                        </span>
                    )} */}
                        </div>

                        {/* Alamat Tempat Tinggal*/}
                        <div className="w-full">
                            <h1 className="pb-2">
                                Alamat Tempat Tinggal
                                <span className="text-RedTako">*</span>
                            </h1>
                            <input
                                {...register("alamattt", { required: true })}
                                className="w-full p-2 border-grey border-opacity-30 rounded"
                                placeholder="Masukkan Alamat Tempat Tinggal Anda"
                            />
                            {errors.alamattt && (
                                <span className="text-RedTako">
                                    Alamat Tempat Tinggal jangan sampai kosong
                                </span>
                            )}
                        </div>

                        {/* No Telp*/}
                        <div className="w-full">
                            <h1 className="pb-2">
                                No. Telpon
                                <span className="text-RedTako">*</span>
                            </h1>
                            <input
                                {...register("nomor", { required: true })}
                                className="w-full p-2 border-grey border-opacity-30 rounded"
                                placeholder="Masukkan No. Telpon Anda"
                            />
                            {errors.nomor && (
                                <span className="text-RedTako">
                                    No. Telpon jangan sampai kosong
                                </span>
                            )}
                        </div>

                        {/* Gaji*/}
                        <div className="w-full">
                            <h1 className="pb-2">
                                Gaji<span className="text-RedTako">*</span>
                            </h1>
                            <input
                                {...register("gaji", { required: true })}
                                className="w-full p-2 border-grey border-opacity-30 rounded"
                                placeholder="Masukkan Ekpektasi gaji anda (Contoh : Rp.5.000.000)"
                            />
                            {errors.nomor && (
                                <span className="text-RedTako">
                                    No. Telpon jangan sampai kosong
                                </span>
                            )}
                        </div>

                        {/* File PDF*/}
                        <div className="w-full pb-4">
                            <h1 className="pb-2">Upload CV</h1>
                            <input
                                {...register("fileUpload")} // Gunakan nama yang sesuai
                                type="file"
                                accept=".pdf" // Batasi hanya menerima file PDF
                                className="w-full border-grey border-opacity-30 rounded"
                            />
                            <div className="text-xs pt-2">
                                <p>
                                    <span className="text-RedTako">*</span>Hanya
                                    menerima file dalam bentuk PDF. Max 2mb
                                </p>
                                <p>
                                    <span className="text-RedTako">*</span>
                                    Khusus Internship. Upload CV serta Surat
                                    Pengajuan Internship
                                </p>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="w-full bg-BlueTako rounded-xl">
                            <input
                                type="submit"
                                className="w-full p-2 cursor-pointer text-white"
                                value="Kirim"
                            />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default FormEmail;
