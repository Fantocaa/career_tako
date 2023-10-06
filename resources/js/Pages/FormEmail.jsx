import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Navbar from "@/Components/Shared/Homepage/Navbar";
import Footer from "@/Components/Shared/Footer";
import emailjs from "@emailjs/browser";
import SelectGender from "@/Components/Form/SelectGender";
import CascadingCity from "@/Components/Form/CascadingCity";
import SelectProgram from "@/Components/Form/SelectProgram";
import SelectReligion from "@/Components/Form/SelectReligion";
import NavElse from "@/Components/Shared/Else/NavElse";

const FormEmail = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const formRef = useRef(null);

    // Mengirim email
    const sendEmail = (data) => {
        emailjs
            .sendForm(
                "service_fygc2pp",
                "template_42e2fzw",
                formRef.current,
                "YT979FkI0RUOwL9zL"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    formRef.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    formRef.current.reset();
                }
            );
    };

    // Menangani submit formulir
    const onSubmit = (data, event) => {
        event.preventDefault();
        // const uploadedFile = event.target.files[0];
        // Anda dapat menambahkan validasi formulir di sini jika diperlukan
        // Misalnya, memeriksa apakah data yang diperlukan telah diisi
        if (data.nama && data.email) {
            sendEmail(data); // Jika formulir valid, kirim email
        } else {
            // Menampilkan pesan kesalahan jika formulir tidak valid
            console.log("Gagal Ges");
        }
    };

    return (
        <section className="flex-wrap items-center font-inter w-full bg-BgTako">
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

                        {/* Gender */}
                        <div className="w-full">
                            <h1 className="pb-2">
                                Jenis Kelamin
                                <span className="text-RedTako">*</span>
                            </h1>
                            <SelectGender />
                            {/* <select
                        {...register("gender")}
                        className="w-full p-[6px] border-grey border-opacity-30 rounded cursor-pointer"
                    >
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">other</option>
                    </select> */}
                        </div>

                        {/* Program */}
                        <div className="w-full">
                            <h1 className="pb-2">
                                Program<span className="text-RedTako">*</span>
                            </h1>
                            <SelectProgram />
                            {/* <select
                        {...register("gender")}
                        className="w-full p-[6px] border-grey border-opacity-30 rounded cursor-pointer"
                    >
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">other</option>
                    </select> */}
                        </div>

                        {/* Agama */}
                        <div className="w-full">
                            <h1 className="pb-2">
                                Agama<span className="text-RedTako">*</span>
                            </h1>
                            <SelectReligion />
                            {/* <select
                        {...register("gender")}
                        className="w-full p-[6px] border-grey border-opacity-30 rounded cursor-pointer"
                    >
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">other</option>
                    </select> */}
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

                        {/* NIK */}
                        {/* <div className="w-full">
                    <h1 className="pb-2">NIK</h1>
                    <input
                        {...register("nik", { required: true })}
                        className="w-full p-2 border-grey border-opacity-30 rounded"
                        placeholder="Masukkan NIK Anda"
                    />
                    {errors.nik && (
                        <span className="text-RedTako">
                            Email jangan sampai kosong
                        </span>
                    )}
                </div> */}

                        {/* Tempat Lahir*/}
                        <div className="w-full">
                            <h1 className="pb-4">
                                Tempat Lahir
                                <span className="text-RedTako">*</span>
                            </h1>
                            <CascadingCity />

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

                        {/* Alamat */}
                        {/* <div className="w-full">
                    <h1 className="pb-2">Alamat (Sesuai KTP)</h1>
                    <input
                        {...register("alamat", { required: true })}
                        className="w-full p-2 border-grey border-opacity-30 rounded"
                        placeholder="Masukkan Alamat Anda"
                    />
                    {errors.alamat && (
                        <span className="text-RedTako">
                            Alamat jangan sampai kosong
                        </span>
                    )}
                </div> */}

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
