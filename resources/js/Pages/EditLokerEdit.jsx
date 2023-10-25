import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
// import { useParams } from "react-router-dom"; // Anda mungkin perlu mengganti ini dengan cara yang sesuai dengan aplikasi Anda
// import { usePage } from "@inertiajs/react";
import { Link, router, usePage } from "@inertiajs/react";
import QuillEditor from "@/Components/Dashboard/QuillEditor";

const EditLokerEdit = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { props } = usePage();
    const { md_loker } = props;
    // const { id } = useParams(); // Mengambil parameter ID dari URL
    // const [mdLoker, setMdLoker] = useState(null);

    const [values, setValues] = useState({
        password: "meong",
        id: md_loker.id,
        pekerjaan: md_loker.pekerjaan,
        perusahaan: md_loker.perusahaan,
        jenis_pekerjaan: md_loker.jenis_pekerjaan,
        batas_lamaran: md_loker.batas_lamaran, // Inisialisasi properti batas_lamaran
        isi_konten: md_loker.deskripsi,
        deskripsi: md_loker.isi_konten,
    });

    // Buat objek dengan nilai-nilai awal untuk input select
    const initialSelectValues = {
        jenis_pekerjaan: "", // Atur nilai default sesuai kebutuhan Anda
    };

    // State untuk menyimpan nilai-nilai input select
    const [selectValues, setSelectValues] = useState(initialSelectValues);

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    };

    const handleQuillChange = (content) => {
        setValues((values) => ({
            ...values,
            deskripsi: content,
        }));

        let formattedValue = value; // Default, gunakan nilai apa adanya

        if (key === "batas_lamaran") {
            // Jika ini adalah input tanggal "batas_lamaran", konversi format
            const date = new Date(value);
            formattedValue = date.toISOString().split("T")[0]; // Ambil bagian tanggal (yyyy-MM-dd)
        }

        // Perbarui values dengan data yang sudah diformat
        setValues((values) => ({
            ...values,
            [key]: formattedValue,
        }));
    };
    async function sumit(e) {
        e.preventDefault();

        try {
            // Kirim data ke server
            const response = await Axios.post("/table/update_loker", values);
            // const response = await Axios.post("/form");

            // Jika permintaan berhasil, perbarui nomor dengan nomor berikutnya
            // setNomor(response.data.id + 1);

            // Bersihkan formulir
            setValues({
                password: "meong",
                pekerjaan: "",
                perusahaan: "",
                jenis_pekerjaan: "",
                batas_lamaran: "", // Reset nilai batas_lamaran
                isi_konten: "",
            });

            // Redirect ke halaman lain jika diperlukan
            // router.push("/table"); // Ganti dengan halaman yang sesuai
            router.get("/dashboard/lowongan_pekerjaan");
        } catch (error) {
            // console.error("Error sending data:", error);
            if (error.response) {
                // Jika respons error dari server
                console.error("Error sending data:", error.response.data);

                // Tampilkan pesan kesalahan ke pengguna
                alert(error.response.data.message);
            } else {
                // Jika kesalahan lainnya
                console.error("Error sending data:", error);

                // Tampilkan pesan kesalahan ke pengguna
                alert("Terjadi kesalahan saat mengirim data.");
            }
        }
    }
    return (
        <div className="bg-BgTako py-16 text-DarkTako font-inter">
            <div className="container mx-auto bg-white p-8 rounded-lg">
                <div className="flex items-center gap-4">
                    <img src="/images/plus.svg" className="scale-100" alt="" />
                    <h1 className="font-bold text-2xl">Tambah Baru</h1>
                </div>
                <form onSubmit={sumit} className=" pt-8">
                    <div className="flex gap-8">
                        <div className="w-full">
                            <h1 className="pb-2">Pekerjaan</h1>
                            <input
                                {...register("pekerjaan", { required: true })}
                                className="w-full p-2 border-grey border-opacity-30 rounded"
                                placeholder="Masukkan Pekerjaan"
                                id="pekerjaan"
                                value={values.pekerjaan}
                                onChange={handleChange}
                            />
                            {/* {errors.pekerjaan && (
                                <span className="text-RedTako">
                                    {errors.pekerjaan.message}
                                </span>
                            )} */}
                        </div>
                        <div className="w-full">
                            <h1 className="pb-2">Perusahaan</h1>
                            <input
                                // {...register("pekerjaan", { required: true })}
                                className="w-full p-2 border-grey border-opacity-30 rounded"
                                placeholder="Meong"
                                id="perusahaan"
                                value={values.perusahaan}
                                onChange={handleChange}
                            />
                            {/* {errors.nik && (
                        <span className="text-RedTako">
                            Pekerjaan jangan sampai kosong
                        </span>
                    )} */}
                        </div>
                    </div>
                    <div className="flex gap-8 py-4">
                        <div className="w-full">
                            <h1 className="pb-2">Jenis Pekerjaan</h1>
                            <select
                                // {...register("program", { required: true })}
                                // value={gender}
                                // onChange={handleGenderChange}
                                value={values.jenis_pekerjaan} // Gunakan nilai dari state
                                // onChange={(e) => {
                                //     setSelectValues({
                                //         ...selectValues,
                                //         program: e.target.value,
                                //     });
                                // }}
                                onChange={(e) => {
                                    const selectedValue = e.target.value;
                                    setValues((prevValues) => ({
                                        ...prevValues,
                                        jenis_pekerjaan: selectedValue, // Update nilai jenis_pekerjaan dalam state values
                                    }));
                                }}
                                className="w-full p-2 border-grey border-opacity-30 rounded cursor-pointer"
                                placeholder="Pilih Program Anda"
                            >
                                <option value="internship">Internship</option>
                                <option value="profesional">Profesional</option>
                            </select>
                            {errors.jenis_pekerjaan && (
                                <span className="text-RedTako">
                                    Pekerjaan jangan sampai kosong
                                </span>
                            )}
                        </div>

                        <div className="w-full relative">
                            <h1 className="pb-2">Batas Lamaran</h1>
                            <div className="absolute items-center opacity-75 right-2 bottom-1 scale-75 pointer-events-none">
                                <img src="/images/calendar.svg" alt="" />
                            </div>
                            <input
                                type="date" // Gunakan input tanggal
                                // {...register("batas_lamaran", { required: true })}
                                className="w-full p-2 border-grey border-opacity-30 rounded"
                                id="batas_lamaran"
                                value={values.batas_lamaran}
                                onChange={handleChange}
                            />
                            {errors.batas_lamaran && (
                                <span className="text-RedTako">
                                    Batas Lamaran tidak boleh kosong
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="w-full">
                        <h1 className="pb-2">Deskripsi</h1>
                        <input
                            // {...register("isi_konten", { required: true })}
                            className="w-full p-2 border-grey border-opacity-30 rounded"
                            placeholder="Masukkan Deskripsi Anda"
                            id="isi_konten"
                            value={values.isi_konten}
                            onChange={handleChange}
                        />
                        {errors.isi_konten && (
                            <span className="text-RedTako">
                                Deskripsi jangan sampai kosong
                            </span>
                        )}
                    </div>

                    <div className="w-full pt-4">
                        <h1 className="pb-2">Isi Konten</h1>
                        <QuillEditor
                            value={values.deskripsi}
                            onChange={handleQuillChange}
                        />
                        {errors.deskripsi && (
                            <span className="text-RedTako">
                                Isi Konten jangan sampai kosong
                            </span>
                        )}
                    </div>

                    <div className="pt-8 flex gap-4">
                        <button
                            type="submit"
                            className="bg-BlueTako text-white py-2 px-4 rounded-lg"
                        >
                            Simpan
                        </button>

                        <button
                            type="submit"
                            className="bg-RedTako text-white py-2 px-4 rounded-lg"
                        >
                            <Link href="/dashboard/lowongan_pekerjaan">
                                Batal
                            </Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditLokerEdit;
