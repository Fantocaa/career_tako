import React, { useRef, useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import Footer from "@/Components/Shared/Footer";
import NavElse from "@/Components/Shared/Else/NavElse";
import { Link, router, usePage } from "@inertiajs/react";
import Select from "react-select";
import axios from "axios";
import Layout from "@/Layouts/Layout";
import ReCAPTCHA from "react-google-recaptcha";
import LanguageContext from "@/Components/Shared/Homepage/LanguageContext";
import he from "he";
import { useTranslation } from "react-i18next";

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

    const [riwayatPekerjaan, setRiwayatPekerjaan] = useState([{}]);

    const disabledInputClasses =
        "text-DarkTako text-opacity-50 bg-grey bg-opacity-10";

    const [values, setValues] = useState({
        // password: "meong",
        pekerjaan: md_loker[0].pekerjaan,
        jenis_pekerjaan: md_loker[0].jenis_pekerjaan,
        // perusahaan: md_loker[0].perusahaan,
        nama: "",
        nik: "",
        jenis_kelamin: "",
        agama: "",
        tanggal_lahir: "",
        emails: "",
        // provinsi: "",
        kabupaten: "",
        // kecamatan: "",
        // kodepos: "",
        alamat: "",
        no_telp: "",
        gaji: "",
        file: "",
        promosi: "",
        pendidikan: "",
        prodi: "",
        thn_in: "",
        thn_out: "",
        instansi: "",
        riwayat_nama_perusahaan: "",
        riwayat_alamat_perusahaan: "",
        riwayat_tahun_in: "",
        riwayat_tahun_out: "",
        riwayat_posisi: "",
        riwayat_tugas: "",
        riwayat_berhenti: "",
        // ipk: "",
    });

    const handleChange = (e, index) => {
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

        // const updatedRiwayat = [...riwayatPekerjaan];
        // updatedRiwayat[index][e.target.name] = e.target.value;
        // setRiwayatPekerjaan(updatedRiwayat);

        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    };

    const handleAddRiwayat = () => {
        setRiwayatPekerjaan([...riwayatPekerjaan, {}]);
    };

    useEffect(() => {
        // Panggil API untuk mendapatkan daftar kabupaten/kota saat komponen dimuat
        fetch("/api/kabupaten")
            .then((response) => response.json())
            .then((data) => {
                // Memformat data kabupaten/kota menjadi format yang diperlukan oleh react-select
                const formattedOptions = data.map((item) => ({
                    label: item.nama,
                    value: item.kode,
                }));
                setKabupatenOptions(formattedOptions);
            })
            .catch((error) => {
                console.error("Error fetching kabupaten/kota data:", error);
            });
    }, []);

    // Fungsi yang dipanggil saat memilih kabupaten/kota
    const handleKabupatenChange = (selectedOption) => {
        setIsKabupatenSelected(true); // Setel state menjadi true saat kabupaten/kota dipilih

        // Ambil kode kabupaten/kota yang dipilih
        const kodeKabupaten = selectedOption.value;

        values.kabupaten = selectedOption.label;
    };

    var capca = "";
    const onChangeCaptcha = (value) => {
        capca = value;
    };
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        // console.log(capca);
        if (capca != "") {
            try {
                const token = document.querySelector(
                    'meta[name="csrf-token"]',
                ).content; // Mengambil token CSRF dari elemen <meta>

                const formData = new FormData();
                formData.append("_token", token); // Menambahkan token CSRF ke FormData

                formData.append("pekerjaan", values.pekerjaan);
                formData.append("jenis_pekerjaan", values.jenis_pekerjaan);
                // formData.append("perusahaan", values.perusahaan);
                formData.append("nama", values.nama);
                formData.append("nik", values.nik);
                formData.append("jenis_kelamin", values.jenis_kelamin);
                formData.append("tanggal_lahir", values.tanggal_lahir);
                formData.append("agama", values.agama);
                formData.append("emails", values.emails);
                formData.append("no_telp", values.no_telp);
                // formData.append("provinsi", values.provinsi);
                formData.append("kabupaten", values.kabupaten);
                // formData.append("kecamatan", values.kecamatan);
                // formData.append("kodepos", values.kodepos);
                formData.append("alamat", values.alamat);
                formData.append("gaji", values.gaji);
                // formData.append("promosi", values.promosi);
                formData.append("pendidikan", values.pendidikan);
                formData.append("prodi", values.prodi);
                formData.append("thn_in", values.thn_in);
                formData.append("thn_out", values.thn_out);
                formData.append("instansi", values.instansi);
                formData.append(
                    "riwayat_nama_perusahaan",
                    values.riwayat_nama_perusahaan,
                );
                formData.append(
                    "riwayat_alamat_perusahaan",
                    values.riwayat_alamat_perusahaan,
                );
                formData.append("riwayat_tahun_in", values.riwayat_tahun_in);
                formData.append("riwayat_tahun_out", values.riwayat_tahun_out);
                formData.append("riwayat_posisi", values.riwayat_posisi);
                formData.append("riwayat_tugas", values.riwayat_tugas);
                formData.append("riwayat_berhenti", values.riwayat_berhenti);
                // formData.append("ipk", values.ipk);

                const file = e.target.fileUpload.files[0];
                formData.append("file", file);

                axios
                    .post("/api/formulir/submit", formData)
                    .then((response) => {
                        // Berhasil
                        // Membersihkan formulir jika berhasil
                        setValues({
                            // password: "meong",
                            pekerjaan: md_loker.pekerjaan,
                            jenis_pekerjaan: md_loker.jenis_pekerjaan,
                            // perusahaan: md_loker[0].perusahaan,
                            nama: "",
                            nik: "",
                            jenis_kelamin: "",
                            agama: "",
                            tanggal_lahir: "",
                            emails: "",
                            // provinsi: provinsiOptions.label,
                            kabupaten: kabupatenOptions.label,
                            // kecamatan: kecamatanOptions.label,
                            // kodepos: "",
                            alamat: "",
                            no_telp: "",
                            gaji: "",
                            file: "",
                            promosi: "",
                            pendidikan: "",
                            prodi: "",
                            thn_in: "",
                            thn_out: "",
                            instansi: "",
                            riwayat_nama_perusahaan: "",
                            riwayat_alamat_perusahaan: "",
                            riwayat_tahun_in: "",
                            riwayat_tahun_out: "",
                            riwayat_posisi: "",
                            riwayat_tugas: "",
                            riwayat_berhenti: "",
                        });

                        // console.log("Sukses:", response.data);
                        router.get("/finish");
                    })
                    .catch((error) => {
                        console.error("Error sending data:", error);
                        alert("Terjadi kesalahan saat mengirim data.");
                    });
            } catch (error) {
                console.error("Error sending data:", error);
                alert("Terjadi kesalahan saat mengirim data.");
            }
        } else {
            setTimeout(() => {
                // Setelah operasi selesai, tampilkan kembali tombol dan sembunyikan elemen loading
                alert("Terjadi kesalahan saat mengirim data.");
                setIsLoading(false);
            }, 1000); // Ganti 2000 dengan waktu yang sesuai dengan kebutuhan Anda
        }
    }

    const { selectedLanguage } = useContext(LanguageContext);

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage !== selectedLanguage) {
            localStorage.setItem("language", selectedLanguage);
        }
        translatePekerjaan(selectedLanguage || storedLanguage || "id");
    }, [selectedLanguage]);

    const translatePekerjaan = async (language) => {
        if (language === "id") {
            // If the language is Indonesian, revert to the original text
            setValues((prevValues) => ({
                ...prevValues,
                pekerjaan: md_loker[0].pekerjaan,
            }));
        } else if (
            localStorage.getItem(`translation-${md_loker[0].pekerjaan}`)
        ) {
            // Load the translated text from localStorage if it exists
            const translatedText = localStorage.getItem(
                `translation-${md_loker[0].pekerjaan}`,
            );
            setValues((prevValues) => ({
                ...prevValues,
                pekerjaan: translatedText,
            }));
        } else {
            try {
                const response = await axios.post("/api/translate", {
                    text: md_loker[0].pekerjaan,
                    target: language,
                });
                const translatedText = he.decode(response.data);
                // Save the translated text to localStorage
                localStorage.setItem(
                    `translation-${md_loker[0].pekerjaan}`,
                    translatedText,
                );
                setValues((prevValues) => ({
                    ...prevValues,
                    pekerjaan: translatedText,
                }));
            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage !== selectedLanguage) {
            localStorage.setItem("language", selectedLanguage);
        }
        translatePekerjaan(selectedLanguage || storedLanguage || "id");
    }, [selectedLanguage]);

    const { t } = useTranslation(); // Tambahkan ini

    return (
        <Layout pageTitle="Formulir | Tako Karier">
            <section className="flex-wrap items-center font-inter w-full bg-BgTako text-DarkTako">
                <NavElse />
                <div className="bg-BgTako py-32 container max-w-[1440px] px-4 md:px-8 lg:px-32 mx-auto">
                    <div className="bg-white mx-auto rounded-lg px-2 md:px-4 lg:pt-4">
                        <h1 className="font-semibold text-xl md:text-2xl text-center py-4 mb-10 bg-BlueTako text-white rounded-lg">
                            {t("form.title")}
                        </h1>
                        <form
                            onSubmit={onSubmit}
                            ref={formRef}
                            className="items-center space-y-4 w-full px-4 mx-auto pb-8"
                            // action="/submit_loker"
                            method="post"
                            encType="multipart/form-data"
                        >
                            <div className="flex gap-4 flex-wrap">
                                {/* Pekerjaan */}
                                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%]">
                                    <h1 className="pb-2">
                                        Pekerjaan yang dipilih
                                    </h1>
                                    <input
                                        {...register("pekerjaan", {
                                            required: true,
                                        })}
                                        className="w-full border-grey border-opacity-30 p-2 rounded text-DarkTako text-opacity-50 bg-grey bg-opacity-10 "
                                        disabled
                                        value={values.pekerjaan}
                                        id="pekerjaan"
                                    />
                                </div>

                                {/* Program */}
                                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%]">
                                    <h1 className="pb-2">
                                        Program yang dipilih
                                    </h1>
                                    <input
                                        {...register("jenis_pekerjaan", {
                                            required: true,
                                        })}
                                        className="w-full border-grey border-opacity-30 p-2 rounded text-DarkTako text-opacity-50 bg-grey bg-opacity-10"
                                        disabled
                                        value={values.jenis_pekerjaan}
                                        id="program"
                                    />
                                </div>

                                {/* Perusahaan */}
                                {/* <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%]">
                                    <h1 className="pb-2">Perusahaan</h1>
                                    <input
                                        {...register("perusahaan", {
                                            required: true,
                                        })}
                                        className="w-full border-grey border-opacity-30 p-2 rounded text-DarkTako text-opacity-50 bg-grey bg-opacity-10"
                                        disabled
                                        value={values.perusahaan}
                                        id="perusahaan"
                                    />
                                </div> */}
                            </div>
                            <div className="py-4 md:py-8">
                                <div className="border-t w-full border-DarkTako border-opacity-25" />
                            </div>
                            <h1 className="text-2xl font-bold text-center py-2 pb-8 rounded-lg">
                                Data Pribadi
                            </h1>
                            {/* Nama */}
                            <div className="flex gap-4 flex-wrap">
                                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pb-4">
                                    <h1 className="pb-2">
                                        Nama Lengkap
                                        <span className="text-RedTako">*</span>
                                    </h1>
                                    <input
                                        {...register("nama", {
                                            required: true,
                                        })}
                                        className="w-full border-grey border-opacity-30 p-2 rounded"
                                        placeholder="Masukkan Nama"
                                        value={values.nama}
                                        id="nama"
                                        onChange={handleChange}
                                        aria-invalid={
                                            errors.nama ? "true" : "false"
                                        }
                                    />
                                    {errors.nama?.type === "required" && (
                                        <p role="alert">
                                            Tolong Nama jangan sampai kosong
                                        </p>
                                    )}
                                </div>
                                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pb-4">
                                    <h1 className="pb-2">
                                        NIK
                                        <span className="text-RedTako">*</span>
                                    </h1>
                                    <input
                                        {...register("nik", {
                                            required: true,
                                        })}
                                        className="w-full border-grey border-opacity-30 p-2 rounded"
                                        placeholder="Masukkan NIK"
                                        value={values.nik}
                                        id="nik"
                                        type="number"
                                        onChange={handleChange}
                                        aria-invalid={
                                            errors.nik ? "true" : "false"
                                        }
                                    />
                                    {errors.nik?.type === "required" && (
                                        <p role="alert">
                                            Tolong Nama jangan sampai kosong
                                        </p>
                                    )}
                                </div>
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
                                        <option value="Katholik">
                                            Katholik
                                        </option>
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
                                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] py-4">
                                    <h2 className="pb-2">
                                        Kabupaten/Kota Tempat Lahir
                                    </h2>
                                    <Select
                                        options={kabupatenOptions}
                                        onChange={handleKabupatenChange}
                                        value={kabupatenOptions.find(
                                            (option) =>
                                                option.label ===
                                                values.kabupaten,
                                        )}
                                        id="kabupaten"
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
                            {/* Tempat Lahir*/}

                            {/* Alamat Tempat Tinggal*/}
                            <div className="w-full">
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

                            <div className="py-4 md:py-8">
                                <div className="border-t w-full border-DarkTako border-opacity-25" />
                            </div>
                            <h1 className="text-2xl font-bold text-center py-2 pb-8">
                                Riwayat Pendidikan
                            </h1>
                            <div className="flex gap-4 flex-wrap">
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
                                        <option value="S1">
                                            Strata - 1 (S1)
                                        </option>
                                        <option value="S2">
                                            Strata - 2 (S2)
                                        </option>
                                        <option value="S3">
                                            Strata - 3 (S3)
                                        </option>
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
                                        Nama Instansi Pendidikan Terakhir
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
                                        Jurusan/Program Studi
                                        <span className="text-RedTako">*</span>
                                    </h1>
                                    <input
                                        {...register("prodi", {
                                            required: true,
                                        })}
                                        className="w-full p-2 border-grey border-opacity-30 rounded"
                                        placeholder="Masukkan Jurusan/Program Studi"
                                        type="text"
                                        value={values.prodi}
                                        id="prodi"
                                        onChange={handleChange}
                                    />
                                    {errors.prodi && (
                                        <span className="text-RedTako">
                                            Jurusan/Program Studi Terakhir
                                            jangan sampai kosong
                                        </span>
                                    )}
                                </div>

                                <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pt-4 flex gap-4">
                                    <div className="w-full">
                                        <h1 className="pb-2">
                                            Tahun Masuk
                                            <span className="text-RedTako">
                                                *
                                            </span>
                                        </h1>
                                        <input
                                            {...register("thn_in", {
                                                required: true,
                                            })}
                                            className="w-full p-2 border-grey border-opacity-30 rounded"
                                            placeholder="Masukkan Tahun Masuk"
                                            type="number"
                                            value={values.thn_in}
                                            id="thn_in"
                                            onChange={handleChange}
                                        />
                                        {errors.thn_in && (
                                            <span className="text-RedTako">
                                                Tahun Masuk jangan sampai kosong
                                            </span>
                                        )}
                                    </div>
                                    <div className="w-full">
                                        <h1 className="pb-2">
                                            Tahun Keluar
                                            <span className="text-RedTako">
                                                *
                                            </span>
                                        </h1>
                                        <input
                                            {...register("thn_out", {
                                                required: true,
                                            })}
                                            className="w-full p-2 border-grey border-opacity-30 rounded"
                                            placeholder="Masukkan Tahun Keluar"
                                            type="number"
                                            value={values.thn_out}
                                            id="thn_out"
                                            onChange={handleChange}
                                        />
                                        {errors.thn_out && (
                                            <span className="text-RedTako">
                                                Tahun Keluar jangan sampai
                                                kosong
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="py-4 md:py-8">
                                <div className="border-t w-full border-DarkTako border-opacity-25" />
                            </div>
                            {/* Promosi*/}
                            {/* Gaji*/}
                            <h1 className="text-2xl font-bold text-center py-2 pb-8">
                                Riwayat Pekerjaan
                            </h1>
                            <div>
                                {riwayatPekerjaan.map((riwayat, index) => (
                                    <div key={index}>
                                        <div className="flex gap-4 flex-wrap">
                                            <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pt-4">
                                                <h1 className="pb-2">
                                                    Nama Perusahaan
                                                    <span className="text-RedTako">
                                                        *
                                                    </span>
                                                </h1>
                                                <input
                                                    {...register(
                                                        "riwayat_nama_perusahaan",
                                                        {
                                                            required: true,
                                                        },
                                                    )}
                                                    className="w-full p-2 border-grey border-opacity-30 rounded"
                                                    placeholder="Masukkan Nama Perusahaan Sebelumnya"
                                                    value={
                                                        values.riwayat_nama_perusahaan
                                                    }
                                                    id="riwayat_nama_perusahaan"
                                                    onChange={handleChange}
                                                />
                                                {errors.nomor && (
                                                    <span className="text-RedTako">
                                                        Nama Perusahaan jangan
                                                        sampai kosong
                                                    </span>
                                                )}
                                            </div>
                                            <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pt-4">
                                                <h1 className="pb-2">
                                                    Alamat Perusahaan
                                                    <span className="text-RedTako">
                                                        *
                                                    </span>
                                                </h1>
                                                <input
                                                    {...register(
                                                        "riwayat_alamat_perusahaan",
                                                        {
                                                            required: true,
                                                        },
                                                    )}
                                                    className="w-full p-2 border-grey border-opacity-30 rounded"
                                                    placeholder="Masukkan Alamat Perusahaan Sebelumnya"
                                                    value={
                                                        values.riwayat_alamat_perusahaan
                                                    }
                                                    id="riwayat_alamat_perusahaan"
                                                    onChange={handleChange}
                                                />
                                                {errors.nomor && (
                                                    <span className="text-RedTako">
                                                        No. Telpon jangan sampai
                                                        kosong
                                                    </span>
                                                )}
                                            </div>
                                            <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pt-4 flex gap-4">
                                                <div className="w-full">
                                                    <h1 className="pb-2">
                                                        Tahun Masuk
                                                        <span className="text-RedTako">
                                                            *
                                                        </span>
                                                    </h1>
                                                    <input
                                                        {...register(
                                                            "riwayat_tahun_in",
                                                            {
                                                                required: true,
                                                            },
                                                        )}
                                                        className="w-full p-2 border-grey border-opacity-30 rounded"
                                                        placeholder="Masukkan Tahun Masuk"
                                                        type="number"
                                                        value={
                                                            values.riwayat_tahun_in
                                                        }
                                                        id="riwayat_tahun_in"
                                                        onChange={handleChange}
                                                    />
                                                    {errors.riwayat_tahun_in && (
                                                        <span className="text-RedTako">
                                                            Tahun Masuk jangan
                                                            sampai kosong
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="w-full">
                                                    <h1 className="pb-2">
                                                        Tahun Keluar
                                                        <span className="text-RedTako">
                                                            *
                                                        </span>
                                                    </h1>
                                                    <input
                                                        {...register(
                                                            "riwayat_tahun_out",
                                                            {
                                                                required: true,
                                                            },
                                                        )}
                                                        className="w-full p-2 border-grey border-opacity-30 rounded"
                                                        placeholder="Masukkan Tahun Keluar"
                                                        type="number"
                                                        value={
                                                            values.riwayat_tahun_out
                                                        }
                                                        id="riwayat_tahun_out"
                                                        onChange={handleChange}
                                                    />
                                                    {errors.riwayat_tahun_out && (
                                                        <span className="text-RedTako">
                                                            Tahun Keluar jangan
                                                            sampai kosong
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pt-4">
                                                <h1 className="pb-2">
                                                    Posisi/Jabatan
                                                    <span className="text-RedTako">
                                                        *
                                                    </span>
                                                </h1>
                                                <input
                                                    {...register(
                                                        "riwayat_posisi",
                                                        {
                                                            required: true,
                                                        },
                                                    )}
                                                    className="w-full p-2 border-grey border-opacity-30 rounded"
                                                    placeholder="Masukkan Posisi/Jabatan Sebelumnya"
                                                    value={
                                                        values.riwayat_posisi
                                                    }
                                                    id="riwayat_posisi"
                                                    onChange={handleChange}
                                                />
                                                {errors.riwayat_posisi && (
                                                    <span className="text-RedTako">
                                                        No. Telpon jangan sampai
                                                        kosong
                                                    </span>
                                                )}
                                            </div>
                                            <div className="w-full pt-4">
                                                <h1 className="pb-2">
                                                    Uraian Tugas
                                                    <span className="text-RedTako">
                                                        *
                                                    </span>
                                                </h1>
                                                <textarea
                                                    {...register(
                                                        "riwayat_tugas",
                                                        {
                                                            required: true,
                                                        },
                                                    )}
                                                    className="w-full p-2 border-grey border-opacity-30 rounded h-32"
                                                    placeholder="Uraikan Tugas Pekerjaan Anda"
                                                    value={values.riwayat_tugas}
                                                    id="riwayat_tugas"
                                                    onChange={handleChange}
                                                />
                                                {errors.riwayat_tugas && (
                                                    <span className="text-RedTako">
                                                        Uraian Tugas jangan
                                                        sampai kosong
                                                    </span>
                                                )}
                                            </div>
                                            <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pt-4">
                                                <h1 className="pb-2">
                                                    Alasan Berhenti
                                                    <span className="text-RedTako">
                                                        *
                                                    </span>
                                                </h1>
                                                <input
                                                    {...register(
                                                        "riwayat_berhenti",
                                                        {
                                                            required: true,
                                                        },
                                                    )}
                                                    className="w-full p-2 border-grey border-opacity-30 rounded"
                                                    placeholder="Masukkan Alasan Mengapa Anda Berhenti"
                                                    value={
                                                        values.riwayat_berhenti
                                                    }
                                                    id="riwayat_berhenti"
                                                    onChange={handleChange}
                                                />
                                                {errors.nomor && (
                                                    <span className="text-RedTako">
                                                        No. Telpon jangan sampai
                                                        kosong
                                                    </span>
                                                )}
                                            </div>
                                            <div className="w-full md:w-[48.7%] lg:w-[48.8%] xl:w-[49%] pt-4">
                                                <h1 className="pb-2">
                                                    Gaji Terakhir
                                                    <span className="text-RedTako">
                                                        *
                                                    </span>
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
                                                        No. Telpon jangan sampai
                                                        kosong
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* <button
                                    type="button"
                                    onClick={handleAddRiwayat}
                                >
                                    Tambah Riwayat Pekerjaan
                                </button> */}
                            </div>

                            {/* File PDF*/}
                            <div className="w-full pb-4 pt-16 flex justify-end gap-56 flex-row-reverse">
                                <div>
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
                                            <span className="text-RedTako">
                                                *
                                            </span>
                                            Hanya menerima file dalam bentuk
                                            PDF. Max 2mb
                                        </p>
                                        <p>
                                            <span className="text-RedTako">
                                                *
                                            </span>
                                            Khusus Internship. Upload CV serta
                                            Surat Pengajuan Internship dalam 1
                                            file PDF
                                        </p>
                                    </div>
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
