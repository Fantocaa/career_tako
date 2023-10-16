import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Link, router, usePage } from "@inertiajs/react";

const CascadingCity = () => {
    const [provinsiOptions, setProvinsiOptions] = useState([]);
    const [kabupatenOptions, setKabupatenOptions] = useState([]);
    const [kecamatanOptions, setKecamatanOptions] = useState([]);

    const [selectedProvinsi, setSelectedProvinsi] = useState(null);

    useEffect(() => {
        // Panggil API untuk mendapatkan daftar provinsi saat komponen dimuat
        fetch("/provinsi")
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
        setSelectedProvinsi(selectedOption); // Simpan nilai provinsi yang dipilih
        // Ambil kode provinsi yang dipilih
        const kodeProvinsi = selectedOption.value;

        // Panggil API untuk mendapatkan daftar kabupaten/kota berdasarkan kode provinsi
        fetch(`/kabupaten/${kodeProvinsi}`)
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
        // Ambil kode kabupaten/kota yang dipilih
        const kodeKabupaten = selectedOption.value;

        // Ambil kode provinsi yang dipilih
        const kodeProvinsi = selectedProvinsi.value;

        // Panggil API untuk mendapatkan daftar kecamatan berdasarkan kode kabupaten/kota dan kode provinsi
        fetch(`/kecamatan/${kodeProvinsi}/${kodeKabupaten}`)
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

    return (
        <>
            <div className="block md:flex pb-4">
                <div className="w-full md:w-[50%] pb-4 mr-4">
                    <h2 className="pb-2">Provinsi</h2>
                    <Select
                        options={provinsiOptions}
                        onChange={handleProvinsiChange}
                        value={values.provinsi}
                    />
                </div>
                <div className="w-full md:w-[50%] mr-4">
                    <h2 className="pb-2">Kabupaten/Kota</h2>
                    <Select
                        options={kabupatenOptions}
                        onChange={handleKabupatenChange}
                        value={values.kabupaten}
                    />
                </div>
            </div>
            <div className="block md:flex">
                <div className="w-full mr-4 pb-4">
                    <h2 className="pb-2">Kecamatan</h2>
                    <Select
                        options={kecamatanOptions}
                        value={values.kecamatan}
                    />
                </div>
                <div className="w-full">
                    <h2 className="w-full md:w-[50%] pb-2 mr-4">Kode Pos</h2>
                    <input
                        type="number"
                        className="w-full p-2 border-grey border-opacity-30 rounded"
                    />
                </div>
            </div>
        </>
    );
};

export default CascadingCity;
