import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Navbar from "@/Components/Shared/Homepage/Navbar";
import Footer from "@/Components/Shared/Footer";
import emailjs from "@emailjs/browser";

const FormEmailBackup = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const NamaRef = useRef(null);

    const onSubmit = (data) => console.log(data);

    return (
        <section className="flex-wrap items-center font-inter w-full">
            <Navbar />
            <h1 className="font-bold text-2xl text-center pb-8 pt-8">
                Registration Form
            </h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                // ref={formRef}
                className="flex-wrap items-center space-y-4 w-1/2 mx-auto"
            >
                {/* Nama */}
                <div className="">
                    <input
                        {...register("Nama", { required: true })}
                        className="w-full p-2 border rounded"
                        placeholder="Masukkan Nama"
                    />
                    {errors.Nama && (
                        <span className="text-RedTako">
                            Tolong Nama jangan sampai kosong
                        </span>
                    )}
                </div>
                {/* Gender */}
                <div className="w-full">
                    <select
                        {...register("gender")}
                        className="w-full p-2 border rounded"
                    >
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                </div>
                {/* Email */}
                <div className="w-full">
                    <input
                        {...register("Email", { required: true })}
                        className="w-full p-2 border rounded"
                        placeholder="Masukkan Email Anda"
                    />
                    {errors.Email && (
                        <span className="text-RedTako">
                            Email jangan sampai kosong
                        </span>
                    )}
                </div>
                <div className="w-full bg-BlueTako ">
                    <input
                        type="submit"
                        className="w-full p-2 rounded cursor-pointer text-white"
                        value="Kirim"
                    />
                </div>
            </form>
            <Footer />
        </section>
    );
};

export default FormEmailBackup;
