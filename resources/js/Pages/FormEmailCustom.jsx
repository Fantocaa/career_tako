import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Footer from "@/Components/Shared/Footer";
import NavElse from "@/Components/Shared/Else/NavElse";
import { Link, router, usePage } from "@inertiajs/react";
import Select from "react-select";
import axios from "axios";
import Layout from "@/Layouts/Layout";
import ReCAPTCHA from "react-google-recaptcha";

const FormEmail = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const formRef = useRef(null);

    const { props } = usePage();
    const { md_loker } = props;

    const [provinsiOptions, setProvinsiOptions] = useState([]);
    const [kabupatenOptions, setKabupatenOptions] = useState([]);
    const [kecamatanOptions, setKecamatanOptions] = useState([]);

    const [selectedProvinsi, setSelectedProvinsi] = useState(null);

    const [isProvinsiSelected, setIsProvinsiSelected] = useState(false);
    const [isKabupatenSelected, setIsKabupatenSelected] = useState(false);
    const [isKecamatanSelected, setIsKecamatanSelected] = useState(false);

    const disabledInputClasses =
        "text-DarkTako text-opacity-50 bg-grey bg-opacity-10";

    const [values, setValues] = useState({
        // password: "meong",
        // pekerjaan: md_loker[0].pekerjaan,
        // jenis_pekerjaan: md_loker[0].jenis_pekerjaan,
        // perusahaan: md_loker[0].perusahaan,
        nama: "",
        jenis_kelamin: "",
        agama: "",
        tanggal_lahir: "",
        emails: "",
        provinsi: "",
        kabupaten: "",
        kecamatan: "",
        kodepos: "",
        alamat: "",
        no_telp: "",
        gaji: "",
        file: "",
        promosi: "",
        pendidikan: "",
        instansi: "",
        ipk: "",
        pekerjaanyd: "",
    });

    // const handleChange = (e) => {
    //     const key = e.target.id;
    //     const value = e.target.value;
    //     setValues((values) => ({
    //         ...values,
    //         [key]: value,
    //     }));
    // };

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;

        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const maxSize = 2 * 1024 * 1024; // 2MB in bytes

            if (file.size > maxSize) {
                alert("File with a maximum size of 2MB is allowed");
                e.target.value = null;
                // You can set an error state or display an alert here if needed
                return; // Exit the function to prevent further execution
            }
        }

        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    };

    useEffect(() => {
        // Panggil API untuk mendapatkan daftar provinsi saat komponen dimuat
        fetch("/api/provinsi")
            .then((response) => response.json())
            .then((data) => {
                // Memformat data provinsi menjadi format yang diperlukan oleh react-select
                const formattedOptions = data.map((item) => ({
                    label: item.nama,
                    value: item.kode,
                }));
                setProvinsiOptions(formattedOptions);
            })
            .catch((error) => {
                console.error("Error fetching provinsi data:", error);
            });
    }, []);

    // Fungsi yang dipanggil saat memilih provinsi
    const handleProvinsiChange = (selectedOption) => {
        setIsProvinsiSelected(true); // Setel state menjadi true saat provinsi dipilih
        setSelectedProvinsi(selectedOption); // Simpan nilai provinsi yang dipilih

        values.provinsi = selectedOption.label;
        // Ambil kode provinsi yang dipilih
        const kodeProvinsi = selectedOption.value;

        // Panggil API untuk mendapatkan daftar kabupaten/kota berdasarkan kode provinsi
        fetch(`/api/kabupaten/${kodeProvinsi}`)
            .then((response) => response.json())
            .then((data) => {
                const formattedOptions = data.map((item) => ({
                    label: item.nama,
                    value: item.kode,
                }));
                setKabupatenOptions(formattedOptions);
            })
            .catch((error) => {
                console.error("Error fetching kabupaten/kota data:", error);
            });
    };

    // Fungsi yang dipanggil saat memilih kabupaten/kota
    const handleKabupatenChange = (selectedOption) => {
        setIsKabupatenSelected(true); // Setel state menjadi true saat provinsi dipilih

        // Ambil kode kabupaten/kota yang dipilih
        const kodeKabupaten = selectedOption.value;

        values.kabupaten = selectedOption.label;

        // Ambil kode provinsi yang dipilih
        const kodeProvinsi = selectedProvinsi.value;

        // Panggil API untuk mendapatkan daftar kecamatan berdasarkan kode kabupaten/kota dan kode provinsi
        fetch(`/api/kecamatan/${kodeProvinsi}/${kodeKabupaten}`)
            .then((response) => response.json())
            .then((data) => {
                const formattedOptions = data.map((item) => ({
                    label: item.nama,
                    value: item.kode,
                }));
                setKecamatanOptions(formattedOptions);
            })
            .catch((error) => {
                console.error("Error fetching kecamatan data:", error);
            });
    };

    const handleKecamatanChange = (selectedOption) => {
        setIsKecamatanSelected(true); // Setel state menjadi true saat kecamatan dipilih

        const kodeKecamatan = selectedOption.value;

        values.kecamatan = selectedOption.label;
    };
    var capca = "";
    const onChangeCaptcha = (value) => {
        capca = value;
    };
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        if (capca != "") {
            try {
                const token = document.querySelector(
                    'meta[name="csrf-token"]'
                ).content;

                const formData = new FormData();
                formData.append("_token", token);

                formData.append("nama", values.nama);
                formData.append("jenis_kelamin", values.jenis_kelamin);
                formData.append("tanggal_lahir", values.tanggal_lahir);
                formData.append("agama", values.agama);
                formData.append("emails", values.emails);
                formData.append("no_telp", values.no_telp);
                formData.append("provinsi", values.provinsi);
                formData.append("kabupaten", values.kabupaten);
                formData.append("kecamatan", values.kecamatan);
                formData.append("kodepos", values.kodepos);
                formData.append("alamat", values.alamat);
                formData.append("gaji", values.gaji);
                formData.append("promosi", values.promosi);
                formData.append("pendidikan", values.pendidikan);
                formData.append("instansi", values.instansi);
                formData.append("ipk", values.ipk);
                formData.append("pekerjaanyd", values.pekerjaanyd);

                const file = e.target.fileUpload.files[0];
                formData.append("file", file);

                axios
                    .post("/api/formulir/submit_custom", formData)
                    .then((response) => {
                        setValues({
                            nama: "",
                            jenis_kelamin: "",
                            agama: "",
                            tanggal_lahir: "",
                            emails: "",
                            provinsi: provinsiOptions.label,
                            kabupaten: kabupatenOptions.label,
                            kecamatan: kecamatanOptions.label,
                            kodepos: "",
                            alamat: "",
                            no_telp: "",
                            gaji: "",
                            file: "",
                            promosi: "",
                            pendidikan: "",
                            instansi: "",
                            ipk: "",
                            pekerjaanyd: "",
                        });

                        router.get("/finish");
                    })
                    .catch((error) => {
                        console.error("Error sending data:", error);
                        alert("Terjadi kesalahan saat mengirim data.");
                    })
                    .finally(() => {
                        setIsLoading(false);
                    });
            } catch (error) {
                console.error("Error sending data:", error);
                alert("Terjadi kesalahan saat mengirim data.");
                setIsLoading(false);
            }
        } else {
            setTimeout(() => {
                alert("Terjadi kesalahan saat mengirim data.");
                setIsLoading(false);
            }, 1000);
        }
    }

    return (
        <Layout pageTitle="Formulir | Tako Karier">
            <section className="flex-wrap items-center font-inter w-full bg-BgTako text-DarkTako">
                <NavElse />
                <div className="bg-BgTako py-32 container px-4 md:px-8 lg:px-32 mx-auto">
                    <div className="bg-white mx-auto rounded-lg px-2 md:px-4">
                        <h1 className="font-bold text-xl md:text-2xl  text-center py-8">
                            Registration Form Drop CV
                        </h1>
                        <form
                            onSubmit={onSubmit}
                            ref={formRef}
                            className="items-center space-y-4 w-full p-8 mx-auto"
                            // action="/submit_loker"
                            method="post"
                            encType="multipart/form-data"
                        >
                            {/* Nama */}
                            <div className="w-full pb-4 pt-8">
                                <h1 className="pb-2">
                                    Nama Lengkap
                                    <span className="text-RedTako">*</span>
                                </h1>
                                {/* <input
                                    {...register("nama", { required: true })}
                                    className="w-full border-grey border-opacity-30 p-2 rounded"
                                    placeholder="Masukkan Nama"
                                    value={values.nama}
                                    id="nama"
                                    onChange={handleChange}
                                />
                                {errors.nama && (
                                    <span className="text-RedTako">
                                        Tolong Nama jangan sampai kosong
                                    </span>
                                )} */}
                                <input
                                    {...register("nama", { required: true })}
                                    className="w-full border-grey border-opacity-30 p-2 rounded"
                                    placeholder="Masukkan Nama"
                                    value={values.nama}
                                    id="nama"
                                    onChange={handleChange}
                                    aria-invalid={
                                        errors.nama ? "true" : "false"
                                    }
                                />
                                {/* {errors.nama && (
                                    <span className="text-RedTako">
                                        Tolong Nama jangan sampai kosong
                                    </span>
                                )} */}
                                {errors.nama?.type === "required" && (
                                    <p role="alert">
                                        Tolong Nama jangan sampai kosong
                                    </p>
                                )}
                            </div>
                            <div className="flex gap-4 flex-wrap">
                                {/* Gender */}
                                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pb-4">
                                    <h1 className="pb-2">
                                        Jenis Kelamin
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
                                        <option>
                                            Pilih Jenis Kelamin Anda
                                        </option>
                                        <option value="Laki-Laki">
                                            Laki-Laki
                                        </option>
                                        <option value="Perempuan">
                                            Perempuan
                                        </option>
                                        <option value="Lainnya">Lainnya</option>
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
                                        Agama
                                        <span className="text-RedTako">*</span>
                                    </h1>
                                    <select
                                        {...register("agama", {
                                            required: true,
                                        })}
                                        className="w-full p-2 border-grey border-opacity-30 rounded cursor-pointer"
                                        placeholder="Pilih Program Anda"
                                        value={values.agama}
                                        id="agama"
                                        onChange={handleChange}
                                    >
                                        <option>Pilih Agama Anda</option>
                                        <option value="Islam">Islam</option>
                                        <option value="Kristen">Kristen</option>
                                        <option value="Hindu">Hindu</option>
                                        <option value="Budha">Budha</option>
                                        <option value="Kong Hu Chu">
                                            Kong Hu Chu
                                        </option>
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
                                        Tanggal Lahir
                                        <span className="text-RedTako">*</span>
                                    </h1>
                                    {/* <div className="absolute items-center opacity-75 right-2 bottom-1 scale-75 pointer-events-none ">
                                        <img
                                            src="/images/calendar.svg"
                                            alt=""
                                            className=""
                                        />
                                    </div> */}
                                    <input
                                        {...register("tanggal_lahir", {
                                            required: true,
                                        })}
                                        type="date"
                                        className="w-full p-2 border-grey border-opacity-30 rounded"
                                        value={values.tanggal_lahir}
                                        id="tanggal_lahir"
                                        onChange={handleChange}
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
                                        Email
                                        <span className="text-RedTako">*</span>
                                    </h1>
                                    <input
                                        {...register("emails", {
                                            required: true,
                                        })}
                                        className="w-full p-2 border-grey border-opacity-30 rounded"
                                        placeholder="Masukkan Email Anda"
                                        type="text"
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
                                        No. Telpon
                                        <span className="text-RedTako">*</span>
                                    </h1>
                                    <input
                                        {...register("nomor", {
                                            required: true,
                                        })}
                                        className="w-full p-2 border-grey border-opacity-30 rounded"
                                        placeholder="Masukkan No. Telpon Anda"
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
                            </div>
                            {/* Tempat Lahir*/}
                            <div className="w-full">
                                <>
                                    <div className="block md:flex pb-4">
                                        <div className="w-full md:w-[50%] pb-8 md:pb-4 mr-4 ">
                                            <h2 className="pb-2">
                                                Provinsi Tempat Lahir
                                            </h2>
                                            <Select
                                                options={provinsiOptions}
                                                onChange={handleProvinsiChange}
                                                // value={values.provinsi}
                                                value={provinsiOptions.find(
                                                    (option) =>
                                                        option.label ===
                                                        values.provinsi
                                                )}
                                                id="provinsi"
                                                placeholder="Pilih Provinsi Anda"
                                                styles={{
                                                    control: (base) => ({
                                                        ...base,
                                                        padding: "2px",
                                                    }),
                                                }}
                                            />
                                        </div>
                                        <div className="w-full md:w-[50%] pb-4 md:pb-0">
                                            <h2 className="pb-2">
                                                Kabupaten/Kota Tempat Lahir
                                            </h2>
                                            <Select
                                                options={kabupatenOptions}
                                                onChange={handleKabupatenChange}
                                                // value={values.kabupaten}
                                                value={kabupatenOptions.find(
                                                    (option) =>
                                                        option.label ===
                                                        values.kabupaten
                                                )}
                                                id="kabupaten"
                                                isDisabled={!isProvinsiSelected}
                                                placeholder="Pilih Kabupaten/Kota Anda"
                                                styles={{
                                                    control: (base) => ({
                                                        ...base,
                                                        padding: "2px",
                                                    }),
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="block md:flex ">
                                        <div className="w-full mr-4 pb-8  md:pb-4">
                                            <h2 className="pb-2">
                                                Kecamatan Tempat Lahir
                                            </h2>
                                            <Select
                                                options={kecamatanOptions}
                                                // value={values.kecamatan}
                                                value={kecamatanOptions.find(
                                                    (option) =>
                                                        option.label ===
                                                        values.kecamatan
                                                )}
                                                onChange={handleKecamatanChange}
                                                id="kecamatan"
                                                className="w-full"
                                                isDisabled={
                                                    !isKabupatenSelected
                                                }
                                                placeholder="Pilih Kecamatan Anda"
                                            />
                                        </div>
                                        <div className="w-full pb-4 md:pb-0">
                                            <h2 className="w-full lg:w-[50%] pb-2 mr-4">
                                                Kode Pos Tempat Lahir
                                            </h2>
                                            <input
                                                type="number"
                                                className={`w-full p-2 py-[6px] border-grey border-opacity-10 rounded ${
                                                    !isKecamatanSelected
                                                        ? disabledInputClasses
                                                        : "border-opacity-30"
                                                }`}
                                                value={values.kodepos}
                                                id="kodepos"
                                                onChange={handleChange}
                                                disabled={!isKecamatanSelected}
                                                placeholder="Masukkan Kode Pos Anda"
                                            />
                                        </div>
                                    </div>
                                </>
                            </div>
                            {/* Alamat Tempat Tinggal*/}
                            <div className="w-full pb-4">
                                <h1 className="pb-2">
                                    Alamat Tempat Tinggal
                                    <span className="text-RedTako">*</span>
                                </h1>
                                <input
                                    {...register("alamat", { required: true })}
                                    className="w-full p-2 border-grey border-opacity-30 rounded"
                                    placeholder="Masukkan Alamat Tempat Tinggal Anda"
                                    value={values.alamat}
                                    id="alamat"
                                    onChange={handleChange}
                                />
                                {errors.alamattt && (
                                    <span className="text-RedTako">
                                        Alamat Tempat Tinggal jangan sampai
                                        kosong
                                    </span>
                                )}
                            </div>
                            <div className="flex gap-4 flex-wrap pb-4">
                                {/* Pendidikan Terakhir */}
                                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pb-4 md:pb-0">
                                    <h1 className="pb-2">
                                        Pendidikan Terakhir
                                        <span className="text-RedTako">*</span>
                                    </h1>
                                    <select
                                        {...register("pendidikan", {
                                            required: true,
                                        })}
                                        className="w-full p-2 border-grey border-opacity-30 rounded cursor-pointer"
                                        placeholder="Pilih Pendidikan Terakhir Anda"
                                        value={values.pendidikan}
                                        id="pendidikan"
                                        onChange={handleChange}
                                    >
                                        <option>
                                            Pilih Pendidikan Terakhir Anda
                                        </option>
                                        <option value="SD">SD</option>
                                        <option value="SMP">SMP</option>
                                        <option value="SMA/SMK">SMA/SMK</option>
                                        <option value="D3/D4">D3/D4</option>
                                        <option value="S1">S1</option>
                                        <option value="S2">S2</option>
                                        <option value="S3">S3</option>
                                    </select>
                                    {errors.agama && (
                                        <span className="text-RedTako">
                                            Pendidikan Terakhir harus dipilih
                                        </span>
                                    )}
                                </div>

                                {/* Intansi Pendidikan */}
                                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%]">
                                    <h1 className="pb-2">
                                        Nama Intansi Pendidikan Terakhir
                                        <span className="text-RedTako">*</span>
                                    </h1>
                                    <input
                                        {...register("instansi", {
                                            required: true,
                                        })}
                                        className="w-full p-2 border-grey border-opacity-30 rounded"
                                        placeholder="Masukkan Nama Intansi Pendidikan Terakhir Anda"
                                        type="text"
                                        value={values.instansi}
                                        id="instansi"
                                        onChange={handleChange}
                                    />
                                    {errors.instansi && (
                                        <span className="text-RedTako">
                                            Intansi Pendidikan Terakhir jangan
                                            sampai kosong
                                        </span>
                                    )}
                                </div>

                                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pt-4">
                                    <h1 className="pb-2">
                                        IPK/GPA (Grade Point Average)
                                        <span className="text-RedTako">*</span>
                                    </h1>
                                    <input
                                        {...register("ipk", {
                                            required: true,
                                        })}
                                        className="w-full p-2 border-grey border-opacity-30 rounded"
                                        placeholder="Masukkan Nilai IPK/GPA Anda (Contoh : 3.50)"
                                        type="number"
                                        step=".01"
                                        value={values.ipk}
                                        id="ipk"
                                        onChange={handleChange}
                                    />
                                    {errors.ipk && (
                                        <span className="text-RedTako">
                                            Intansi Pendidikan Terakhir jangan
                                            sampai kosong
                                        </span>
                                    )}
                                </div>
                            </div>
                            {/* Promosi*/}
                            <div className="w-full pb-4">
                                <h1 className="pb-2">
                                    Prommosikan Diri Anda
                                    <span className="text-RedTako">*</span>
                                </h1>
                                <textarea
                                    {...register("promosi", { required: true })}
                                    className="w-full p-2 border-grey border-opacity-30 rounded"
                                    placeholder="Masukkan Promosi"
                                    value={values.promosi}
                                    id="promosi"
                                    onChange={handleChange}
                                    rows={4}
                                />
                                {errors.promosi && (
                                    <span className="text-RedTako">
                                        promosi Tempat Tinggal jangan sampai
                                        kosong
                                    </span>
                                )}
                            </div>
                            <div className="flex gap-4 flex-wrap">
                                {/* Gaji*/}
                                <div className="w-full pb-4 md:w-[48.7%] lg:w-[48.8%] xl:w-[49%]">
                                    <h1 className="pb-2">
                                        Gaji
                                        <span className="text-RedTako">*</span>
                                    </h1>
                                    <input
                                        {...register("gaji", {
                                            required: true,
                                        })}
                                        className="w-full p-2 border-grey border-opacity-30 rounded"
                                        placeholder="Masukkan Ekpektasi gaji anda (Contoh : Rp.5.000.000)"
                                        value={values.gaji}
                                        id="gaji"
                                        onChange={handleChange}
                                    />
                                    {errors.nomor && (
                                        <span className="text-RedTako">
                                            No. Telpon jangan sampai kosong
                                        </span>
                                    )}
                                </div>

                                {/* Pekerjaan yang Diharapkan */}
                                <div className="w-full pb-4 md:w-[48.7%] lg:w-[48.8%] xl:w-[49%]">
                                    <h1 className="pb-2">
                                        Pekerjaan yang Diharapkan
                                        <span className="text-RedTako">*</span>
                                    </h1>
                                    <input
                                        {...register("pekerjaanyd", {
                                            required: true,
                                        })}
                                        className="w-full border-grey border-opacity-30 p-2 rounded"
                                        placeholder="Masukkan Pekerjaan yang Diharapkan"
                                        value={values.pekerjaanyd}
                                        id="pekerjaanyd"
                                        onChange={handleChange}
                                        aria-invalid={
                                            errors.pekerjaanyd
                                                ? "true"
                                                : "false"
                                        }
                                    />
                                    {errors.pekerjaanyd?.type ===
                                        "required" && (
                                        <p role="alert">
                                            Tolong Nama jangan sampai kosong
                                        </p>
                                    )}
                                </div>
                            </div>
                            {/* File PDF*/}
                            <div className="w-full pb-4">
                                <h1 className="pb-2">Upload CV</h1>
                                <div className="w-full">
                                    <input
                                        {...register("fileUpload")} // Gunakan nama yang sesuai
                                        type="file"
                                        accept=".pdf" // Batasi hanya menerima file PDF
                                        className="w-52 border-grey border-opacity-30 rounded"
                                        value={values.file}
                                        id="file"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="text-xs pt-2">
                                    <p>
                                        <span className="text-RedTako">*</span>
                                        Hanya menerima file dalam bentuk PDF.
                                        Max 2mb
                                    </p>
                                    <p>
                                        <span className="text-RedTako">*</span>
                                        Khusus Internship. Upload CV serta Surat
                                        Pengajuan Internship
                                    </p>
                                </div>
                                <div className="pt-8">
                                    <ReCAPTCHA
                                        sitekey="6LfoNxgpAAAAAGhZrxtSO_73hk2nPjPofQkAsmnd"
                                        onChange={onChangeCaptcha}
                                    />
                                </div>
                            </div>
                            {/* Submit */}
                            <div className="w-full bg-BlueTako rounded-xl text-white text-center p-2 hover:bg-BlueTako hover:bg-opacity-90 transition-all">
                                {/* <input
                                    type="submit"
                                    className="w-full p-2 cursor-pointer text-white"
                                    value="Kirim"
                                />
                                <span class="loading loading-spinner">
                                    Loading
                                </span> */}
                                {isLoading ? (
                                    <span className="loading loading-spinner">
                                        Loading
                                    </span>
                                ) : (
                                    <input
                                        type="submit"
                                        className="w-full cursor-pointer text-white"
                                        value="Kirim"
                                    />
                                )}
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </section>
        </Layout>
    );
};

export default FormEmail;
