import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import Axios from "axios";
import { router, usePage } from "@inertiajs/react";

const EditLoker = () => {
    const { quill, quillRef } = useQuill();
    const { route } = usePage(); // Menggunakan usePage untuk mendapatkan informasi route

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [nomor, setNomor] = useState(""); // State untuk menyimpan nomor

    const [values, setValues] = useState({
        password: "meong",
        pekerjaan: "",
        perusahaan: "",
        jenis_pekerjaan: "",
    });

    // function handleChange(e) {
    //     const key = e.target.id;
    //     const value = e.target.value;
    //     setValues((values) => ({
    //         ...values,
    //         [key]: value,
    //     }));
    // }

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;

        // Perbarui values dengan data batas_lamaran
        setValues((values) => ({
            ...values,
            [key]:
                key === "batas_lamaran" ? new Date(value).toISOString() : value,
        }));
    }

    async function sumit(e) {
        e.preventDefault();

        try {
            // Kirim data ke server
            const response = await Axios.post("/form", values);

            // Jika permintaan berhasil, perbarui nomor dengan nomor berikutnya
            setNomor(response.data.id + 1);

            // Bersihkan formulir
            setValues({
                password: "meong",
                pekerjaan: "",
                perusahaan: "",
                jenis_pekerjaan: "",
                batas_lamaran: "", // Reset nilai batas_lamaran
            });

            // Redirect ke halaman lain jika diperlukan
            router.push("/table"); // Ganti dengan halaman yang sesuai
        } catch (error) {
            console.error("Error sending data:", error);
        }
    }
    return (
        <div className="container mx-auto py-8">
            <form onSubmit={sumit}>
                {/* <div>
                    <h1 className="pb-2">Nomor</h1>
                    <input
                        type="text"
                        readOnly
                        value={nomor}
                        className="w-full p-2 border-grey border-opacity-30 rounded"
                    />
                </div> */}
                <div>
                    <h1 className="pb-2">Pekerjaan</h1>
                    <input
                        {...register("pekerjaan", { required: true })}
                        className="w-full p-2 border-grey border-opacity-30 rounded"
                        placeholder="Masukkan NIK Anda"
                        id="pekerjaan"
                        value={values.pekerjaan}
                        onChange={handleChange}
                    />
                    {errors.nik && (
                        <span className="text-RedTako">
                            Email jangan sampai kosong
                        </span>
                    )}
                </div>
                <div className="w-full">
                    <h1 className="pb-2">Perusahaan</h1>
                    <input
                        {...register("perusahaan", { required: true })}
                        className="w-full p-2 border-grey border-opacity-30 rounded"
                        placeholder="Masukkan NIK Anda"
                        id="perusahaan"
                        value={values.perusahaan}
                        onChange={handleChange}
                    />
                    {errors.nik && (
                        <span className="text-RedTako">
                            Email jangan sampai kosong
                        </span>
                    )}
                </div>
                <div className="w-full">
                    <h1 className="pb-2">Jenis Pekerjaan</h1>
                    <input
                        {...register("jenis_pekerjaan", { required: true })}
                        className="w-full p-2 border-grey border-opacity-30 rounded"
                        placeholder="Masukkan NIK Anda"
                        id="jenis_pekerjaan"
                        value={values.jenis_pekerjaan}
                        onChange={handleChange}
                    />
                    {errors.nik && (
                        <span className="text-RedTako">
                            Email jangan sampai kosong
                        </span>
                    )}
                </div>

                <div className="w-full">
                    <h1 className="pb-2">Batas Lamaran</h1>
                    <input
                        type="date" // Gunakan input tanggal
                        {...register("batas_lamaran", { required: true })}
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

                <div style={{ width: 800, height: 300 }}>
                    <div ref={quillRef} />
                </div>
                <div className="pt-16">
                    <button
                        type="submit"
                        className="bg-BlueTako text-white p-4"
                    >
                        Simpan
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditLoker;
