import React from "react";
import { useForm } from "react-hook-form";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useState } from "react";
import { router, usePage } from "@inertiajs/react";

const EditLoker = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { quill, quillRef } = useQuill();

    // React.useEffect(() => {
    //     if (quill) {
    //         quill.clipboard.dangerouslyPasteHTML(
    //             "<h1>React Hook for Quill!</h1>"
    //         );
    //     }
    // }, [quill]);

    console.log(quill); // undefined > Quill Object
    console.log(quillRef);

    const [values, setValues] = useState({
        password: "meong",
        pekerjaan: "",
        perusahaan: "",
        jenis_pekerjaan: "",
        // tempat_tinggal: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function sumit(e) {
        e.preventDefault();
        router.post("/form", values);
    }
    return (
        <div className="container mx-auto py-8">
            <form onSubmit={sumit}>
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
