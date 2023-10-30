import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { useQuill } from "react-quilljs";
// import "quill/dist/quill.snow.css";
import Axios from "axios";
import { Link, router, usePage } from "@inertiajs/react";
import QuillEditor from "@/Components/Dashboard/QuillEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import DOMPurify from "dompurify";
import Select from "react-select";

const EditLoker = () => {
    // const { quill, quillRef } = useQuill();
    const { route } = usePage(); // Menggunakan usePage untuk mendapatkan informasi route

    const {
        register,
        handleSubmit,
        formState: { errors },
        // setValue,
        // getValues,
        // reset,
        // watch,
    } = useForm({
        mode: "onChange", // Trigger validasi saat nilai berubah

        defaultValues: {
            // Nilai awal jika perlu
            pekerjaan: "",
            perusahaan: "",
            jenis_pekerjaan: "",
            batas_lamaran: "",
            isi_konten: "",
            deskripsi: "",
            skill: "",
        },
    });

    const [selectedPerusahaan, setSelectedPerusahaan] = useState(null);

    const [skills, setSkills] = useState([""]); // State untuk menyimpan keterampilan
    const addNewSkill = () => {
        if (skills.length < 6) {
            const newSkills = [...skills, ""];
            setSkills(newSkills);
        }
    };
    const removeSkill = (index) => {
        const newSkills = [...skills];
        newSkills.splice(index, 1);
        setSkills(newSkills);
    };

    const [nomor, setNomor] = useState(""); // State untuk menyimpan nomor
    const [values, setValues] = useState({
        password: "meong",
        pekerjaan: "",
        perusahaan: "",
        jenis_pekerjaan: "",
        batas_lamaran: "", // Inisialisasi properti batas_lamaran
        isi_konten: "",
        deskripsi: "",
        skill: "",
    });

    const options = [
        {
            value: "PT. Berlian Anugerah Transportasi",
            label: "PT. Berlian Anugerah Transportasi",
        },
        {
            value: "PT. Anugerah Jelajah Indonesia Logistic",
            label: "PT. Anugerah Jelajah Indonesia Logistic",
        },
        {
            value: "PT. Anugerah Trans Maritim",
            label: "PT. Anugerah Trans Maritim",
        },
        {
            value: "PT. FAM Indonesia Logistik",
            label: "PT. FAM Indonesia Logistik",
        },
        {
            value: "PT. PINT Indonesia Logistik",
            label: "PT. PINT Indonesia Logistik",
        },
        {
            value: "PT. Cahaya Abadi Logistik",
            label: "PT. Cahaya Abadi Logistik",
        },
        {
            value: "PT. Anugerah Berkat Transportasi",
            label: "PT. Anugerah Berkat Transportasi",
        },
        {
            value: "PT. Anugerah Global Logistik",
            label: "PT. Anugerah Global Logistik",
        },
        {
            value: "PT. Anugerah Mandiri International Trans",
            label: "PT. Anugerah Mandiri International Trans",
        },
        {
            value: "PT. Anugerah Multi Logistik",
            label: "PT. Anugerah Multi Logistik",
        },
        {
            value: "PT. Perahu Tangguh Logistik",
            label: "PT. Perahu Tangguh Logistik",
        },
        {
            value: "PT. Armada Berkat Anugerah",
            label: "PT. Armada Berkat Anugerah",
        },
        {
            value: "PT. Anggrek Gorontalo Internasional Terminal",
            label: "PT. Anggrek Gorontalo Internasional Terminal",
        },
        {
            value: "PT. Hamparan Anugerah Sejati",
            label: "PT. Hamparan Anugerah Sejati",
        },
        {
            value: "PT. Anugerah Kartika Agro",
            label: "PT. Anugerah Kartika Agro",
        },
        {
            value: "PT. Berlimpah Anugerah Sejati",
            label: "PT. Berlimpah Anugerah Sejati",
        },
    ];

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

        // const handleQuillChange = (content) => {
        //     setValues((prevValues) => ({
        //         ...prevValues,
        //         deskripsi: content,
        //     }));

        let formattedValue = value;

        if (key === "batas_lamaran") {
            // Ensure that the input value is in "yyyy-MM-dd" format
            const parts = value.split("-");
            if (parts.length === 3) {
                const year = parts[0];
                const month = String(parts[1]).padStart(2, "0");
                const day = String(parts[2]).padStart(2, "0");
                formattedValue = `${day}-${month}-${year}`;
            } else {
                console.error("Invalid date format:", value);
            }
        }

        setValues((values) => ({
            ...values,
            [key]: formattedValue,
        }));
    };

    const perusahaan = selectedPerusahaan ? selectedPerusahaan.value : "";

    async function sumit(e) {
        e.preventDefault();

        try {
            // Membersihkan deskripsi dari konten HTML yang tidak diinginkan
            const cleanedDeskripsi = DOMPurify.sanitize(values.deskripsi);
            // Kirim data ke server
            // const response = await Axios.post("/form", ...values,  );
            const response = await Axios.post("/form", {
                ...values,
                deskripsi: cleanedDeskripsi,
                perusahaan: perusahaan,
            });

            // Jika permintaan berhasil, perbarui nomor dengan nomor berikutnya
            setNomor(response.data.id + 1);

            // Bersihkan formulir
            setValues({
                password: "meong",
                pekerjaan: "",
                perusahaan: "",
                jenis_pekerjaan: "",
                batas_lamaran: "", // Reset nilai batas_lamaran
                isi_konten: "",
                skill: "",
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
    console.log(values.perusahaan);

    return (
        <div className="bg-BgTako py-16 text-DarkTako font-inter">
            <div className="container mx-auto bg-white p-8 rounded-lg">
                <div className="flex items-center gap-4">
                    <img src="/images/plus.svg" className="scale-100" alt="" />
                    <h1 className="font-bold text-2xl">Tambah Baru</h1>
                </div>
                <form onSubmit={sumit} className=" pt-8">
                    {/* <div>
                    <h1 className="pb-2">Nomor</h1>
                    <input
                        type="text"
                        readOnly
                        value={nomor}
                        className="w-full p-2 border-grey border-opacity-30 rounded"
                    />
                </div> */}
                    <div className="flex gap-8">
                        <div className="w-full">
                            <h1 className="pb-2">Pekerjaan</h1>
                            <input
                                // {...register("pekerjaan", {
                                //     required: "Pekerjaan harus diisi",
                                //     minLength: {
                                //         value: 5,
                                //         message:
                                //             "Pekerjaan harus memiliki minimal 5 karakter",
                                //     },
                                // })}
                                {...register("pekerjaan", { required: true })}
                                className="w-full p-2 border-grey border-opacity-30 rounded"
                                placeholder="Masukkan Pekerjaan"
                                id="pekerjaan"
                                value={values.pekerjaan}
                                onChange={(e) => handleChange(e, "pekerjaan")}
                            />
                            {/* {errors.pekerjaan && (
                                <span className="text-RedTako">
                                    {errors.pekerjaan.message}
                                </span>
                            )} */}
                        </div>
                        <div className="w-full">
                            <h1 className="pb-2">Perusahaan</h1>
                            <Select
                                options={options}
                                placeholder={"Masukkan Perusahaan"}
                                id={"perusahaan"}
                                value={values.perusahaan}
                                // onChange={handleChange}
                                onChange={(selectedOption) =>
                                    setSelectedPerusahaan(selectedOption)
                                }
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        padding: "2px",
                                    }),
                                }}
                            />
                            {/* <input
                                {...register("perusahaan", { required: true })}
                                className="w-full p-2 border-grey border-opacity-30 rounded"
                                placeholder="Masukkan Perusahaan"
                                id="perusahaan"

                                value={values.perusahaan}
                                onChange={handleChange}
                            /> */}
                            {/* {errors.perusahaan && (
                                <span className="text-RedTako">
                                    Perusahaan jangan sampai kosong
                                </span>
                            )} */}
                        </div>
                    </div>

                    <div className="flex gap-8 py-4">
                        <div className="w-full">
                            <h1 className="pb-2">Jenis Pekerjaan</h1>
                            <select
                                {...register("jenis_pekerjaan", {
                                    required: true,
                                })}
                                value={values.jenis_pekerjaan} // Gunakan nilai dari state
                                // onChange={handleChange}
                                onChange={(e) => {
                                    const selectedValue = e.target.value;
                                    setValues((prevValues) => ({
                                        ...prevValues,
                                        jenis_pekerjaan: selectedValue, // Update nilai jenis_pekerjaan dalam state values
                                    }));
                                }}
                                className="w-full p-2 border-grey border-opacity-30 rounded cursor-pointer"
                                placeholder="Pilih Jenis Pekerjaan" // Anda dapat menyertakan placeholder jika diperlukan
                            >
                                <option value="">Pilih Jenis Pekerjaan</option>
                                <option value="Internship">Internship</option>
                                <option value="Profesional">Profesional</option>
                            </select>
                            {errors.jenis_pekerjaan && (
                                <span className="text-RedTako">
                                    Jenis Pekerjaan jangan sampai kosong
                                </span>
                            )}
                        </div>

                        <div className="w-full relative">
                            {/* <FontAwesomeIcon
                                icon={faCalendar}
                                className="absolute top-11 left- -z-0"
                            /> */}
                            <h1 className="pb-2">Batas Lamaran</h1>

                            <div className="absolute items-center opacity-75 right-2 bottom-1 scale-75 pointer-events-none">
                                <img src="/images/calendar.svg" alt="" />
                            </div>
                            <input
                                type="date" // Gunakan input tanggal
                                // type="text" // Gunakan input tanggal
                                {...register("batas_lamaran", {
                                    required: true,
                                })}
                                className="w-full p-2 border-grey border-opacity-30 rounded z-10"
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

                    {/* <div className="w-full">
                        <div className="flex justify-between">
                            <h1 className="pb-2">Skill yang dibutuhkan</h1>
                            <span
                                onClick={addNewSkill}
                                className="cursor-pointer"
                            >
                                Tambah baru
                            </span>
                        </div>
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4"
                            >
                                <input
                                    {...register(`skill[${index}]`, {
                                        required: true,
                                    })}
                                    className="w-1/6 p-2 border-grey border-opacity-30 rounded"
                                    placeholder="Masukkan Skill"
                                    value={values.skill}
                                    onChange={(e) => {
                                        const newSkills = [...skills];
                                        newSkills[index] = e.target.value;
                                        setSkills(newSkills);
                                    }}
                                />
                                <span onClick={() => removeSkill(index)}>
                                    Hapus
                                </span>
                            </div>
                        ))}
                        {errors.skill && (
                            <span className="text-RedTako">
                                Skill jangan sampai kosong
                            </span>
                        )}
                    </div> */}

                    <div className="w-full">
                        <h1 className="pb-2">Deskripsi</h1>
                        <input
                            {...register("isi_konten", { required: true })}
                            className="w-full p-2 border-grey border-opacity-30 rounded"
                            placeholder="Masukkan Deskripsi Anda"
                            id="isi_konten"
                            // pake isi_konten karena ngirim ke deskripsi (varchar)
                            value={values.isi_konten}
                            onChange={handleChange}
                        />
                        {errors.isi_konten && (
                            <span className="text-RedTako">
                                Deskripsi jangan sampai kosong
                            </span>
                        )}
                    </div>

                    {/* <div style={{ width: 800, height: 300 }}>
                    <div ref={quillRef} />
                </div> */}

                    <div className="w-full pt-4">
                        <h1 className="pb-2">Isi Konten</h1>
                        <QuillEditor
                            // pake deskripsi karena ngirim ke isi_konten (Mediumtext)
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

export default EditLoker;
