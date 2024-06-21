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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormEmailJob from "./Email/FormEmailJob";
import FormEmailStudy from "./Email/FormEmailStudy";
import FormEmailPersonalData from "./Email/FormEmailPersonalData";
import FormEmailFile from "./Email/FormEmailFile";
import FormJobSelected from "./Email/FormJobSelected";

const schema = yup.object().shape({
    nama: yup.string().required("Tolong Nama jangan sampai kosong"),
    // kabupaten: yup.string().required("Kabupaten is required"),
    // tambahkan lebih banyak validasi sesuai kebutuhan Anda
});

const FormEmail = () => {
    const {
        register,
        handleSubmit,
        control,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const formRef = useRef(null);

    const { props } = usePage();
    // const { md_loker } = props;

    const [provinsiOptions, setProvinsiOptions] = useState([]);
    const [kabupatenOptions, setKabupatenOptions] = useState([]);
    const [kecamatanOptions, setKecamatanOptions] = useState([]);

    const [selectedProvinsi, setSelectedProvinsi] = useState(null);

    const [isProvinsiSelected, setIsProvinsiSelected] = useState(false);
    const [isKabupatenSelected, setIsKabupatenSelected] = useState(false);
    const [isKecamatanSelected, setIsKecamatanSelected] = useState(false);

    const [riwayatPekerjaan, setRiwayatPekerjaan] = useState([{}]);

    const [hasWorkExperience, setHasWorkExperience] = useState(false);

    const disabledInputClasses =
        "text-DarkTako text-opacity-50 bg-grey bg-opacity-10";

    const [values, setValues] = useState({
        // password: "meong",
        // pekerjaan: md_loker[0].pekerjaan,
        // jenis_pekerjaan: md_loker[0].jenis_pekerjaan,
        // perusahaan: md_loker[0].perusahaan,
        nama: "",
        nik: "",
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
        pekerjaanyd: "",
    });

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

    const handleKabupatenChange = (selectedOption) => {
        setIsKabupatenSelected(true); // Setel state menjadi true saat kabupaten/kota dipilih

        // Ambil kode kabupaten/kota yang dipilih
        const kodeKabupaten = selectedOption.value;

        values.kabupaten = selectedOption.label;
    };

    let capca = "";
    const onChangeCaptcha = (value) => {
        capca = value;
    };

    const [isLoading, setIsLoading] = useState(false);

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    }

    axios.defaults.headers.common["X-CSRF-TOKEN"] = getCookie("XSRF-TOKEN");

    async function onSubmit(e, capca) {
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

                // formData.append("pekerjaan", values.pekerjaan);
                // formData.append("jenis_pekerjaan", values.jenis_pekerjaan);
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

                // formData.append("promosi", values.promosi);
                formData.append("pendidikan", values.pendidikan);
                formData.append("prodi", values.prodi);
                formData.append("thn_in", values.thn_in);
                formData.append("thn_out", values.thn_out);
                formData.append("instansi", values.instansi);
                // Tambahkan data pengalaman kerja hanya jika hasWorkExperience bernilai true
                if (hasWorkExperience) {
                    formData.append(
                        "riwayat_nama_perusahaan",
                        values.riwayat_nama_perusahaan,
                    );
                    formData.append(
                        "riwayat_alamat_perusahaan",
                        values.riwayat_alamat_perusahaan,
                    );
                    formData.append(
                        "riwayat_tahun_in",
                        values.riwayat_tahun_in,
                    );
                    formData.append(
                        "riwayat_tahun_out",
                        values.riwayat_tahun_out,
                    );
                    formData.append("riwayat_posisi", values.riwayat_posisi);
                    formData.append("riwayat_tugas", values.riwayat_tugas);
                    formData.append(
                        "riwayat_berhenti",
                        values.riwayat_berhenti,
                    );
                    formData.append("gaji", values.gaji);
                }
                formData.append("pekerjaanyd", values.pekerjaanyd);
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
                            // pekerjaan: md_loker.pekerjaan,
                            // jenis_pekerjaan: md_loker.jenis_pekerjaan,
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
                            // promosi: "",
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
                            pekerjaanyd: "",
                        });

                        // console.log("Sukses:", response.data);
                        router.get("/finish");
                    })
                    .catch((error) => {
                        console.error("Error sending data:", error);
                        if (error.response) {
                            setTimeout(() => {
                                // The request was made and the server responded with a status code
                                // that falls out of the range of 2xx
                                console.log(error.response.data);
                                console.log(error.response.status);
                                console.log(error.response.headers);
                                alert(error.response.data.message); // Tampilkan pesan error dari backend
                                setIsLoading(false);
                            }, 1000); // Ganti 2000 dengan waktu yang sesuai dengan kebutuhan Anda
                        } else if (error.request) {
                            // The request was made but no response was received
                            console.log(error.request);
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log("Error", error.message);
                        }
                    });
            } catch (error) {
                console.error("Error sending data:", error);
                alert("2");
            }
        } else {
            setTimeout(() => {
                // Setelah operasi selesai, tampilkan kembali tombol dan sembunyikan elemen loading
                alert("3");
                setIsLoading(false);
            }, 1000); // Ganti 2000 dengan waktu yang sesuai dengan kebutuhan Anda
        }
    }

    const { selectedLanguage } = useContext(LanguageContext);
    const { t } = useTranslation();

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage !== selectedLanguage) {
            localStorage.setItem("language", selectedLanguage);
        }
    }, [selectedLanguage]);

    const today = new Date();
    const dateString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    const monthString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;

    return (
        <Layout pageTitle="Drop Formulir | Tako Karier">
            <section className="flex-wrap items-center font-inter w-full bg-BgTako text-DarkTako">
                <NavElse />
                <div className="bg-BgTako py-32 container max-w-[1440px] px-4 md:px-8 xl:px-16 2xl:px-32 mx-auto">
                    <h1 className="font-bold text-xl md:text-2xl text-center rounded-lg">
                        {t("form.title")}
                    </h1>
                    <h2 className="text-center py-4 rounded-lg mb-4">
                        {t("form.sub")}
                    </h2>
                    <div className="bg-white mx-auto rounded-lg px-2 md:px-4 pt-8">
                        <form
                            onSubmit={onSubmit}
                            ref={formRef}
                            className="items-center space-y-4 w-full px-4 mx-auto pb-8"
                            // action="/submit_loker"
                            method="post"
                            encType="multipart/form-data"
                        >
                            <FormEmailPersonalData
                                register={register}
                                errors={errors}
                                values={values}
                                handleChange={handleChange}
                                dateString={dateString}
                                kabupatenOptions={kabupatenOptions}
                                handleKabupatenChange={handleKabupatenChange}
                            />
                            {/* Tempat Lahir*/}

                            {/* Alamat Tempat Tinggal*/}
                            {/* <div className="w-full pb-8">
                                <h1 className="pb-2">
                                    {t("form.address")}
                                    <span className="text-RedTako">*</span>
                                </h1>
                                <input
                                    {...register("alamat", { required: true })}
                                    className="w-full p-2 border-grey border-opacity-30 rounded"
                                    placeholder={t("form.address.ph")}
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
                            </div> */}

                            {/* <div className="py-4 md:py-8">
                                <div className="border-t w-full border-DarkTako border-opacity-25" />
                            </div> */}
                            <FormEmailStudy
                                register={register}
                                errors={errors}
                                values={values}
                                handleChange={handleChange}
                                monthString={monthString}
                            />
                            {/* <div className="py-4 md:py-8">
                                <div className="border-t w-full border-DarkTako border-opacity-25" />
                            </div> */}
                            {/* Gaji*/}

                            <FormEmailJob
                                register={register}
                                errors={errors}
                                values={values}
                                handleChange={handleChange}
                                monthString={monthString}
                                hasWorkExperience={hasWorkExperience}
                                setHasWorkExperience={setHasWorkExperience}
                            />

                            {/* Pekerjaan yang Diharapkan */}
                            <div className="w-full pb-4 md:w-[48.7%] lg:w-[48.8%] xl:w-[49%]">
                                <h1 className="pb-2">
                                    {t("form.job.expected")}
                                    {/* <span className="text-RedTako">
                                                        *
                                                    </span> */}
                                </h1>
                                <input
                                    {...register("pekerjaanyd", {
                                        required: true,
                                    })}
                                    className="w-full border-grey border-opacity-30 p-2 rounded"
                                    placeholder={t("form.job.expected.ph")}
                                    value={values.pekerjaanyd}
                                    id="pekerjaanyd"
                                    onChange={handleChange}
                                    aria-invalid={
                                        errors.pekerjaanyd ? "true" : "false"
                                    }
                                />
                                {errors.pekerjaanyd?.type === "required" && (
                                    <p role="alert">
                                        Tolong Nama jangan sampai kosong
                                    </p>
                                )}
                            </div>

                            {/* File PDF*/}
                            <FormEmailFile
                                register={register}
                                errors={errors}
                                values={values}
                                handleChange={handleChange}
                                onChangeCaptcha={onChangeCaptcha}
                            />
                            {/* Submit */}
                            <div className="w-full bg-BlueTako rounded-xl text-white text-center hover:bg-BlueTako hover:bg-opacity-90 transition-all">
                                {isLoading ? (
                                    <span className="loading loading-spinner py-4">
                                        Loading
                                    </span>
                                ) : (
                                    <input
                                        type="submit"
                                        className="w-full py-3 cursor-pointer text-white"
                                        value={t("form.submit")}
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
