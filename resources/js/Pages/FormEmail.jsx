import React, { useRef, useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import Footer from "@/Components/Shared/Footer";
import NavElse from "@/Components/Shared/Else/NavElse";
import { Link, router, usePage, Head } from "@inertiajs/react";
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
    const { md_loker } = props;

    // const [provinsiOptions, setProvinsiOptions] = useState([]);
    const [kabupatenOptions, setKabupatenOptions] = useState([]);
    // const [kecamatanOptions, setKecamatanOptions] = useState([]);

    // const [selectedProvinsi, setSelectedProvinsi] = useState(null);

    // const [isProvinsiSelected, setIsProvinsiSelected] = useState(false);
    // const [isKecamatanSelected, setIsKecamatanSelected] = useState(false);
    const [isKabupatenSelected, setIsKabupatenSelected] = useState(false);
    const [riwayatPekerjaan, setRiwayatPekerjaan] = useState([{}]);
    const [hasWorkExperience, setHasWorkExperience] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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
        kabupaten: "",
        alamat: "",
        no_telp: "",
        file: "",
        pendidikan: "",
        prodi: "",
        thn_in: "",
        thn_out: "",
        instansi: "",
        riwayat: [
            {
                riwayat_nama_perusahaan: "",
                riwayat_alamat_perusahaan: "",
                riwayat_tahun_in: "",
                riwayat_tahun_out: "",
                riwayat_posisi: "",
                riwayat_tugas: "",
                riwayat_berhenti: "",
                gaji: "",
            },
        ],
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
                return;
            }
        }

        // Update nested work experience fields
        if (key.startsWith("riwayat[")) {
            const fieldName = key.split(".").pop();
            const newRiwayat = [...values.riwayat];
            newRiwayat[index][fieldName] = value;

            setValues((values) => ({
                ...values,
                [key]: value,
                riwayat: newRiwayat,
            }));
        } else {
            setValues((values) => ({
                ...values,
                [key]: value,
            }));
        }
    };

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
                formData.append("pekerjaan", values.pekerjaan);
                formData.append("jenis_pekerjaan", values.jenis_pekerjaan);
                formData.append("nama", values.nama);
                formData.append("nik", values.nik);
                formData.append("jenis_kelamin", values.jenis_kelamin);
                formData.append("tanggal_lahir", values.tanggal_lahir);
                formData.append("agama", values.agama);
                formData.append("emails", values.emails);
                formData.append("no_telp", values.no_telp);
                formData.append("kabupaten", values.kabupaten);
                formData.append("alamat", values.alamat);
                formData.append("pendidikan", values.pendidikan);
                formData.append("prodi", values.prodi);
                formData.append("thn_in", values.thn_in);
                formData.append("thn_out", values.thn_out);
                formData.append("instansi", values.instansi);
                // Tambahkan data pengalaman kerja hanya jika hasWorkExperience bernilai true
                if (hasWorkExperience) {
                    values.riwayat.forEach((item, index) => {
                        formData.append(
                            `riwayat[${index}][riwayat_nama_perusahaan]`,
                            item.riwayat_nama_perusahaan,
                        );
                        formData.append(
                            `riwayat[${index}][riwayat_alamat_perusahaan]`,
                            item.riwayat_alamat_perusahaan,
                        );
                        formData.append(
                            `riwayat[${index}][riwayat_tahun_in]`,
                            item.riwayat_tahun_in,
                        );
                        formData.append(
                            `riwayat[${index}][riwayat_tahun_out]`,
                            item.riwayat_tahun_out,
                        );
                        formData.append(
                            `riwayat[${index}][riwayat_posisi]`,
                            item.riwayat_posisi,
                        );
                        formData.append(
                            `riwayat[${index}][riwayat_tugas]`,
                            item.riwayat_tugas,
                        );
                        formData.append(
                            `riwayat[${index}][riwayat_berhenti]`,
                            item.riwayat_berhenti,
                        );
                        formData.append(`riwayat[${index}][gaji]`, item.gaji);
                    });
                }
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
                alert("2.");
            }
        } else {
            setTimeout(() => {
                // Setelah operasi selesai, tampilkan kembali tombol dan sembunyikan elemen loading
                alert("3.");
                setIsLoading(false);
            }, 1000); // Ganti 2000 dengan waktu yang sesuai dengan kebutuhan Anda
        }
    }

    let capca = "";
    const onChangeCaptcha = (value) => {
        capca = value;
    };

    const { selectedLanguage } = useContext(LanguageContext);
    const { t } = useTranslation(); // Tambahkan ini

    // useEffect(() => {
    //     const storedLanguage = localStorage.getItem("language");
    //     if (storedLanguage !== selectedLanguage) {
    //         localStorage.setItem("language", selectedLanguage);
    //     }
    //     translatePekerjaan(selectedLanguage || storedLanguage || "id");
    // }, [selectedLanguage]);

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        changeLanguage(storedLanguage);
    }); // kalau pakai [] dijalankan sekali . kalau dihapus dijalankan berkali kali

    useEffect(() => {
        const storedLanguage = localStorage.getItem(
            "language",
            selectedLanguage,
        );
        changeLanguage(storedLanguage);
    }, [selectedLanguage]);

    const translateText = async (text, language) => {
        let translatedText = localStorage.getItem(
            `translation-${language}-${text}`,
        );

        if (language === "id") {
            return text;
        } else if (translatedText) {
            return translatedText;
        } else {
            try {
                const response = await axios.post("/api/translate", {
                    text: text,
                    target: language,
                });
                translatedText = he.decode(response.data);
                localStorage.setItem(
                    `translation-${language}-${text}`,
                    translatedText,
                );
                return translatedText;
            } catch (error) {
                console.error(error);
            }
        }
    };

    const [translatedPekerjaan, setTranslatedPekerjaan] = useState("");

    useEffect(() => {
        (async () => {
            const result = await translateText(
                values.pekerjaan,
                selectedLanguage,
            );
            setTranslatedPekerjaan(result);
        })();
    }, [values.pekerjaan, selectedLanguage]);

    const changeLanguage = (language) => {
        // setIsTranslating(true);
        // console.log(`Changing language to: ${language}`);
        const elementsToTranslate = document.querySelectorAll(".translate");

        elementsToTranslate.forEach((element, index) => {
            if (!element.dataset.originalText) {
                element.dataset.originalText = element.innerText;
            }

            let translatedText = localStorage.getItem(
                `translation-${language}-${element.dataset.originalText}`,
            );

            if (language === "id") {
                element.innerText = element.dataset.originalText;
            } else if (translatedText) {
                element.innerText = translatedText;
            } else {
                axios
                    .post("/api/translate", {
                        text: element.innerText,
                        target: language,
                    })
                    .then((response) => {
                        console.log(response.data); // Pastikan respons diterima dengan benar
                        element.innerText = he.decode(response.data);
                        localStorage.setItem(
                            `translation-${language}-${element.dataset.originalText}`,
                            he.decode(response.data),
                        );
                        console.log(
                            `translate '${element.dataset.originalText}' to '${he.decode(response.data)}'`,
                        );
                    })
                    .catch((error) => {
                        console.error(error);
                    });

                console.log(
                    `Translation request sent for '${element.dataset.originalText}'`,
                );
            }

            if (index === elementsToTranslate.length - 1) {
                // setIsTranslating(false);
            }
        });
    };

    // useEffect(() => {
    //     const storedLanguage = localStorage.getItem("language");
    //     if (storedLanguage !== selectedLanguage) {
    //         localStorage.setItem("language", selectedLanguage);
    //     }
    //     translatePekerjaan(selectedLanguage || storedLanguage || "id");
    // }, [selectedLanguage]);

    const today = new Date();
    const dateString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    const monthString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;

    return (
        <>
            <Head title="Formulir" />
            {/* <Layout pageTitle="Formulir | Tako Karier"> */}
            <section className="flex-wrap items-center font-inter w-full bg-BgTako text-DarkTako">
                <NavElse />
                <div className="bg-BgTako py-32 container max-w-[1440px] px-4 md:px-8 xl:px-16 2xl:px-32 mx-auto">
                    <h1 className="font-bold text-xl md:text-2xl text-center rounded-lg">
                        {t("form.title")}
                    </h1>
                    <h2 className="text-center py-4 rounded-lg mb-4">
                        {t("form.sub")}
                    </h2>
                    <div className="bg-white mx-auto rounded-lg px-2 md:px-4 pt-4">
                        <form
                            onSubmit={onSubmit}
                            // onSubmit={handleSubmit(onSubmit)}
                            // ref={formRef}
                            className="items-center space-y-4 w-full px-4 mx-auto pb-8"
                            // action="/submit_loker"
                            method="post"
                            encType="multipart/form-data"
                        >
                            <FormJobSelected
                                register={register}
                                translatedPekerjaan={translatedPekerjaan}
                                values={values}
                            />

                            <FormEmailPersonalData
                                register={register}
                                errors={errors}
                                values={values}
                                handleChange={handleChange}
                                dateString={dateString}
                                kabupatenOptions={kabupatenOptions}
                                handleKabupatenChange={handleKabupatenChange}
                            />

                            <FormEmailStudy
                                register={register}
                                errors={errors}
                                values={values}
                                handleChange={handleChange}
                                monthString={monthString}
                            />

                            <FormEmailJob
                                register={register}
                                errors={errors}
                                values={values}
                                setValues={setValues}
                                handleChange={handleChange}
                                monthString={monthString}
                                hasWorkExperience={hasWorkExperience}
                                setHasWorkExperience={setHasWorkExperience}
                            />
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
            {/* </Layout> */}
        </>
    );
};

export default FormEmail;
